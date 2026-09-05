import Link from 'next/link';

export default function PropertyNotFound() {
  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
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
          <h1 className="text-6xl font-bold text-secondary-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-secondary-900 mb-4">
            Property Not Found
          </h2>
          <p className="text-secondary-600 mb-8 max-w-md mx-auto">
            Sorry, the property you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/properties"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Browse All Properties
          </Link>
          <Link
            href="/"
            className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
