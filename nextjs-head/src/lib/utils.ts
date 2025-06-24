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
  const isDark = theme.mode === 'dark';
  const font = theme.font ?? 'poppins';
  const fontClass = fontClassMap[font] || fontClassMap['poppins'];
  const primary = theme.primaryColor?.value || '#6366f1';


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
    '--primary-color': primary,
    '--primary-color-dark': theme.colorPalette.palette?.primaryDark,
    '--primary-color-light': theme.colorPalette?.palette?.primaryLight,
    '--secondary-color': theme.colorPalette?.palette?.secondary,
    '--secondary-color-light': theme.colorPalette?.palette?.secondaryLight,
    '--secondary-color-dark': theme.colorPalette?.palette?.secondaryDark,
    '--accent-color-1': theme.colorPalette?.palette?.accent1,
    '--accent-color-2': theme.colorPalette?.palette?.accent2,
    '--neutral-color-light': theme.colorPalette?.palette?.lightNeutral,
    '--neutral-color-dark': theme.colorPalette?.palette?.darkNeutral,
    '--body-bg': isDark ? theme.colorPalette?.palette?.bodyBgDark : theme.colorPalette?.palette?.bodyBg,
    '--custom-radius': theme.borderRadius
      ? radiusMap[theme.borderRadius]
      : '0.375rem',
    '--custom-spacing': theme.spacing ? spacingMap[theme.spacing] : '1rem',
  } as React.CSSProperties;

  const modeClass = isDark
    ? 'dark bg-body-bg text-neutral-light'
    : 'bg-body-bg text-neutral-dark';

  const className = cn(modeClass, fontClass);

  return { style, className };
}
