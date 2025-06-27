'use client';

import { useState } from 'react';
import { Header } from '@/sanity/types';
import { Button } from '@/components/ui/Button';

type Props = {
  navLinks?: Header['navLinks'];
  ctaButton?: Header['ctaButton'];
};

export default function MobileNav({ navLinks, ctaButton }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="md:hidden relative flex-1 h-full flex items-center justify-end ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none cursor-pointer"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-[105%] right-0 min-w-[300px] w-full bg-body-bg dark:bg-body-bg-dark shadow-xs  shadow-neutral-dark dark:shadow-neutral-light z-50 rounded-lg">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navLinks?.map((link) =>
              link.href ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="p-2 rounded-xs shadow-xs shadow-accent-1 hover:shadow-none dark:shadow-accent-1 bg-accent-1/10 hover:bg-accent-1/5 text-base text-neutral-dark dark:text-neutral-light font-semibold  dark:hover:text-primary-light transition"
                >
                  {link.title}
                </a>
              ) : null
            )}
            {ctaButton && (
              <Button
                onClick={closeMenu}
                asChild
                variant="default"
                size="lg"
                className="mt-2 w-full rounded-custom-radius tracking-wide font-bold text-neutral-light bg-primary dark:bg-primary-dark shadow shadow-neutral-dark dark:shadow-neutral-light"
              >
                <a href={ctaButton.link}>{ctaButton.text}</a>
              </Button>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
