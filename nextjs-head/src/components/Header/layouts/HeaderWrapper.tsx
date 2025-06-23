import { cn } from '@/lib/utils';
import React from 'react';

export default function HeaderWrapper({
  isSticky,
  children,
}: {
  isSticky?: boolean;
  children: React.ReactNode;
}) {
  return (
    <header
      className={cn(
        'w-full z-50 bg-neutral-light/95 dark:bg-neutral-dark/95 transition-shadow',
        isSticky && 'fixed top-0 shadow-sm shadow-accent-1 '
      )}
    >
      {children}
    </header>
  );
}
