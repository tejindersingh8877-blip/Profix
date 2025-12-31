'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || data.message || 'Login failed. Please check your credentials.');
        setLoading(false);
        return;
      }

      // Success - redirect based on role
      if (data.user.role === 'ADMIN') {
        router.push('/admin');
      } else if (data.user.role === 'PROVIDER') {
        router.push('/dashboard/provider');
      } else {
        router.push('/');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error. Please check your connection and try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#1a2c3d] to-[#0f1922] p-12 flex-col justify-between">
        <div>
          <h2 className="text-white text-3xl font-bold mb-2">Profix Masters Center</h2>
          <p className="text-gray-300">Your trusted platform for professional home services</p>
        </div>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="bg-[#ff6b35] rounded-lg p-3 flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Verified Professionals</h3>
              <p className="text-gray-400 text-sm">All service providers are background-checked and verified</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-[#ff6b35] rounded-lg p-3 flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Secure Payments</h3>
              <p className="text-gray-400 text-sm">Safe and encrypted payment processing</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-[#ff6b35] rounded-lg p-3 flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Quality Guarantee</h3>
              <p className="text-gray-400 text-sm">Get the best service or your money back</p>
            </div>
          </div>
        </div>
        
        <div className="text-gray-400 text-sm">
          <p>© 2025 Profix Masters Center. All rights reserved.</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#1a2c3d] mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to your account</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="h-12 text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <Link href="/forgot-password" className="text-sm text-[#ff6b35] hover:text-[#e55a2b]">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="h-12 text-base"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold text-base rounded-lg transition-colors"
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Don't have an account?</span>
              </div>
            </div>

            {/* Register Link */}
            <Link href="/register">
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 border-2 border-[#1a2c3d] text-[#1a2c3d] hover:bg-[#1a2c3d] hover:text-white font-semibold text-base rounded-lg transition-colors"
              >
                Create New Account
              </Button>
            </Link>

            {/* Test Account Info */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-medium text-blue-900 mb-1">Test Account</p>
              <p className="text-xs text-blue-700">admin@profixmasters.com / admin123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
