import { Header } from '@/sanity/types';
import DefaultHeader from './DefaultHeader';

export default function TopbarHeader({ section }: { section: Header }) {
  const { topbarText, isSticky } = section;

  return (
    <div className="w-full">
      {topbarText && (
        <div className="bg-accent-1 text-neutral-light text-center py-2 text-sm font-bold">
          {topbarText}
        </div>
      )}
      <DefaultHeader section={{ ...section, isSticky }} />
    </div>
  );
}
