import { createClient } from 'next-sanity';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';
import { token } from './token';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2025-06-24',
  useCdn: true,
  token: token,
  stega: {
    studioUrl: process.env.SANITY_STUDIO_URL,
  },
});

const builder = imageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
