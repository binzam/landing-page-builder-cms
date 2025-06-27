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
      className={`w-full h-auto md:custom-height md:max-h-[660px]  px-4 sm:px-6 py-6 sm:py-10 md:py-16  ${imagePosition === 'left' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-neutral-dark/0 via-neutral-dark/5 to-neutral-dark/10 dark:from-neutral-light/0 dark:via-neutral-light/5 dark:to-neutral-light/10 `}
    >
      <div
        className={`w-full max-w-[1500px] h-full flex flex-col mx-auto ${imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-0`}
      >
        <div
          className={`w-full md:flex-1  h-full z-100 text-left  py-4 flex flex-col  justify-center  ${imagePosition === 'left' ? 'md:pl-8 md:pr-4 pl-0 pr-0' : 'md:pl-4 md:pr-8 pl-0 pr-0'}`}
        >
          <h1 className="text-[32px] sm:text-5xl md:text-6xl lg:text-7xl md:max-w-[24ch]   text-shadow-sm text-shadow-neutral-dark tracking-wide font-extrabold  text-center md:text-left text-neutral-dark dark:text-neutral-light/90 capitalize">
            {heading}
          </h1>
          <div className="max-w-xl mx-auto md:mx-0 flex flex-col items-center md:items-start justify-center mt-6 sm:mt-8">
            <p className=" text-sm/4 sm:text-lg md:text-xl/6  font-semibold text-center md:text-left  mb-4 sm:mb-6  text-primary-dark dark:text-primary-light">
              {subtitle}
            </p>
            {primaryButton && (
              <Button
                asChild
                size="xl"
                variant="default"
                className="rounded-custom-radius  w-fit  shadow shadow-neutral-dark tracking-wide  font-bold bg-primary dark:bg-primary-dark text-neutral-light hover:bg-accent-1/90"
              >
                <a href={primaryButton.link}>{primaryButton.text}</a>
              </Button>
            )}
          </div>
        </div>
        {backgroundImage && (
          <div className="relative w-full md:flex-1 md:max-w-2/5  h-[200px] sm:h-[400px] md:h-auto  rounded-xl md:rounded-2xl    ">
            <Image
              src={urlForImage(backgroundImage)
                .auto('format')
                .quality(50)
                .url()}
              alt="Background"
              fill
              className={`object-cover z-0  rounded-xl md:rounded-2xl  ${imagePosition === 'left' ? 'md:border-r-4 border-b-4 md:border-b-0  border-r-accent-1 dark:border-r-accent-1' : 'md:border-l-4 border-b-4 md:border-b-0 border-l-accent-1 dark:border-l-accent-1'} `}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 dark:bg-gradient-to-t from-neutral-dark/40   rounded-xl md:rounded-2xl  via-[#333333]/50 to-[#222]/70 z-10 " />
          </div>
        )}
      </div>
    </section>
  );
}
