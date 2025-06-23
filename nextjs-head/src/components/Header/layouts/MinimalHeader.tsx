import { urlForImage } from '@/sanity/client';
import HeaderWrapper from './HeaderWrapper';
import { Header } from '@/sanity/types';
import Image from 'next/image';

export default function MinimalHeader({ section }: { section: Header }) {
  const { logoImage, logoText, isSticky } = section;

  return (
    <HeaderWrapper isSticky={isSticky}>
      <div className="px-4 py-3 flex items-center">
        {logoImage ? (
          <Image
            src={urlForImage(logoImage).url()}
            alt="Logo"
            width={40}
            height={40}
          />
        ) : (
          <span className="text-xl font-bold">{logoText}</span>
        )}
      </div>
    </HeaderWrapper>
  );
}
