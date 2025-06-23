import { urlForImage } from '@/sanity/client';
import HeaderWrapper from './HeaderWrapper';
import { Header } from '@/sanity/types';
import Image from 'next/image';

export default function CenteredHeader({ section }: { section: Header }) {
  const { logoImage, logoText, isSticky } = section;

  return (
    <HeaderWrapper isSticky={isSticky}>
      <div className="container mx-auto flex justify-center items-center px-4 py-4">
        {logoImage ? (
          <Image src={urlForImage(logoImage).url()} alt="Logo" width={50} height={50} />
        ) : (
          <h1 className="text-2xl font-bold">{logoText}</h1>
        )}
      </div>
    </HeaderWrapper>
  );
}
