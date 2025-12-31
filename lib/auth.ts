import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key'
);

export interface TokenPayload {
  userId: string;
  email: string;
  role: string;
}

export async function signToken(payload: TokenPayload): Promise<string> {
  return await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string): Promise<TokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    
    if (
      typeof payload.userId === 'string' &&
      typeof payload.email === 'string' &&
      typeof payload.role === 'string'
    ) {
      return {
        userId: payload.userId,
        email: payload.email,
        role: payload.role,
      };
    }
    
    return null;
  } catch (error) {
    return null;
  }
}

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
}

export async function getAuthToken(): Promise<string | null> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get('auth-token');
  return cookie?.value || null;
}

export async function removeAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete('auth-token');
}

export async function getCurrentUser(): Promise<TokenPayload | null> {
  const token = await getAuthToken();
  if (!token) return null;
  return await verifyToken(token);
}

export async function requireAuth(request?: NextRequest): Promise<TokenPayload> {
  let token: string | null = null;
  
  if (request) {
    token = request.cookies.get('auth-token')?.value || null;
  } else {
    token = await getAuthToken();
  }
  
  if (!token) {
    throw new Error('Unauthorized');
  }
  
  const payload = await verifyToken(token);
  if (!payload) {
    throw new Error('Invalid token');
  }
  
  return payload;
}

export async function requireRole(role: string | string[], request?: NextRequest): Promise<TokenPayload> {
  const user = await requireAuth(request);
  const roles = Array.isArray(role) ? role : [role];
  
  if (!roles.includes(user.role)) {
    throw new Error('Forbidden');
  }
  
  return user;
}
