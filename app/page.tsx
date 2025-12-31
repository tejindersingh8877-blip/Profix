import Link from 'next/link';

export default function HomePage() {
  const categories = [
    { icon: '❄️', name: 'AC Repair', description: 'Installation & maintenance', color: 'from-blue-400 to-cyan-400' },
    { icon: '🧹', name: 'Cleaning', description: 'Home & office cleaning', color: 'from-purple-400 to-pink-400' },
    { icon: '🔧', name: 'Plumbing', description: 'Repairs & installations', color: 'from-orange-400 to-red-400' },
    { icon: '⚡', name: 'Electrical', description: 'Wiring & installations', color: 'from-yellow-400 to-orange-400' },
    { icon: '🎨', name: 'Painting', description: 'Interior & exterior', color: 'from-green-400 to-emerald-400' },
    { icon: '🪚', name: 'Carpentry', description: 'Custom furniture', color: 'from-amber-400 to-yellow-600' },
  ];

  const features = [
    {
      title: 'Verified Professionals',
      description: 'All service providers are thoroughly verified and background-checked',
      icon: '✓',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      title: 'Secure Payments',
      description: 'Safe and encrypted payment processing through Stripe',
      icon: '🔒',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'Quality Guarantee',
      description: 'Get the best service or your money back',
      icon: '⭐',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      title: '24/7 Support',
      description: 'Our support team is always here to help you',
      icon: '💬',
      gradient: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-primary via-primary-800 to-primary-900 py-20 md:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block animate-bounce mb-6">
              <div className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                🎉 Trusted by 10,000+ customers
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Professional Services
              <span className="block bg-gradient-to-r from-secondary to-yellow-400 bg-clip-text text-transparent">
                at Your Doorstep
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Connect with verified professionals for AC repair, cleaning, plumbing, and more.
              <span className="block mt-2 font-semibold text-white">Book instantly and get the job done right.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="group bg-gradient-to-r from-secondary to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Browse Services
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/become-provider"
                className="group bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Become a Provider
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">1000+</div>
                <div className="text-gray-300 text-sm md:text-base">Providers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">50K+</div>
                <div className="text-gray-300 text-sm md:text-base">Services Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">4.9★</div>
                <div className="text-gray-300 text-sm md:text-base">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Popular Services
            </h2>
            <p className="text-xl text-gray-600">Choose from our wide range of professional services</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {categories.map((category) => (
              <Link
                key={category.name}
                href="/services"
                className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-secondary transform hover:-translate-y-2"
              >
                <div className={`text-5xl mb-4 transition-transform group-hover:scale-110 duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Profix?
            </h2>
            <p className="text-xl text-gray-600">We make it easy to get professional services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div 
                key={feature.title} 
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-secondary"
              >
                <div className={`inline-block bg-gradient-to-r ${feature.gradient} text-white rounded-2xl p-4 mb-6 text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Get started in three simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { step: 1, title: 'Choose a Service', desc: 'Browse our wide range of professional services and select what you need', icon: '🔍' },
              { step: 2, title: 'Book & Pay', desc: 'Select a time slot, provide details, and make a secure payment', icon: '📅' },
              { step: 3, title: 'Get Service', desc: 'Relax while our verified professional takes care of everything', icon: '✨' }
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                {/* Connection line for desktop */}
                {item.step < 3 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-secondary to-transparent"></div>
                )}
                
                <div className="relative inline-block mb-6">
                  <div className="bg-gradient-to-r from-secondary to-secondary-600 text-white rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto shadow-xl relative z-10">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-lg">
                    {item.step}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Profix for their service needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="group bg-gradient-to-r from-secondary to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-10 py-5 rounded-xl font-bold text-lg inline-block transition-all duration-300 shadow-2xl hover:shadow-secondary/50 hover:scale-105"
            >
              Explore Services Now
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/register"
              className="group bg-white hover:bg-gray-100 text-primary px-10 py-5 rounded-xl font-bold text-lg inline-block transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Sign Up Free
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
