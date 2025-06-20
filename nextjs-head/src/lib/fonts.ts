import { Roboto, Poppins, Space_Grotesk } from 'next/font/google';

export const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const roboto = Roboto({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export const fontClassMap = {
  spaceGrotesk: spaceGrotesk.className,
  roboto: roboto.className,
  poppins: poppins.className,
};
