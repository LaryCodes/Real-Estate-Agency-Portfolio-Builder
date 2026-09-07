import Hero from '@/components/home/Hero';
import PropertyGrid from '@/components/properties/PropertyGrid';
import CTASection from '@/components/home/CTASection';
import { getFeaturedProperties } from '@/lib/properties';
import Link from 'next/link';

export default function Home() {
  const featuredProperties = getFeaturedProperties();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Properties Section */}
      <section className="py-16 md:py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PropertyGrid
            properties={featuredProperties}
            title="Featured Properties"
            description="Explore our hand-picked selection of premium properties available now"
          />

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/properties"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Agency Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Welcome to Elite Estates
              </h2>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                With over a decade of experience in the real estate industry, Elite Estates has established itself as a trusted name in property sales and rentals. We specialize in connecting discerning clients with exceptional properties that match their lifestyle and investment goals.
              </p>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Our team of experienced professionals is dedicated to providing personalized service, expert market insights, and seamless transactions. Whether you&apos;re buying your first home, upgrading to a luxury estate, or investing in commercial property, we&apos;re here to guide you every step of the way.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-lg p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 mb-1">Trusted Service</h3>
                    <p className="text-sm text-zinc-600">10+ years of excellence</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-lg p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 mb-1">Expert Team</h3>
                    <p className="text-sm text-zinc-600">50+ certified agents</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-lg p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 mb-1">Wide Selection</h3>
                    <p className="text-sm text-zinc-600">500+ properties listed</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-lg p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 mb-1">Happy Clients</h3>
                    <p className="text-sm text-zinc-600">1000+ satisfied customers</p>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>

            {/* Image/Visual Content */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-primary-100 rounded-2xl h-48 flex items-center justify-center">
                    <svg
                      className="w-20 h-20 text-primary-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="bg-primary-600 rounded-2xl h-64 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">10+</div>
                      <div className="text-xl">Years Experience</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-primary-600 rounded-2xl h-64 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">1000+</div>
                      <div className="text-xl">Properties Sold</div>
                    </div>
                  </div>
                  <div className="bg-primary-100 rounded-2xl h-48 flex items-center justify-center">
                    <svg
                      className="w-20 h-20 text-primary-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Why Choose Elite Estates?
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              We go above and beyond to ensure your real estate experience is seamless, successful, and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                Extensive Property Portfolio
              </h3>
              <p className="text-zinc-600">
                Access to hundreds of premium properties across prime locations. From cozy apartments to luxury estates, we have something for everyone.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                Expert Guidance
              </h3>
              <p className="text-zinc-600">
                Our team of certified real estate professionals provides personalized guidance throughout your buying, selling, or renting journey.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                Fast & Efficient Process
              </h3>
              <p className="text-zinc-600">
                We streamline the entire process with modern technology and efficient workflows, saving you time and reducing stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CTASection />
    </div>
  );
}

