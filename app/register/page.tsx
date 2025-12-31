'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'CUSTOMER',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          role: formData.role,
        }),
        credentials: 'include',
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || data.message || 'Registration failed');
        setLoading(false);
        return;
      }

      // Redirect to appropriate dashboard
      if (formData.role === 'PROVIDER') {
        router.push('/become-provider');
      } else {
        router.push('/services');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('Network error. Please check your connection and try again.');
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] p-12 flex-col justify-between">
        <div>
          <h2 className="text-white text-3xl font-bold mb-2">Profix Masters Center</h2>
          <p className="text-white/90">Join thousands of satisfied customers and trusted providers</p>
        </div>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="bg-white/20 backdrop-blur rounded-lg p-3 flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Join Our Community</h3>
              <p className="text-white/80 text-sm">Connect with professionals or offer your services</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-white/20 backdrop-blur rounded-lg p-3 flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Safe & Secure</h3>
              <p className="text-white/80 text-sm">Your data is protected with industry-standard encryption</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-white/20 backdrop-blur rounded-lg p-3 flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Quick Setup</h3>
              <p className="text-white/80 text-sm">Get started in minutes with our simple registration</p>
            </div>
          </div>
        </div>
        
        <div className="text-white/70 text-sm">
          <p>© 2025 Profix Masters Center. All rights reserved.</p>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#1a2c3d] mb-2">Create Account</h1>
              <p className="text-gray-600">Join Profix Masters Center today</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="h-11 text-base"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="h-11 text-base"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                  Phone Number <span className="text-gray-400 font-normal">(Optional)</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="h-11 text-base"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              <div>
                <Label htmlFor="role" className="text-sm font-medium text-gray-700 mb-2 block">
                  Account Type
                </Label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  disabled={loading}
                  className="flex h-11 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] focus-visible:ring-offset-2"
                >
                  <option value="CUSTOMER">Customer - Book Services</option>
                  <option value="PROVIDER">Provider - Offer Services</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2 block">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Min. 8 characters"
                    className="h-11 text-base"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-2 block">
                    Confirm
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm"
                    className="h-11 text-base"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold text-base rounded-lg transition-colors mt-6"
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Already have an account?</span>
              </div>
            </div>

            {/* Login Link */}
            <Link href="/login">
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 border-2 border-[#1a2c3d] text-[#1a2c3d] hover:bg-[#1a2c3d] hover:text-white font-semibold text-base rounded-lg transition-colors"
              >
                Sign In Instead
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
