import { Hero } from '@/sanity/types';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { urlForImage } from '@/sanity/client';

type Props = {
  section: Hero;
  textOnly: boolean;
};

export default function Centered({ section, textOnly = false }: Props) {
  const { backgroundImage, heading, subtitle, primaryButton } = section;
  return (
    <section
      className={`relative h-screen max-h-[660px] px-4 py-10 ${!textOnly ? 'z-30 bg-gradient-to-b from-neutral-dark/40 via-[#333333]/50 to-[#222]/70 dark:bg-gradient-to-t dark:from-neutral-light/5 dark:via-neutral-light/5 dark:to-neutral-light/10' : 'bg-gradient-to-b from-neutral-dark/40 via-[#333333]/50 to-[#222]/70'} `}
    >
      {!textOnly && backgroundImage && (
        <>
          <Image
            src={urlForImage(backgroundImage).auto('format').quality(50).url()}
            alt="Background"
            fill
            className="object-cover z-0"
            priority
          />
          <div className="absolute inset-0  bg-gradient-to-b from-neutral-dark/40 via-[#333333]/50 to-[#222]/70 z-10" />
        </>
      )}

      <div className="relative w-full h-full max-w-[1500px] mx-auto flex items-center justify-center text-center px-4 z-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl text-shadow-sm text-shadow-neutral-dark tracking-wide font-extrabold text-neutral-dark dark:text-neutral-light capitalize">
            {heading}
          </h1>
          <p className="max-w-2xl mx-auto text-sm/4 sm:text-lg md:text-xl/6 font-semibold text-primary-dark dark:text-primary-light mt-8 mb-6">
            {subtitle}
          </p>
          {primaryButton && (
            <Button
              asChild
              size="xl"
              variant="default"
              className="rounded-custom-radius w-fit shadow shadow-neutral-dark tracking-wide font-bold bg-primary dark:bg-primary-dark text-neutral-light hover:bg-accent-1/90"
            >
              <a href={primaryButton.link}>{primaryButton.text}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
