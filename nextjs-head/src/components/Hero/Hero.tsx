import { Hero } from '@/sanity/types';
import Centered from './layouts/Centered';
import ImageTextRow from './layouts/ImageTextRow';

export default function HeroSection({
  section,
  isHeaderSticky = false,
}: {
  section: Hero;
  isHeaderSticky: boolean;
}) {
  const layout = section.layout || 'imageRight';
  switch (layout) {
    case 'imageLeft':
      return (
        <ImageTextRow
          isHeaderSticky={isHeaderSticky}
          imagePosition="left"
          section={section}
        />
      );

    case 'imageRight':
      return (
        <ImageTextRow
          isHeaderSticky={isHeaderSticky}
          imagePosition="right"
          section={section}
        />
      );
    case 'imageFullBackground':
      return (
        <Centered
          isHeaderSticky={isHeaderSticky}
          textOnly={false}
          section={section}
        />
      );

    case 'textOnly':
      return (
        <Centered
          isHeaderSticky={isHeaderSticky}
          textOnly={true}
          section={section}
        />
      );

    case 'centered':
      return (
        <Centered
          isHeaderSticky={isHeaderSticky}
          textOnly={false}
          section={section}
        />
      );

    default:
      console.warn(
        `[HeroSection] Unknown layout: "${layout}". Falling back to ImageRight.`
      );
      return (
        <ImageTextRow
          isHeaderSticky={isHeaderSticky}
          imagePosition="right"
          section={section}
        />
      );
  }
}
