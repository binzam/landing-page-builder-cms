import { Button } from '@/components/ui/Button';
import { urlForImage } from '@/sanity/client';
import { Hero } from '@/sanity/types';
import Image from 'next/image';

type Props = {
  section: Hero;
  imagePosition: 'left' | 'right';
};

export default function ImageTextRow({
  section,
  imagePosition = 'right',
}: Props) {
  const { backgroundImage, heading, subtitle, primaryButton } = section;

  return (
    <section
      className={` custom-height max-h-[660px] px-4 py-10 ${imagePosition === 'left' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-neutral-dark/0 via-neutral-dark/5 to-neutral-dark/10 dark:from-neutral-light/0 dark:via-neutral-light/5 dark:to-neutral-light/10 `}
    >
      <div
        className={`w-full max-w-[1500px] h-full flex items-center justify-between mx-auto ${imagePosition === 'left' ? 'flex-row-reverse' : 'flex-row'}`}
      >
        <div
          className={`flex-1 max-w-fit h-full z-100 text-left  py-4 flex flex-col  justify-center  ${imagePosition === 'left' ? 'pl-8 pr-4' : 'pl-4 pr-8'}`}
        >
          <h1 className="max-w-2xl text-4xl sm:text-7xl text-shadow-sm text-shadow-neutral-dark tracking-wide font-extrabold  text-left text-neutral-dark dark:text-neutral-light/90 capitalize">
            {heading}
          </h1>
          <div className="max-w-xl  flex flex-col items-start justify-center mt-8">
            <p className="text-sm/4 sm:text-lg md:text-xl/6  font-semibold text-left mb-6 text-primary-dark dark:text-primary-light">
              {subtitle}
            </p>
            {primaryButton && (
              <Button
                asChild
                size="xl"
                variant="default"
                className="rounded-custom-radius w-fit  shadow shadow-neutral-dark tracking-wide  font-bold bg-primary dark:bg-primary-dark text-neutral-light hover:bg-accent-1/90"
              >
                <a href={primaryButton.link}>{primaryButton.text}</a>
              </Button>
            )}
          </div>
        </div>
        {backgroundImage && (
          <div className="relative flex-1 max-w-2/5 h-full rounded-2xl   ">
            <Image
              src={urlForImage(backgroundImage)
                .auto('format')
                .quality(50)
                .url()}
              alt="Background"
              fill
              className={`object-cover z-0 rounded-2xl ${imagePosition === 'left' ? 'border-r-4 border-r-accent-1 dark:border-r-accent-1' : 'border-l-4 border-l-accent-1 dark:border-l-accent-1'} `}
              priority
            />
            <div className="absolute inset-0 dark:bg-gradient-to-t from-neutral-dark/40  rounded-2xl via-[#333333]/50 to-[#222]/70 z-10 " />
          </div>
        )}
      </div>
    </section>
  );
}
