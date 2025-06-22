import { clsx, type ClassValue } from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { fontClassMap } from './fonts';
import { Theme } from '@/sanity/types';
import { colorSystem3d } from './theme';

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
  const colors = (
    colorSystem3d as Record<
      string,
      (typeof colorSystem3d)[keyof typeof colorSystem3d]
    >
  )[primary];

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
    '--primary-color-light': colors.primaryLight,
    '--primary-color-dark': colors.primaryDark,
    '--secondary-color': colors.secondary,
    '--secondary-color-light': colors.secondaryLight,
    '--secondary-color-dark': colors.secondaryDark,
    '--accent-color-1': colors.accent1,
    '--accent-color-2': colors.accent2,
    '--neutral-color-light': colors.lightNeutral,
    '--neutral-color-dark': colors.darkNeutral,
    '--body-bg': isDark ? colors.bodyBgDark : colors.bodyBg,
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
