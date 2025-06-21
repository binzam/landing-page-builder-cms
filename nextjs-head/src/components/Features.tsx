import { urlForImage } from '@/sanity/client';
import { Features } from '@/sanity/types';
import Image from 'next/image';

export default function FeaturesSection({ section }: { section: Features }) {
  const { heading, items = [] } = section;
  return (
    <section className="py-20 bg-section-bg ">
      <div className="container  px-2 sm:px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl text-shadow-xs text-shadow-neutral-dark font-bold text-center mb-6 sm:mb-12 text-primary">
          {heading}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] custom-spacing">
          {items.map((item, index) => (
            <div
              key={item._key || index}
              className=" bg-feature-bg p-4 sm:p-6 rounded-lg shadow-sm shadow-accent-1"
            >
              <div className="size-14 flex items-center justify-center rounded-full bg-accent-1  mb-4 shadow-xs shadow-neutral-dark/30 ">
                {item.icon &&  (
                  <Image
                    src={urlForImage(item.icon).url()}
                    alt={item.title || 'Author'}
                    width={40}
                    height={40}
                    className="size-10"
                  />
                )}
              </div>
              <h3 className="text-xl/6 font-extrabold mb-2 text-primary">
                {item.title}
              </h3>
              <p className="text-secondary text-base/5 sm:text-lg/5 font-semibold">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
