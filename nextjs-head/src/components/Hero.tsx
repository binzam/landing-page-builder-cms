import { urlForImage } from '@/sanity/client';
import { Button } from './ui/Button';
import Image from 'next/image';
import { Hero } from '@/sanity/types';
export default function HeroSection({ section }: { section: Hero }) {
  const { backgroundImage, heading, subtitle, primaryButton } = section;
  return (
    <section className=" h-screen  max-h-[660px]  p-2">
      <div className=" relative w-full h-full flex items-center justify-center mx-auto overflow-hidden rounded-2xl">
        {backgroundImage && (
          <>
            <Image
              src={urlForImage(backgroundImage)
                .auto('format')
                .quality(50)
                .url()}
              alt="Background"
              fill
              className="object-cover z-0"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60  via-neutral-dark/70 to-neutral-dark/80 z-10" />
          </>
        )}
        <div className="relative w-full h-full z-100 text-center p-4 flex justify-center ">
          <h1 className="max-w-xl  text-4xl sm:text-5xl md:text-8xl text-shadow-sm text-shadow-neutral-dark tracking-wide font-extrabold my-auto  text-left text-accent-1 capitalize">
            {heading}
          </h1>
          <div className="max-w-2xl  flex flex-col items-center justify-center">
            <p className="text-sm/4 sm:text-lg md:text-4xl/12 mb-12 max-w-3xl text-center mx-auto text-neutral-light">
              {subtitle}
            </p>
            {primaryButton && (
              <Button
                asChild
                size="xl"
                variant="default"
                className="custom-radius w-fit  shadow shadow-neutral-dark tracking-wide  font-bold bg-accent-1 text-neutral-light hover:bg-primary/90"
              >
                <a href={primaryButton.link}>{primaryButton.text}</a>
              </Button>
            )}
          </div>
        </div>
        {/* //variant */}
      </div>
    </section>
  );
}
