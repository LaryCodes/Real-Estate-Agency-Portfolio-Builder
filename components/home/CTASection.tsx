import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CTASection = ({
  title = "Ready to Find Your Dream Property?",
  description = "Let our expert team help you discover the perfect home or investment opportunity. Start your journey today.",
  primaryButtonText = "Browse Properties",
  primaryButtonLink = "/properties",
  secondaryButtonText = "Contact Us",
  secondaryButtonLink = "/contact",
}: CTASectionProps) => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-500 to-primary-800 animate-gradient"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButtonLink}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-white rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-white text-primary-600 px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg">
              {primaryButtonText}
            </div>
          </Link>
          <Link
            href={secondaryButtonLink}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-white/50 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-primary-600 transition-all duration-300 shadow-lg">
              {secondaryButtonText}
            </div>
          </Link>
        </div>

        {/* Stats or Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '1000+', label: 'Properties Sold' },
            { number: '500+', label: 'Active Listings' },
            { number: '50+', label: 'Expert Agents' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
