import { defineLive } from 'next-sanity';
import { client } from '@/sanity/client';
import { token } from './token';

export const { sanityFetch, SanityLive } = defineLive({
  client,
  browserToken: token,
  serverToken: token,
});
