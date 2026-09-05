import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/types/property';
import { formatPrice, formatArea } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Property Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
            {property.status === 'for-sale' ? 'For Sale' : property.status === 'for-rent' ? 'For Rent' : 'Sold'}
          </span>
        </div>
        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="p-6">
        {/* Price */}
        <div className="mb-2">
          <span className="text-2xl font-bold text-primary-600">
            {formatPrice(property.price)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-secondary-600 mb-4">
          <svg
            className="w-4 h-4 mr-1"
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
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Property Features */}
        <div className="flex items-center justify-between text-secondary-600 border-t border-secondary-200 pt-4">
          <div className="flex items-center space-x-4">
            {/* Bedrooms */}
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-sm">{property.bedrooms} Beds</span>
            </div>

            {/* Bathrooms */}
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <span className="text-sm">{property.bathrooms} Baths</span>
            </div>

            {/* Area */}
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span className="text-sm">{formatArea(property.area)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
