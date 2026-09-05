import { Property } from '@/types/property';

// Mock property data for development
// Backend API integration will be added later
export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Luxury Apartment',
    price: 850000,
    location: 'Downtown, New York',
    address: '123 Park Avenue, New York, NY 10001',
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    type: 'apartment',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      'https://images.unsplash.com/photo-1502672260066-6bc35f0e1dd1?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    ],
    description: 'Stunning modern apartment in the heart of downtown. Features floor-to-ceiling windows with breathtaking city views, open-concept living spaces, and premium finishes throughout. Perfect for urban professionals seeking luxury living.',
    features: [
      'Floor-to-ceiling windows',
      'Modern kitchen with premium appliances',
      'Hardwood flooring',
      'Central air conditioning',
      'In-unit washer/dryer',
      'Concierge service',
      '24/7 security',
      'Fitness center access',
      'Rooftop terrace',
    ],
    yearBuilt: 2020,
    featured: true,
  },
  {
    id: '2',
    title: 'Spacious Family Home with Garden',
    price: 1200000,
    location: 'Suburban Hills, California',
    address: '456 Oak Street, Los Angeles, CA 90210',
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    ],
    description: 'Beautiful family home with spacious rooms and a large backyard garden. Located in a quiet, family-friendly neighborhood with excellent schools nearby. Perfect for growing families.',
    features: [
      'Large backyard garden',
      'Two-car garage',
      'Updated kitchen',
      'Master bedroom with ensuite',
      'Home office space',
      'Covered patio',
      'Energy-efficient windows',
      'Near top-rated schools',
    ],
    yearBuilt: 2015,
    featured: true,
  },
  {
    id: '3',
    title: 'Elegant Beachfront Villa',
    price: 2500000,
    location: 'Malibu Beach, California',
    address: '789 Ocean Drive, Malibu, CA 90265',
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    type: 'villa',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    ],
    description: 'Luxurious beachfront villa with panoramic ocean views. Features private beach access, infinity pool, and state-of-the-art amenities. An exclusive retreat for discerning buyers.',
    features: [
      'Private beach access',
      'Infinity pool',
      'Ocean view from every room',
      'Gourmet chef kitchen',
      'Wine cellar',
      'Home theater',
      'Smart home automation',
      'Guest house',
    ],
    yearBuilt: 2018,
    featured: true,
  },
  {
    id: '4',
    title: 'Contemporary Urban Condo',
    price: 625000,
    location: 'Arts District, Chicago',
    address: '321 Michigan Avenue, Chicago, IL 60601',
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    type: 'condo',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    ],
    description: 'Stylish contemporary condo in the vibrant Arts District. Open floor plan with modern finishes, perfect for young professionals or as an investment property.',
    features: [
      'Open floor plan',
      'Stainless steel appliances',
      'Granite countertops',
      'Walk-in closets',
      'Balcony',
      'Parking space included',
      'Near public transit',
      'Pet-friendly building',
    ],
    yearBuilt: 2019,
    featured: false,
  },
  {
    id: '5',
    title: 'Charming Victorian Townhouse',
    price: 975000,
    location: 'Historic District, Boston',
    address: '654 Beacon Street, Boston, MA 02116',
    bedrooms: 3,
    bathrooms: 2,
    area: 2400,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
    ],
    description: 'Beautifully restored Victorian townhouse with original architectural details. Combines historic charm with modern conveniences in a prime location.',
    features: [
      'Original hardwood floors',
      'Decorative moldings',
      'Fireplace',
      'Updated kitchen and baths',
      'Private courtyard',
      'High ceilings',
      'Walking distance to downtown',
      'Period features preserved',
    ],
    yearBuilt: 1895,
    featured: false,
  },
  {
    id: '6',
    title: 'Mountain View Estate',
    price: 1800000,
    location: 'Aspen Valley, Colorado',
    address: '987 Mountain Road, Aspen, CO 81611',
    bedrooms: 4,
    bathrooms: 3,
    area: 3800,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800',
      'https://images.unsplash.com/photo-1600566753051-e64eb1751f81?w=800',
    ],
    description: 'Spectacular mountain estate with breathtaking views. Features rustic elegance, vaulted ceilings, and direct access to hiking trails. Perfect mountain retreat.',
    features: [
      'Panoramic mountain views',
      'Vaulted ceilings',
      'Stone fireplace',
      'Heated floors',
      'Ski storage room',
      'Hot tub',
      'Three-car garage',
      'Adjacent to national forest',
    ],
    yearBuilt: 2017,
    featured: false,
  },
];

// Helper functions for filtering and searching
// These will be enhanced with backend integration later
export function getFeaturedProperties(): Property[] {
  return properties.filter(property => property.featured);
}

export function getPropertyById(id: string): Property | undefined {
  return properties.find(property => property.id === id);
}

export function getAllProperties(): Property[] {
  return properties;
}

export function searchProperties(query: string): Property[] {
  const lowerQuery = query.toLowerCase();
  return properties.filter(
    property =>
      property.title.toLowerCase().includes(lowerQuery) ||
      property.location.toLowerCase().includes(lowerQuery) ||
      property.description.toLowerCase().includes(lowerQuery)
  );
}

export function filterPropertiesByType(type: Property['type']): Property[] {
  return properties.filter(property => property.type === type);
}

export function filterPropertiesByStatus(status: Property['status']): Property[] {
  return properties.filter(property => property.status === status);
}
