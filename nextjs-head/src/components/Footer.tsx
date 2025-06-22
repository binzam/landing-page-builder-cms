import { Footer, FooterColumn, Link as FooterLink } from '@/sanity/types';
import { urlForImage } from '@/sanity/client';
import Link from 'next/link';
import Image from 'next/image';

export default function FooterSection({ section }: { section: Footer }) {
  const { columns = [], copyrightText, socialLinks = [] } = section;
  return (
    <footer className="bg-neutral-light dark:bg-neutral-light/10 text-neutral-light py-2">
      <div className="container px-4 mx-auto">
        <div className="py-10">
          {columns.map((column: FooterColumn, index) => (
            <div
              key={index}
              className="w-full max-w-3xl mx-auto text-lg text-center"
            >
              <ul className="flex items-center justify-around gap-4">
                {column.links?.map((link: FooterLink, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.url || '#'} className="text-primary-dark dark:text-primary-light hover:text-accent-1">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex  gap-4 md:gap-1 justify-center text-primary dark:text-primary-light sm:justify-between flex-col md:flex-row  items-center text-sm border-t border-accent-2 py-10">
          <p>{copyrightText}</p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent-2"
              >
                {social.icon && (
                  <Image
                    src={urlForImage(social.icon).url()}
                    alt={social.platform || 'Social link'}
                    width={24}
                    height={24}
                    style={{ objectFit: 'contain' }}
                  />
                )}
                <span>{social.platform}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
