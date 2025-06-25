import { Cta, Faq, Features, Footer, Header, Hero, SimplerColor, Slug, Testimonial } from "./types";

export type LandingPageType = {
  _id: string;
  _type: "landingPage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  theme: ThemeLocal;
  sections?: Array<{
    _key: string;
  } & Header | {
    _key: string;
  } & Hero | {
    _key: string;
  } & Features | {
    _key: string;
  } & Testimonial | {
    _key: string;
  } & Cta | {
    _key: string;
  } & Faq  | {
    _key: string;
  } & Footer>;
};

export type ThemeLocal = {
  _type: 'theme';
  mode?: 'light' | 'dark';
  colorPalette: ColorPalette;
  primaryColor?: SimplerColor;
  font?: 'poppins' | 'roboto' | 'spaceGrotesk';
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  buttonStyle?: 'solid' | 'outline' | 'ghost';
  spacing?: 'compact' | 'comfortable' | 'spacious';
};

type ColorPalette = {
  _id: string;
  _type: 'colorPalette';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  label?: string;
  primary?: string;
  palette?: {
    primaryLight?: string;
    primaryDark?: string;
    secondary?: string;
    secondaryLight?: string;
    secondaryDark?: string;
    accent1?: string;
    accent2?: string;
    lightNeutral?: string;
    darkNeutral?: string;
    bodyBg?: string;
    bodyBgDark?: string;
  };
};
