import Link from 'next/link';

export default function HomePage() {
  const categories = [
    { icon: '❄️', name: 'AC Repair', description: 'Installation & maintenance' },
    { icon: '🧹', name: 'Cleaning', description: 'Home & office cleaning' },
    { icon: '🔧', name: 'Plumbing', description: 'Repairs & installations' },
    { icon: '⚡', name: 'Electrical', description: 'Wiring & installations' },
    { icon: '🎨', name: 'Painting', description: 'Interior & exterior' },
    { icon: '🪚', name: 'Carpentry', description: 'Custom furniture' },
  ];

  const features = [
    {
      title: 'Verified Professionals',
      description: 'All service providers are thoroughly verified and background-checked',
      icon: '✓',
    },
    {
      title: 'Secure Payments',
      description: 'Safe and encrypted payment processing through Stripe',
      icon: '🔒',
    },
    {
      title: 'Quality Guarantee',
      description: 'Get the best service or your money back',
      icon: '⭐',
    },
    {
      title: '24/7 Support',
      description: 'Our support team is always here to help you',
      icon: '💬',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Professional Services at Your Doorstep
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with verified professionals for AC repair, cleaning, plumbing, and more.
              Book instantly and get the job done right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Browse Services
              </Link>
              <Link
                href="/become-provider"
                className="bg-primary hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Become a Provider
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Popular Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href="/services"
                className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-secondary hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-primary mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Why Choose Profix?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Choose a Service</h3>
              <p className="text-gray-600">
                Browse our wide range of professional services and select what you need
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Book & Pay</h3>
              <p className="text-gray-600">
                Select a time slot, provide details, and make a secure payment
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Get Service</h3>
              <p className="text-gray-600">
                Relax while our verified professional takes care of everything
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of satisfied customers who trust Profix for their service needs
          </p>
          <Link
            href="/services"
            className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block transition-colors"
          >
            Explore Services Now
          </Link>
        </div>
      </section>
    </div>
  );
}
