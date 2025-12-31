import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

const registerProviderSchema = z.object({
  businessName: z.string().min(3, 'Business name must be at least 3 characters'),
  skills: z.string().min(10, 'Please describe your skills'),
  experienceYears: z.number().int().min(0, 'Experience years must be 0 or greater'),
});

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth(request);

    // Check if user already has a provider profile
    const existingProvider = await prisma.provider.findUnique({
      where: { userId: user.userId },
    });

    if (existingProvider) {
      return NextResponse.json(
        { error: 'Provider profile already exists' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const validatedData = registerProviderSchema.parse(body);

    // Create provider profile
    const provider = await prisma.provider.create({
      data: {
        ...validatedData,
        userId: user.userId,
        verificationStatus: 'PENDING',
      },
    });

    // Update user role to PROVIDER
    await prisma.user.update({
      where: { id: user.userId },
      data: { role: 'PROVIDER' },
    });

    // Create wallet for provider
    await prisma.wallet.create({
      data: {
        providerId: provider.id,
      },
    });

    return NextResponse.json(
      {
        message: 'Provider profile created successfully. Awaiting verification.',
        provider,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      );
    }

    if (error instanceof Error && error.message.includes('Unauthorized')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.error('Error creating provider profile:', error);
    return NextResponse.json(
      { error: 'Failed to create provider profile' },
      { status: 500 }
    );
  }
}
