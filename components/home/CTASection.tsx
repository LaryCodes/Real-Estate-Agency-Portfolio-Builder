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
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryButtonLink}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-block"
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonLink}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
