import { urlForImage } from '@/sanity/client';
import { Features } from '@/sanity/types';
import Image from 'next/image';

export default function FeaturesSection({ section }: { section: Features }) {
  const { heading, items = [] } = section;
  return (
    <section className="py-20  ">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl text-shadow-xs text-shadow-neutral-dark font-bold text-center mb-12 text-primary">
          {heading}
        </h2>
        <div className="grid md:grid-cols-3 custom-spacing">
          {items.map((item, index) => (
            <div
              key={item._key || index}
              className=" bg-neutral-light p-6 rounded-lg shadow-sm shadow-accent-1"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent-1  mb-4 shadow-xs shadow-neutral-dark ">
                {item.icon &&  (
                  <Image
                    src={urlForImage(item.icon).url()}
                    alt={item.title || 'Author'}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">
                {item.title}
              </h3>
              <p className="text-secondary font-semibold">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
