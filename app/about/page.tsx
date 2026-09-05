import Link from 'next/link';
import CTASection from '@/components/home/CTASection';

export const metadata = {
  title: 'About Us - Elite Estates',
  description: 'Learn about Elite Estates, our mission, values, and the dedicated team helping clients find their perfect properties.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Leading the company with 15+ years of real estate expertise.',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Sales',
      description: 'Expert negotiator with a proven track record in luxury properties.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      description: 'Ensuring seamless property management and client satisfaction.',
    },
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Integrity',
      description: 'We operate with honesty and transparency in every transaction.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Client-Focused',
      description: 'Your needs and goals are at the center of everything we do.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Excellence',
      description: 'We strive for excellence in service, expertise, and results.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'Leveraging technology to provide the best real estate experience.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Elite Estates
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Your trusted partner in real estate for over a decade
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  Founded in 2020, Elite Estates began with a simple mission: to revolutionize the real estate experience by combining expert knowledge with cutting-edge technology and personalized service.
                </p>
                <p>
                  What started as a small boutique agency has grown into one of the most trusted names in real estate, serving hundreds of satisfied clients and facilitating over 1,000 successful property transactions.
                </p>
                <p>
                  Our team of certified professionals brings decades of combined experience in residential, commercial, and luxury real estate markets. We pride ourselves on our deep market knowledge, extensive network, and unwavering commitment to our clients&apos; success.
                </p>
                <p>
                  Today, Elite Estates continues to set the standard for excellence in real estate services, helping clients find not just properties, but their perfect homes and investment opportunities.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-50 rounded-xl p-8 text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-secondary-700 font-medium">Years in Business</div>
              </div>
              <div className="bg-primary-50 rounded-xl p-8 text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-secondary-700 font-medium">Properties Sold</div>
              </div>
              <div className="bg-primary-50 rounded-xl p-8 text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-secondary-700 font-medium">Active Listings</div>
              </div>
              <div className="bg-primary-50 rounded-xl p-8 text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-secondary-700 font-medium">Expert Agents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-secondary-600 leading-relaxed mb-8">
              To empower our clients with expert guidance, innovative tools, and personalized service that transforms the complex process of buying, selling, or renting property into a seamless and rewarding experience.
            </p>
            <div className="bg-primary-600 text-white rounded-2xl p-8 md:p-12">
              <p className="text-2xl md:text-3xl font-semibold italic">
                &quot;We don&apos;t just sell properties; we help people find their perfect place to call home and build their financial future through smart real estate investments.&quot;
              </p>
              <p className="mt-6 text-primary-100 text-lg">- Sarah Johnson, CEO & Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every service we provide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Placeholder for team member photo */}
                <div className="bg-primary-100 h-64 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-primary-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-secondary-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Team expansion note */}
          <div className="mt-12 text-center">
            <p className="text-secondary-600 mb-4">
              Plus 50+ dedicated agents and support staff ready to serve you
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work With Us?"
        description="Experience the Elite Estates difference. Let our expert team help you achieve your real estate goals."
        primaryButtonText="View Properties"
        primaryButtonLink="/properties"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />

      {/* Note for developers */}
      {/* 
        TODO: Future enhancements for About page
        - Add real team member photos
        - Integrate with CMS for dynamic content management
        - Add awards and certifications section
        - Include client testimonials/reviews
        - Add video introduction from CEO
        - Implement timeline of company milestones
      */}
    </div>
  );
}
