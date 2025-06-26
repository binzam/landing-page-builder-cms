import { Button } from '@/components/ui/Button';
import { urlForImage } from '@/sanity/client';
import { Header } from '@/sanity/types';
import Image from 'next/image';
import MobileNav from '../MobileNav';

export default function CenteredLogoHeader({ section }: { section: Header }) {
  const { logoImage, logoText, navLinks, ctaButton } = section;

  return (
    <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-2   px-4 py-4 h-[70px]">
      <div className="hidden md:block">
        {ctaButton && (
          <Button
            asChild
            variant="default"
            size="lg"
            className="rounded-custom-radius tracking-wide font-bold text-neutral-light bg-primary dark:bg-primary-dark shadow shadow-neutral-dark dark:shadow-neutral-light "
          >
            <a href={ctaButton.link}>{ctaButton.text}</a>
          </Button>
        )}
      </div>
      <div className="flex items-center gap-2">
        {logoImage && (
          <Image
            src={urlForImage(logoImage).url()}
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        )}
        {logoText && <h1 className="text-xl sm:text-2xl font-bold">{logoText}</h1>}
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks?.map(
          (link) =>
            link.href && (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-semibold tracking-wide text-neutral-dark dark:text-neutral-light hover:text-primary dark:hover:text-primary-light"
              >
                {link.title}
              </a>
            )
        )}
      </nav>
      <MobileNav navLinks={navLinks} ctaButton={ctaButton} />
    </div>
  );
}
