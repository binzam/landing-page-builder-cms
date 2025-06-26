import { Hero } from '@/sanity/types';
import Centered from './layouts/Centered';
import ImageTextRow from './layouts/ImageTextRow';

export default function HeroSection({ section }: { section: Hero }) {
  const layout = section.layout || 'imageRight';

  switch (layout) {
    case 'imageLeft':
      return <ImageTextRow imagePosition="left" section={section} />;

    case 'imageRight':
      return <ImageTextRow imagePosition="right" section={section} />;
    case 'imageFullBackground':
      return <Centered textOnly={false} section={section} />;

    case 'textOnly':
      return <Centered textOnly={true} section={section} />;

    case 'centered':
      return <Centered textOnly={false} section={section} />;

    default:
      console.warn(
        `[HeroSection] Unknown layout: "${layout}". Falling back to ImageRight.`
      );
      return <ImageTextRow imagePosition="right" section={section} />;
  }
}
