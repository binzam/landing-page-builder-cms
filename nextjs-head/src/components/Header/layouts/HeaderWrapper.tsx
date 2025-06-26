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
        'w-full z-150 bg-neutral-light/95 dark:bg-neutral-dark/95 transition-shadow border-b-1 border-b-accent-1/20',
        isSticky && 'fixed top-0 shadow-xs shadow-accent-1 border-0 '
      )}
    >
      {children}
    </header>
  );
}
