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
      <div className="container px-2 sm:px-4 mx-auto">
        <h2 className="text-4xl text-shadow-xs text-shadow-neutral-dark dark:text-shadow-neutral-light/20 font-extrabold text-center mb-4 text-primary dark:text-primary-light">
          {heading}
        </h2>
        <p className="text-xl font-semibold text-center text-secondary dark:text-secondary-light/70 mb-12">
          {subheading}
        </p>

        <div
          className={cn(
            'custom-spacing',
            layout === 'grid' &&
              'grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]',
            layout === 'stacked' && 'flex flex-col',
            layout === 'carousel' &&
              'flex overflow-x-auto space-x-4 snap-x p-4 snap-mandatory scroll-smooth scrollbar-hide'
          )}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                'dark:bg-neutral-light/10 p-3 sm:p-6 rounded-lg shadow-sm shadow-accent-2/60 flex-shrink-0 snap-start',
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
                      className="w-12 h-12 rounded-full mr-2 border-2 border-primary"
                    />
                  )}
                <div>
                  <h4 className="font-bold text-left text-sm sm:text-base text-primary">
                    {testimonial.author?.name}
                  </h4>
                  <p className="text-base/4 sm:text-lg/5 font-semibold text-primary-dark dark:text-primary-light">
                    {testimonial.author?.role}
                    {testimonial.author?.company && (
                      <strong> @{testimonial.author.company}</strong>
                    )}
                  </p>
                </div>
              </div>
              <blockquote>
                <p className="text-primary dark:text-primary-light font-semibold text-base/6 sm:text-lg/6 before:content-['“'] after:content-['”']">
                  <i className="text-secondary dark:text-secondary-light mx-1">{testimonial.quote}</i>
                </p>
              </blockquote>
              {typeof testimonial.rating === 'number' && (
                <div
                  className={`flex items-center mt-2 ${layout === 'stacked' ? 'justify-center' : ''}`}
                >
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl sm:text-2xl 
                        ${
                          i < testimonial.rating!
                            ? 'text-accent-2'
                            : 'text-gray-300'
                        }
                      `}
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
