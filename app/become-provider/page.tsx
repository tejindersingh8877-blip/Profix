'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function BecomeProviderPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    businessName: '',
    skills: '',
    experienceYears: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/providers/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: formData.businessName,
          skills: formData.skills,
          experienceYears: parseInt(formData.experienceYears),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          setError('Please login first to become a provider');
          setTimeout(() => router.push('/login'), 2000);
          return;
        }
        setError(data.error || 'Failed to register as provider');
        setLoading(false);
        return;
      }

      setSuccess(true);
      setTimeout(() => {
        router.push('/dashboard/provider');
      }, 2000);
    } catch (err) {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Become a Service Provider
            </h1>
            <p className="text-xl text-gray-200">
              Join our platform and grow your business by connecting with customers who need your services
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Join Profix?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">Grow Your Business</h3>
              <p className="text-gray-600">
                Reach thousands of customers looking for your services
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Earn More</h3>
              <p className="text-gray-600">
                Set your own prices and manage your earnings with our wallet system
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Build Reputation</h3>
              <p className="text-gray-600">
                Get verified and receive reviews to build trust with customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {success ? (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">✓</div>
                    <h2 className="text-2xl font-bold text-green-600 mb-2">
                      Registration Successful!
                    </h2>
                    <p className="text-gray-600">
                      Your provider profile has been created and is awaiting verification.
                      Redirecting to dashboard...
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Provider Registration</CardTitle>
                  <CardDescription>
                    Fill in your business details to start offering services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                        {error}
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        type="text"
                        placeholder="Your Business Name"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="skills">Skills & Services *</Label>
                      <Textarea
                        id="skills"
                        name="skills"
                        placeholder="Describe your skills and the services you offer (e.g., AC repair, installation, maintenance)"
                        value={formData.skills}
                        onChange={handleChange}
                        rows={4}
                        required
                      />
                      <p className="text-sm text-gray-500">
                        Minimum 10 characters
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experienceYears">Years of Experience *</Label>
                      <Input
                        id="experienceYears"
                        name="experienceYears"
                        type="number"
                        min="0"
                        placeholder="0"
                        value={formData.experienceYears}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Your profile will be created with PENDING status</li>
                        <li>• Our team will review your application</li>
                        <li>• Once approved, you can start creating service listings</li>
                        <li>• A wallet will be automatically created for your earnings</li>
                      </ul>
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : 'Register as Provider'}
                    </Button>

                    <p className="text-center text-sm text-gray-600">
                      Don't have an account?{' '}
                      <a href="/register" className="text-secondary hover:underline font-semibold">
                        Sign up first
                      </a>
                    </p>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Register</h3>
              <p className="text-sm text-gray-600">
                Complete the registration form
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Get Verified</h3>
              <p className="text-sm text-gray-600">
                Wait for admin approval
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Create Services</h3>
              <p className="text-sm text-gray-600">
                List your services with pricing
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Start Earning</h3>
              <p className="text-sm text-gray-600">
                Accept bookings and earn
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
