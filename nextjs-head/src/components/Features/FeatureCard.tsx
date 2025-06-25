import { FeatureItem } from '@/sanity/types';
import React from 'react';
import { urlForImage } from '@/sanity/client';
import Image from 'next/image';

const FeatureCard = ({ item }: { item: FeatureItem }) => {
  return (
    <div className=" bg-neutral-light/30 dark:bg-neutral-light/5 p-4 sm:p-6 rounded-lg shadow-sm shadow-neutral-dark/50 dark:shadow-neutral-light/50">
      <div className="size-14 flex items-center justify-center rounded-full bg-primary-light dark:bg-primary-dark  mb-4 shadow-xs  dark:shadow-neutral-light shadow-neutral-dark ">
        {item.icon && (
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
      <p className="text-neutral dark:text-neutral-light/70 text-base/5 sm:text-lg/5 font-normal">
        {item.description}
      </p>
    </div>
  );
};

export default FeatureCard;
