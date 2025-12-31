import Link from 'next/link';

export default function HomePage() {
  const categories = [
    { icon: '❄️', name: 'AC Repair', description: 'Installation & maintenance', gradient: 'from-sky-500 to-blue-600' },
    { icon: '🧹', name: 'Cleaning', description: 'Home & office cleaning', gradient: 'from-purple-500 to-pink-600' },
    { icon: '🔧', name: 'Plumbing', description: 'Repairs & installations', gradient: 'from-orange-500 to-red-600' },
    { icon: '⚡', name: 'Electrical', description: 'Wiring & installations', gradient: 'from-yellow-500 to-orange-600' },
    { icon: '🎨', name: 'Painting', description: 'Interior & exterior', gradient: 'from-green-500 to-emerald-600' },
    { icon: '🪚', name: 'Carpentry', description: 'Custom furniture', gradient: 'from-amber-500 to-yellow-700' },
  ];

  const features = [
    {
      title: 'Verified Professionals',
      description: 'All service providers are thoroughly verified and background-checked',
      icon: '✓',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Secure Payments',
      description: 'Safe and encrypted payment processing through Stripe',
      icon: '🔒',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Quality Guarantee',
      description: 'Get the best service or your money back',
      icon: '⭐',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      title: '24/7 Support',
      description: 'Our support team is always here to help you',
      icon: '💬',
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Ultra Modern */}
      <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] py-24 md:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#ff6b35]/30 to-[#f59e0b]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#10b981]/10 to-[#06b6d4]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff6b35] to-[#f59e0b] text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl mb-8 animate-bounce">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              Trusted by 10,000+ Happy Customers
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight">
              Professional Home Services
              <span className="block mt-3 bg-gradient-to-r from-[#ff6b35] via-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent animate-gradient">
                Delivered to Your Door
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect with <span className="text-white font-bold">verified experts</span> for AC repair, cleaning, plumbing, electrical work, and more.
              <span className="block mt-3 text-[#ff6b35] font-semibold text-2xl">Book in seconds. Pay securely. Relax.</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="/services"
                className="group relative bg-gradient-to-r from-[#ff6b35] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#ff6b35] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-[#ff6b35]/50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Services
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/become-provider"
                className="group relative bg-white hover:bg-gray-50 text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20"
              >
                <span className="flex items-center justify-center gap-2">
                  Become a Provider
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Stats - Enhanced */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/20 to-[#f59e0b]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all">
                  <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">1000+</div>
                  <div className="text-gray-300 font-semibold">Expert Providers</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all">
                  <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">50K+</div>
                  <div className="text-gray-300 font-semibold">Services Completed</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/20 to-[#06b6d4]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all">
                  <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">4.9★</div>
                  <div className="text-gray-300 font-semibold">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Ultra Modern */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#ff6b35]/10 to-[#f59e0b]/10 rounded-full text-[#ff6b35] font-bold text-sm mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Popular Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose from our wide range of professional services delivered by verified experts</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                href="/services"
                className="group relative bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent transform hover:-translate-y-3 hover:rotate-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-6xl mb-5 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#ff6b35] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-700">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Ultra Modern */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#ff6b35]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#3b82f6]/10 to-[#8b5cf6]/10 rounded-full text-[#3b82f6] font-bold text-sm mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Why Profix Masters?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We make it incredibly easy to get professional services you can trust</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center bg-gradient-to-br ${feature.gradient} text-white rounded-2xl w-20 h-20 mb-6 text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#ff6b35] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Ultra Modern */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10b981]/10 to-[#06b6d4]/10 rounded-full text-[#10b981] font-bold text-sm mb-4">
              SIMPLE PROCESS
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get professional service in three simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { 
                step: 1, 
                title: 'Choose Service', 
                desc: 'Browse our wide range of professional services and select what you need', 
                icon: '🔍',
                gradient: 'from-[#3b82f6] to-[#8b5cf6]'
              },
              { 
                step: 2, 
                title: 'Book & Pay', 
                desc: 'Select a time slot, provide details, and make a secure payment', 
                icon: '📅',
                gradient: 'from-[#ff6b35] to-[#f59e0b]'
              },
              { 
                step: 3, 
                title: 'Get Service', 
                desc: 'Relax while our verified professional takes care of everything', 
                icon: '✨',
                gradient: 'from-[#10b981] to-[#06b6d4]'
              }
            ].map((item, index) => (
              <div key={item.step} className="relative group">
                {/* Connection line for desktop */}
                {item.step < 3 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-1 bg-gradient-to-r from-gray-300 to-transparent z-0"></div>
                )}
                
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent transform hover:-translate-y-3">
                  {/* Gradient Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#ff6b35] to-[#f59e0b] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                      {item.step}
                    </div>
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center bg-gradient-to-br ${item.gradient} text-white rounded-3xl w-28 h-28 mb-6 text-5xl shadow-xl mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      {item.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#ff6b35] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Ultra Modern */}
      <section className="py-24 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#ff6b35]/30 to-[#f59e0b]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-full font-bold mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b35] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff6b35]"></span>
            </span>
            Join 10,000+ Satisfied Customers
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the <span className="text-white font-bold">easiest way</span> to book professional home services.
            <span className="block mt-3 text-[#ff6b35] font-semibold text-2xl">Quality guaranteed. Always.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/services"
              className="group relative bg-gradient-to-r from-[#ff6b35] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#ff6b35] text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-[#ff6b35]/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Explore Services Now
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/register"
              className="group relative bg-white/10 backdrop-blur-lg border-2 border-white/30 hover:bg-white hover:text-gray-900 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Sign Up Free
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">SSL Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Verified Providers</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
