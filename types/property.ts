export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in square feet
  type: 'house' | 'apartment' | 'villa' | 'condo';
  status: 'for-sale' | 'for-rent' | 'sold';
  images: string[];
  description: string;
  features: string[];
  yearBuilt: number;
  featured?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId?: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId: string;
}
