import { urlForImage } from '@/sanity/client';
import { Features } from '@/sanity/types';
import Image from 'next/image';

export default function FeaturesSection({ section }: { section: Features }) {
  const { heading, items = [] } = section;
  return (
    <section className="py-20 ">
      <div className="container  px-2 sm:px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl text-shadow-xs text-shadow-neutral-dark font-bold text-center mb-6 sm:mb-12 text-primary dark:text-primary-light">
          {heading}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-4">
          {items.map((item, index) => (
            <div
              key={item._key || index}
              className=" bg-neutral-light/30 dark:bg-neutral-light/10 p-4 sm:p-6 rounded-lg shadow-sm shadow-neutral-dark dark:shadow-neutral-light/50"
            >
              <div className="size-14 flex items-center justify-center rounded-full bg-primary-light dark:bg-primary-dark  mb-4 shadow-xs  dark:shadow-neutral-light shadow-neutral-dark ">
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
              <h3 className="text-xl/6 font-extrabold mb-2 text-primary-dark dark:text-primary-light">
                {item.title}
              </h3>
              <p className="text-neutral dark:text-neutral-light/70 text-base/5 sm:text-lg/5 font-normal">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
