import { Property } from '@/types/property';
import PropertyCard from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
  title?: string;
  description?: string;
}

const PropertyGrid = ({ properties, title, description }: PropertyGridProps) => {
  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-zinc-600 text-lg">No properties found.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Section Header */}
      {(title || description) && (
        <div className="mb-8 text-center">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-zinc-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;

