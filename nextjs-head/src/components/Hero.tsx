import { urlForImage } from '@/sanity/client';
import { Button } from './ui/Button';
import Image from 'next/image';
import { Hero } from '@/sanity/types';
export default function HeroSection({ section }: { section: Hero }) {
  const { backgroundImage, heading, subtitle, primaryButton } = section;
  return (
    <section className=" h-screen  max-h-[660px]  p-2 bg-neutral-light">
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
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/40  via-[#333333]/50 to-[#222]/70 z-10" />
          </>
        )}
        <div className="relative w-full h-full z-100 text-center p-4 flex flex-col items-center justify-center ">
          <h1 className=" max-w-4xl text-4xl sm:text-6xl text-shadow-sm text-shadow-neutral-dark tracking-wide font-extrabold  text-center text-primary capitalize">
            {heading}
          </h1>
          <div className="max-w-2xl  flex flex-col items-center justify-center mt-8">
            <p className="text-sm/4 sm:text-lg md:text-2xl/8 max-w-3xl font-bold text-center mb-6 text-neutral-light">
              {subtitle}
            </p>
            {primaryButton && (
              <Button
                asChild
                size="xl"
                variant="default"
                className="rounded-custom-radius w-fit  shadow shadow-neutral-dark tracking-wide  font-bold bg-primary text-neutral-light hover:bg-primary/90"
              >
                <a href={primaryButton.link}>{primaryButton.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
