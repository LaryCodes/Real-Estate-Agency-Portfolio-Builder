import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact Us - Elite Estates',
  description: 'Get in touch with Elite Estates. Our team is ready to help you find your perfect property or answer any questions.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Us',
      details: ['123 Real Estate Ave', 'New York, NY 10001', 'United States'],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568', 'Mon-Fri: 9AM - 6PM EST'],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      details: ['info@eliteestates.com', 'support@eliteestates.com', 'We reply within 24 hours'],
    },
  ];

  const departments = [
    {
      title: 'Sales Department',
      description: 'For buying or selling properties',
      email: 'sales@eliteestates.com',
      phone: '+1 (555) 123-4567',
    },
    {
      title: 'Rental Services',
      description: 'For property rentals and leasing',
      email: 'rentals@eliteestates.com',
      phone: '+1 (555) 123-4568',
    },
    {
      title: 'Property Management',
      description: 'For property maintenance and management',
      email: 'management@eliteestates.com',
      phone: '+1 (555) 123-4569',
    },
    {
      title: 'General Inquiries',
      description: 'For all other questions and support',
      email: 'info@eliteestates.com',
      phone: '+1 (555) 123-4567',
    },
  ];

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Have a question or ready to start your real estate journey? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-1 text-secondary-600">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-secondary-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                  Contact by Department
                </h2>
                <p className="text-secondary-600 mb-8">
                  Reach out to the right department for faster assistance
                </p>
              </div>

              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      {dept.title}
                    </h3>
                    <p className="text-secondary-600 text-sm mb-4">
                      {dept.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-secondary-700">
                        <svg
                          className="w-4 h-4 mr-2 text-primary-600"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a
                          href={`mailto:${dept.email}`}
                          className="hover:text-primary-600 transition-colors"
                        >
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-center text-secondary-700">
                        <svg
                          className="w-4 h-4 mr-2 text-primary-600"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a
                          href={`tel:${dept.phone.replace(/\s/g, '')}`}
                          className="hover:text-primary-600 transition-colors"
                        >
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Office Hours
              </h2>
              <p className="text-secondary-600">
                We&apos;re here to serve you during these hours
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Regular Business Hours
                </h3>
                <div className="space-y-2 text-secondary-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Emergency Support
                </h3>
                <p className="text-secondary-700 mb-4">
                  For urgent property matters and emergencies, our on-call team is available:
                </p>
                <div className="text-secondary-700">
                  <div className="flex justify-between">
                    <span>24/7 Emergency Line</span>
                    <span className="font-medium">+1 (555) 911-HELP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-secondary-100 h-96 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-20 h-20 text-secondary-400 mx-auto mb-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-secondary-600 text-lg">
                  Map integration placeholder
                </p>
                <p className="text-secondary-500 text-sm mt-2">
                  Google Maps or similar will be integrated here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note for developers */}
      {/* 
        TODO: Future enhancements for Contact page
        - Integrate Google Maps API for interactive map
        - Add live chat widget integration
        - Implement appointment booking system
        - Add FAQ section
        - Connect form to real email service/CRM
        - Add form validation with proper error handling
        - Implement CAPTCHA for spam prevention
        - Add office location photos
      */}
    </div>
  );
}
