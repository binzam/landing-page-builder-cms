import { Header as HeaderType } from '@/sanity/types';
import CenteredHeader from './layouts/CenteredHeader';
import DefaultHeader from './layouts/DefaultHeader';
import MinimalHeader from './layouts/MinimalHeader';
import TopbarHeader from './layouts/TopbarHeader';
import SplitHeader from './layouts/SplitHeader';

export default function Header({ section }: { section: HeaderType }) {
  // console.log('header', section);
  switch (section.layout) {
    case 'centered':
      return <CenteredHeader section={section} />;
    case 'minimal':
      return <MinimalHeader section={section} />;
    case 'topbar':
      return <TopbarHeader section={section} />;
    case 'split':
      return <SplitHeader section={section} />;
    case 'default':
    default:
      return <DefaultHeader section={section} />;
  }
}
