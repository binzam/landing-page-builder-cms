import type { Metadata } from 'next';
import { roboto, spaceGrotesk, poppins } from '@/lib/fonts';
import { SanityLive } from '@/sanity/live';
import './globals.css';
import { draftMode } from 'next/headers';
import { VisualEditing } from 'next-sanity';
import { DisableDraftMode } from '@/components/DisableDraftMode';

export const metadata: Metadata = {
  title: 'Page builder | CMS',
  description: 'A landing page builder CMS',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${poppins.className} ${spaceGrotesk.className}`}
      >
        {children}
        <SanityLive />
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  );
}
