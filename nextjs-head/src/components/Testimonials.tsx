import { cn } from '@/lib/utils';
import { urlForImage } from '@/sanity/client';
import { Testimonial } from '@/sanity/types';
import Image from 'next/image';

export default function TestimonialsSection({
  section,
}: {
  section: Testimonial;
}) {
  const { heading, subheading, layout, testimonials = [] } = section;
  return (
    <section className="py-20 ">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl text-shadow-xs text-shadow-neutral-dark font-extrabold text-center mb-4 text-primary">
          {heading}
        </h2>
        <p className="text-xl font-semibold text-center text-accent-2 mb-12">
          {subheading}
        </p>

        <div
          className={cn(//css grid, why custom tailwind css not working on draft mode
            'custom-spacing',
            layout === 'grid' && 'grid md:grid-cols-2 custom-spacing',
            layout === 'stacked' && 'flex flex-col',
            layout === 'carousel' &&
              'flex overflow-x-auto space-x-4 snap-x p-4 snap-mandatory scroll-smooth scrollbar-hide'
          )}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                'bg-neutral-light p-6 rounded-lg shadow-sm shadow-accent-2/60 flex-shrink-0 snap-start',
                layout === 'carousel' && 'w-100',
                layout === 'stacked' && 'w-full max-w-3xl mx-auto text-center'
              )}
            >
              <div
                className={`flex items-center mb-4 ${layout === 'stacked' ? 'justify-center ' : ''}`}
              >
                {testimonial.author &&
                  testimonial.author.name &&
                  testimonial.author.image && (
                    <Image
                      src={urlForImage(testimonial.author.image).url()}
                      alt={testimonial.author.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-accent-2"
                    />
                  )}
                <div>
                  <h4 className="font-bold text-left text-primary">
                    {testimonial.author?.name}
                  </h4>
                  <p className="text-sm text-accent-2">
                    {testimonial.author?.role}
                    {testimonial.author?.company && (
                      <strong> @{testimonial.author.company}</strong>
                    )}
                  </p>
                </div>
              </div>
              <blockquote>
                <p className="text-secondary text-sm font-bold mb-2  before:content-['“'] after:content-['”']">
                  {testimonial.quote}
                </p>
              </blockquote>
              {typeof testimonial.rating === 'number' && (
                <div
                  className={`flex items-center ${layout === 'stacked' ? 'justify-center' : ''}`}
                >
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < testimonial.rating!
                          ? 'text-primary'
                          : 'text-gray-300'
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
