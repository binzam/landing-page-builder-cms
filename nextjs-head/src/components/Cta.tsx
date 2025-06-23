// import { ButtonType } from '@/types';
import { Button } from './ui/Button';
import { Cta } from '@/sanity/types';

export default function CTASection({ section }: { section: Cta }) {
  const { heading, subheading, button } = section;
  return (
    <section className="py-20 bg-primary dark:bg-primary-dark/50 mb-10 ">
      <div className="container px-4 text-center mx-auto">
        <h2 className="text-4xl font-extrabold mb-2 text-neutral-light">{heading}</h2>
        <p className="text-base font-semibold mb-8 max-w-2xl mx-auto text-primary-light ">
          {subheading}
        </p>
        {button && (
          <Button
            asChild
            variant="secondary"
            size="xl"
            className="bg-neutral-light text-primary-dark rounded-custom-radius shadow shadow-neutral-dark tracking-wide  "
          >
            <a href={button.link}>{button.text}</a>
          </Button>
        )}
      </div>
    </section>
  );
}
