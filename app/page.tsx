export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Welcome to Profix Masters Center
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional Service Marketplace
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Find and book professional services for AC repair, cleaning, home maintenance, and more.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/services"
              className="bg-secondary hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse Services
            </a>
            <a
              href="/become-provider"
              className="bg-primary hover:bg-primary-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Become a Provider
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
