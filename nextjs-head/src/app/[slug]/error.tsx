// error.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          {error.message.includes('400')
            ? 'Invalid Request'
            : 'Something went wrong'}
        </h1>
        <p className="mb-6">
          {error.message.includes('400')
            ? 'The request to our content server was invalid. Please check the page URL.'
            : 'We encountered an unexpected error while loading this page.'}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => router.push('/')}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            Go Home
          </button>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
