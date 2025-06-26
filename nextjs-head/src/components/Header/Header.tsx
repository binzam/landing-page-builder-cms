import { Header as HeaderType } from '@/sanity/types';
import DefaultHeader from './layouts/DefaultHeader';
import SplitHeader from './layouts/SplitHeader';
import HeaderWrapper from './layouts/HeaderWrapper';
import { Topbar } from './Topbar';
import CenteredLogoHeader from './layouts/CenteredLogoHeader';

export default function Header({ section }: { section: HeaderType }) {
  const { layout = 'default', isSticky, showTopbar, topbarText } = section;
  // console.log(section)
  const LayoutComponent = (() => {
    switch (layout) {
      case 'centered':
        return CenteredLogoHeader;
      case 'split':
        return SplitHeader;
      case 'default':
      default:
        return DefaultHeader;
    }
  })();

  return (
    <HeaderWrapper isSticky={isSticky}>
      {showTopbar && topbarText && <Topbar text={topbarText} />}
      <LayoutComponent section={section} />
    </HeaderWrapper>
  );
}
