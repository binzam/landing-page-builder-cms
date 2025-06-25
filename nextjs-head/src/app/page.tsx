import Link from 'next/link';
import { sanityFetch } from '@/sanity/live';
import { LANDING_PAGES_QUERY } from '@/sanity/queries';
import { LandingPage } from '@/sanity/types';

export default async function IndexPage() {
  const { data: landingPages }: { data: LandingPage[] } = await sanityFetch({
    query: LANDING_PAGES_QUERY,
  });
  // console.log(landingPages[0]);
  return (
    <main className="min-h-screen  bg-[#dddddd]">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-[#192b35]">
          Landing Pages
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {landingPages.map((page) => (
            <li
              key={page._id}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-[#eeeeee]"
            >
              <Link href={`/${page.slug}`}>
                <h2 className="text-xl font-semibold mb-2 text-[#2a4759]">
                  {page.title}
                </h2>
                <div className="space-y-2">
                  {page.sections?.slice(0, 5).map((section) => (
                    <div key={section._key} className="text-lg text-[#945d44]">
                      {section._type === 'hero' && (
                        <p>Hero: {section.heading}</p>
                      )}
                      {section._type === 'features' && (
                        <p>Features: {section.items?.length} features</p>
                      )}
                      {section._type === 'testimonial' && (
                        <p>Testimonials: {section.testimonials?.length} testimonials</p>
                      )}
                    </div>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
