import Link from 'next/link';
import { notFound } from 'next/navigation';
import HeroSection from '@/components/Hero/Hero';
import FeaturesSection from '@/components/Features/Features';
import TestimonialsSection from '@/components/Testimonials';
import CTASection from '@/components/Cta';
import FAQSection from '@/components/Faq';
import FooterSection from '@/components/Footer';
import { LANDING_PAGE_QUERY } from '@/sanity/queries';
import { cn, resolveTheme } from '@/lib/utils';
import { sanityFetchWithRetry } from '@/sanity/live';
import Header from '@/components/Header/Header';
import { LandingPageType } from '@/sanity/types-custom';

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  try {
    // const fetchResult = await sanityFetch({
    //   query: LANDING_PAGE_QUERY,
    //   params: await params,
    // });
    // if (!fetchResult) {
    //   return notFound();
    // }
    const fetchResult = await sanityFetchWithRetry({
      query: LANDING_PAGE_QUERY,
      params: resolvedParams,
      timeout: 25000, // 15 seconds timeout for this request
    });
    if (!fetchResult?.data) {
      return notFound();
    }
    const landingPage = fetchResult.data as LandingPageType;
    const theme = landingPage.theme;

    const headerSection = landingPage.sections?.find(
      (section) => section._type === 'header'
    );
    const { style, className } = resolveTheme(
      theme,
      headerSection?.isSticky as boolean,
      headerSection?.showTopbar as boolean
    );
    // console.log('style>', style);
    // console.log('className>', className);

    return (
      <div
        style={style}
        className={cn(
          'min-h-screen flex flex-col  relative bg-neutral-light ',
          className
        )}
      >
        <Link
          href="/"
          className="absolute top-0 left-0 text-xs font-semibold text-neutral-light bg-secondary rounded-custom-radius gap-1 flex items-center px-2 py-1 hover:bg-secondary/80 z-1000"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              stroke="currentColor"
              strokeWidth={1.5}
            ></path>
          </svg>
          Back
        </Link>
        {landingPage.sections?.map((section) => {
          switch (section._type) {
            case 'header':
              return <Header key={section._key} section={section} />;
            case 'hero':
              return <HeroSection key={section._key} section={section} />;
            case 'features':
              return <FeaturesSection key={section._key} section={section} />;
            case 'testimonial':
              return (
                <TestimonialsSection key={section._key} section={section} />
              );
            case 'cta':
              return <CTASection key={section._key} section={section} />;
            case 'faq':
              return <FAQSection key={section._key} section={section} />;
            case 'footer':
              return <FooterSection key={section._key} section={section} />;
            default:
              return null;
          }
        })}
      </div>
    );
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
