import { Features } from '@/sanity/types';
import FeatureCard from './FeatureCard';

export default function FeaturesSection({ section }: { section: Features }) {
  const { heading, items = [] } = section;
  return (
    <section id="features" className="py-20 mb-10">
      <div className="container  px-2 sm:px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl text-shadow-xs text-shadow-neutral-dark font-bold text-center mb-6 sm:mb-12 text-primary dark:text-primary-light">
          {heading}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-4">
          {items.map((item, index) => (
            <FeatureCard item={item} key={item._key || index} />
          ))}
        </div>
      </div>
    </section>
  );
}
