// import { ButtonType } from '@/types';
import { Button } from './ui/Button';
import { Cta } from '@/sanity/types';

export default function CTASection({ section }: { section: Cta }) {
  const { heading, subheading, button } = section;
  return (
    <section className="py-20 ">
      <div className="container px-4 text-center mx-auto">
        <h2 className="text-4xl font-extrabold mb-2 text-primary">{heading}</h2>
        <p className="text-base font-semibold mb-8 max-w-2xl mx-auto text-accent-2">
          {subheading}
        </p>
        {button && (
          <Button
            asChild
            variant="secondary"
            size="xl"
            className="custom-radius shadow shadow-accent-1 tracking-wide  bg-secondary text-neutral-light hover:bg-secondary/90"
          >
            <a href={button.link}>{button.text}</a>
          </Button>
        )}
      </div>
    </section>
  );
}
