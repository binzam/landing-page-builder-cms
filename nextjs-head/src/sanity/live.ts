import { defineLive } from 'next-sanity';
import { client } from '@/sanity/client';
import { token } from './token';
const DEFAULT_TIMEOUT = 10000; // 10 seconds
const MAX_RETRIES = 3;
export const { sanityFetch, SanityLive } = defineLive({
  client,
  browserToken: token,
  serverToken: token,
});
export async function sanityFetchWithRetry(options: {
  query: string;
  params?: Record<string, unknown>;
  timeout?: number;
  retries?: number;
}) {
  const {
    query,
    params,
    timeout = DEFAULT_TIMEOUT,
    retries = MAX_RETRIES,
  } = options;

  try {
    const response = await client.fetch(query, params, {
      timeout,
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response) {
      throw new Error('No data returned from Sanity');
    }

    return { data: response };
  } catch (error) {
    console.error('Sanity fetch error:', error);

    if (retries > 0) {
      // Exponential backoff
      const delay = Math.pow(2, MAX_RETRIES - retries) * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
      return sanityFetchWithRetry({ ...options, retries: retries - 1 });
    }

    // Handle specific Sanity errors
    if (error instanceof Error && error.message.includes('400')) {
      throw new Error(
        'Invalid request to Sanity - check your query or parameters'
      );
    }

    throw error;
  }
}
