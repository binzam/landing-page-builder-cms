import { clsx, type ClassValue } from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { fontClassMap } from './fonts';
import { Theme } from '@/sanity/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function resolveTheme(theme: Theme): {
  className: string;
  style: React.CSSProperties;
} {
  // console.log('theme>>', theme);
  const modeClass =
    theme.mode === 'dark'
      ? 'dark bg-neutral-dark text-neutral-light'
      : theme.mode === 'brand'
        ? 'bg-indigo-600 text-white'
        : 'bg-neutral-light text-neutral-dark';

  const font = theme.font ?? 'poppins';
  const fontClass = fontClassMap[font] || fontClassMap['poppins'];
  const spacingMap: Record<string, string> = {
    compact: '0.5rem',
    comfortable: '1rem',
    spacious: '2rem',
  };

  const radiusMap: Record<string, string> = {
    none: '0px',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  };
  const style = {
    '--primary-color': theme.primaryColor?.value || '#ffffff',
    '--secondary-color': theme.secondaryColor?.value || '#666666',
    '--custom-radius': theme.borderRadius
      ? radiusMap[theme.borderRadius]
      : '0.375rem',
    '--custom-spacing': theme.spacing ? spacingMap[theme.spacing] : '1rem',
  } as React.CSSProperties;

  const className = cn(modeClass, fontClass);

  return { style, className };
}
