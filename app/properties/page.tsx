'use client';

import { useState } from 'react';
import PropertyGrid from '@/components/properties/PropertyGrid';
import { getAllProperties } from '@/lib/properties';
import { Property } from '@/types/property';

export default function PropertiesPage() {
  const allProperties = getAllProperties();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  // Filter functionality will be enhanced later with backend integration
  const filteredProperties = allProperties.filter((property: Property) => {
    // Search filter (visual only for now)
    const matchesSearch = searchQuery === '' || 
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());

    // Type filter
    const matchesType = selectedType === 'all' || property.type === selectedType;

    // Status filter
    const matchesStatus = selectedStatus === 'all' || property.status === selectedStatus;

    // Price range filter (simplified for now)
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const price = property.price;
      switch (priceRange) {
        case 'under-500k':
          matchesPrice = price < 500000;
          break;
        case '500k-1m':
          matchesPrice = price >= 500000 && price < 1000000;
          break;
        case '1m-2m':
          matchesPrice = price >= 1000000 && price < 2000000;
          break;
        case 'over-2m':
          matchesPrice = price >= 2000000;
          break;
      }
    }

    return matchesSearch && matchesType && matchesStatus && matchesPrice;
  });

  const handleReset = () => {
    setSearchQuery('');
    setSelectedType('all');
    setSelectedStatus('all');
    setPriceRange('all');
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Page Header */}
      <section className="bg-primary-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse Properties</h1>
          <p className="text-xl text-primary-100">
            Discover your perfect property from our extensive collection
          </p>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="bg-white border-b border-zinc-200 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by location, property name, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 pl-12 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400"
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
          </div>

          {/* Filter Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Property Type Filter */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-zinc-700 mb-2">
                Property Type
              </label>
              <select
                id="type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              >
                <option value="all">All Types</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="condo">Condo</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-zinc-700 mb-2">
                Status
              </label>
              <select
                id="status"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              >
                <option value="all">All Status</option>
                <option value="for-sale">For Sale</option>
                <option value="for-rent">For Rent</option>
                <option value="sold">Sold</option>
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-zinc-700 mb-2">
                Price Range
              </label>
              <select
                id="price"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              >
                <option value="all">All Prices</option>
                <option value="under-500k">Under $500K</option>
                <option value="500k-1m">$500K - $1M</option>
                <option value="1m-2m">$1M - $2M</option>
                <option value="over-2m">Over $2M</option>
              </select>
            </div>

            {/* Reset Button */}
            <div className="flex items-end">
              <button
                onClick={handleReset}
                className="w-full px-4 py-2 border border-zinc-300 text-zinc-700 rounded-lg hover:bg-zinc-50 transition-colors font-medium"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-zinc-600">
            Showing <span className="font-semibold">{filteredProperties.length}</span> of{' '}
            <span className="font-semibold">{allProperties.length}</span> properties
          </div>
        </div>
      </section>

      {/* Properties Grid Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProperties.length > 0 ? (
            <PropertyGrid properties={filteredProperties} />
          ) : (
            <div className="text-center py-16">
              <svg
                className="w-24 h-24 text-secondary-300 mx-auto mb-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-2">
                No properties found
              </h3>
              <p className="text-zinc-600 mb-6">
                Try adjusting your filters or search query to find more results.
              </p>
              <button
                onClick={handleReset}
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Note for developers */}
      {/* 
        TODO: Backend integration required
        - Connect to real property database
        - Implement advanced search with full-text search
        - Add sorting options (price, date, popularity)
        - Implement pagination for large result sets
        - Add more filter options (bedrooms, bathrooms, area range)
        - Implement saved searches and favorites
        - Add map view option
      */}
    </div>
  );
}

