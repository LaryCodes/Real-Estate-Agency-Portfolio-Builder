import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPropertyById, getAllProperties } from '@/lib/properties';
import { formatPrice, formatArea } from '@/lib/utils';
import ContactForm from '@/components/contact/ContactForm';

// Generate static params for all properties
// This enables static generation for all property pages
export async function generateStaticParams() {
  const properties = getAllProperties();
  return properties.map((property) => ({
    id: property.id,
  }));
}

interface PropertyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    return {
      title: 'Property Not Found',
    };
  }

  return {
    title: `${property.title} - Elite Estates`,
    description: property.description,
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = getPropertyById(id);

  // If property not found, show 404
  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-secondary-600">
            <Link href="/" className="hover:text-primary-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-primary-600">
              Properties
            </Link>
            <span>/</span>
            <span className="text-secondary-900 font-medium">{property.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Image Gallery */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Primary Image */}
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase">
                    {property.status === 'for-sale' ? 'For Sale' : property.status === 'for-rent' ? 'For Rent' : 'Sold'}
                  </span>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-2 p-4">
                {property.images.slice(0, 3).map((image, index) => (
                  <div key={index} className="relative h-24 md:h-32 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${property.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 33vw, 200px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Property Overview */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center text-secondary-600 mb-4">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{property.address}</span>
                </div>
                <div className="text-4xl font-bold text-primary-600">
                  {formatPrice(property.price)}
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-b border-secondary-200">
                <div>
                  <div className="text-secondary-600 text-sm mb-1">Bedrooms</div>
                  <div className="text-2xl font-semibold text-secondary-900">
                    {property.bedrooms}
                  </div>
                </div>
                <div>
                  <div className="text-secondary-600 text-sm mb-1">Bathrooms</div>
                  <div className="text-2xl font-semibold text-secondary-900">
                    {property.bathrooms}
                  </div>
                </div>
                <div>
                  <div className="text-secondary-600 text-sm mb-1">Area</div>
                  <div className="text-2xl font-semibold text-secondary-900">
                    {formatArea(property.area)}
                  </div>
                </div>
                <div>
                  <div className="text-secondary-600 text-sm mb-1">Year Built</div>
                  <div className="text-2xl font-semibold text-secondary-900">
                    {property.yearBuilt}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  Description
                </h2>
                <p className="text-secondary-600 leading-relaxed">
                  {property.description}
                </p>
              </div>
            </div>

            {/* Property Features */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-6">
                Property Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-secondary-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Property Details Grid */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-6">
                Property Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-between border-b border-secondary-200 pb-3">
                  <span className="text-secondary-600">Property Type</span>
                  <span className="font-semibold text-secondary-900 capitalize">
                    {property.type}
                  </span>
                </div>
                <div className="flex justify-between border-b border-secondary-200 pb-3">
                  <span className="text-secondary-600">Property Status</span>
                  <span className="font-semibold text-secondary-900 capitalize">
                    {property.status.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex justify-between border-b border-secondary-200 pb-3">
                  <span className="text-secondary-600">Bedrooms</span>
                  <span className="font-semibold text-secondary-900">
                    {property.bedrooms}
                  </span>
                </div>
                <div className="flex justify-between border-b border-secondary-200 pb-3">
                  <span className="text-secondary-600">Bathrooms</span>
                  <span className="font-semibold text-secondary-900">
                    {property.bathrooms}
                  </span>
                </div>
                <div className="flex justify-between border-b border-secondary-200 pb-3">
                  <span className="text-secondary-600">Area</span>
                  <span className="font-semibold text-secondary-900">
                    {formatArea(property.area)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-secondary-200 pb-3">
                  <span className="text-secondary-600">Year Built</span>
                  <span className="font-semibold text-secondary-900">
                    {property.yearBuilt}
                  </span>
                </div>
                <div className="flex justify-between border-b border-secondary-200 pb-3">
                  <span className="text-secondary-600">Property ID</span>
                  <span className="font-semibold text-secondary-900">
                    #{property.id.padStart(6, '0')}
                  </span>
                </div>
                <div className="flex justify-between border-b border-secondary-200 pb-3">
                  <span className="text-secondary-600">Location</span>
                  <span className="font-semibold text-secondary-900">
                    {property.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-6">
                Inquire About This Property
              </h2>
              <ContactForm propertyId={property.id} propertyTitle={property.title} />

              {/* Agent Contact Info */}
              <div className="mt-8 pt-8 border-t border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Contact Our Agent
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-secondary-600">
                    <svg
                      className="w-5 h-5 mr-3 text-primary-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+15551234567" className="hover:text-primary-600">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center text-secondary-600">
                    <svg
                      className="w-5 h-5 mr-3 text-primary-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@eliteestates.com" className="hover:text-primary-600">
                      info@eliteestates.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Share This Property
                </h3>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-secondary-100 hover:bg-secondary-200 text-secondary-700 py-2 rounded-lg transition-colors">
                    <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button className="flex-1 bg-secondary-100 hover:bg-secondary-200 text-secondary-700 py-2 rounded-lg transition-colors">
                    <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button className="flex-1 bg-secondary-100 hover:bg-secondary-200 text-secondary-700 py-2 rounded-lg transition-colors">
                    <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Properties Button */}
        <div className="mt-12">
          <Link
            href="/properties"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Properties
          </Link>
        </div>
      </div>

      {/* Note for developers */}
      {/* 
        TODO: Future enhancements
        - Add image lightbox/gallery functionality
        - Implement virtual tour integration
        - Add mortgage calculator
        - Show similar properties section
        - Implement property comparison feature
        - Add schedule viewing functionality
        - Backend API integration for dynamic data
      */}
    </div>
  );
}
