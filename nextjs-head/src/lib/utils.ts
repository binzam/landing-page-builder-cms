import { clsx, type ClassValue } from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { fontClassMap } from './fonts';
import { ThemeLocal } from '@/sanity/types-custom';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function resolveTheme(
  theme: ThemeLocal,
  isSticky: boolean,
  showTopbar: boolean
): {
  className: string;
  style: React.CSSProperties;
} {
  const {
    mode = 'light',
    font = 'poppins',
    primaryColor,
    borderRadius = 'md',
    spacing = 'comfortable',
    colorPalette,
  } = theme;

  const palette = colorPalette?.palette || {};
  const isDark = mode === 'dark';
  // console.log('theme>>', theme);

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
  const heroHeight = showTopbar ? 100 : 70;
  const customHeight = `calc(100vh - ${heroHeight}px)`;
  const style = {
    '--primary-color': primaryColor?.value || '#6366f1',
    '--primary-color-dark': palette.primaryDark,
    '--primary-color-light': palette.primaryLight,
    '--secondary-color': palette.secondary,
    '--secondary-color-light': palette.secondaryLight,
    '--secondary-color-dark': palette.secondaryDark,
    '--accent-color-1': palette.accent1,
    '--accent-color-2': palette.accent2,
    '--neutral-color-light': palette.lightNeutral,
    '--neutral-color-dark': palette.darkNeutral,
    '--body-bg': isDark ? palette.bodyBgDark : palette.bodyBg,
    '--custom-radius': radiusMap[borderRadius],
    '--custom-spacing': spacingMap[spacing],
    '--custom-height': customHeight,
  } as React.CSSProperties;

  const modeClass = isDark
    ? 'dark bg-body-bg text-neutral-light'
    : 'bg-body-bg text-neutral-dark';

  const className = cn(
    `${modeClass} ${isSticky && showTopbar && 'pt-[100px]'}
    ${isSticky && !showTopbar && 'pt-[70px]'} `,
    fontClassMap[font] || fontClassMap['poppins']
  );

  return { style, className };
}
