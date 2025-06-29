/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type Header = {
  _type: "header";
  logoImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  logoText?: string;
  navLinks?: Array<{
    title?: string;
    href?: string;
    _type: "navItem";
    _key: string;
  }>;
  ctaButton?: CtaButton;
  layout?: "default" | "split" | "centered" | "minimal";
  showTopbar?: boolean;
  topbarText?: string;
  isSticky?: boolean;
};

export type Link = {
  _type: "link";
  text?: string;
  url?: string;
};

export type SocialLink = {
  _type: "socialLink";
  platform?: "facebook" | "twitter" | "instagram" | "linkedin" | "youtube";
  url?: string;
  icon?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Footer = {
  _type: "footer";
  copyrightText?: string;
  pageLinks?: Array<{
    _key: string;
  } & Link>;
  socialLinks?: Array<{
    _key: string;
  } & SocialLink>;
  legalLinks?: Array<{
    _key: string;
  } & Link>;
};

export type FaqItem = {
  _type: "faqItem";
  question?: string;
  answer?: string;
};

export type Faq = {
  _type: "faq";
  heading?: string;
  subheading?: string;
  questions?: Array<{
    _key: string;
  } & FaqItem>;
};

export type TestimonialItem = {
  _type: "testimonialItem";
  quote?: string;
  author?: {
    name?: string;
    role?: string;
    company?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  };
  rating?: 1 | 2 | 3 | 4 | 5;
};

export type Testimonial = {
  _type: "testimonial";
  heading?: string;
  subheading?: string;
  testimonials?: Array<{
    _key: string;
  } & TestimonialItem>;
  layout?: "grid" | "carousel" | "stacked";
};

export type Cta = {
  _type: "cta";
  heading?: string;
  subheading?: string;
  button?: CtaButton;
};

export type FeatureItem = {
  _type: "featureItem";
  title?: string;
  description?: string;
  icon?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Features = {
  _type: "features";
  heading?: string;
  items?: Array<{
    _key: string;
  } & FeatureItem>;
};

export type Hero = {
  _type: "hero";
  heading?: string;
  subtitle?: string;
  primaryButton?: CtaButton;
  backgroundImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  layout?: "imageLeft" | "imageRight" | "imageFullBackground" | "textOnly" | "centered";
};

export type CtaButton = {
  _type: "ctaButton";
  text?: string;
  link?: string;
  variant?: "primary" | "secondary";
};

export type LandingPage = {
  _id: string;
  _type: "landingPage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  theme?: Theme;
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
  } & Faq | {
    _key: string;
  } & Footer>;
};

export type Theme = {
  _type: "theme";
  mode?: "light" | "dark";
  colorPalette?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "colorPalette";
  };
  primaryColor?: SimplerColor;
  font?: "poppins" | "roboto" | "spaceGrotesk";
  borderRadius?: "none" | "sm" | "md" | "lg" | "full";
  buttonStyle?: "solid" | "outline" | "ghost";
  spacing?: "compact" | "comfortable" | "spacious";
};

export type ColorPalette = {
  _id: string;
  _type: "colorPalette";
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

export type HighlightColor = {
  _type: "highlightColor";
  label?: string;
  value?: string;
};

export type TextColor = {
  _type: "textColor";
  label?: string;
  value?: string;
};

export type SimplerColor = {
  _type: "simplerColor";
  label?: string;
  value?: string;
};

export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type AllSanitySchemaTypes = Header | Link | SocialLink | Footer | FaqItem | Faq | TestimonialItem | Testimonial | Cta | FeatureItem | Features | Hero | CtaButton | LandingPage | Theme | ColorPalette | HighlightColor | TextColor | SimplerColor | SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityImageHotspot | SanityImageCrop | SanityFileAsset | SanityImageAsset | SanityImageMetadata | Geopoint | Slug | SanityAssetSourceData;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../nextjs-head/src/sanity/queries.ts
// Variable: LANDING_PAGES_QUERY
// Query: *[_type == "landingPage" && defined(slug.current)]{  _id,  title,  "slug": slug.current,  sections[]{    _type,    _key,    heading,    subtitle,    items[]{      title,      description    },    testimonials[]{      quote,      author->{        name,        role      }    }  }}
export type LANDING_PAGES_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: string | null;
  sections: Array<{
    _type: "cta";
    _key: string;
    heading: string | null;
    subtitle: null;
    items: null;
    testimonials: null;
  } | {
    _type: "faq";
    _key: string;
    heading: string | null;
    subtitle: null;
    items: null;
    testimonials: null;
  } | {
    _type: "features";
    _key: string;
    heading: string | null;
    subtitle: null;
    items: Array<{
      title: string | null;
      description: string | null;
    }> | null;
    testimonials: null;
  } | {
    _type: "footer";
    _key: string;
    heading: null;
    subtitle: null;
    items: null;
    testimonials: null;
  } | {
    _type: "header";
    _key: string;
    heading: null;
    subtitle: null;
    items: null;
    testimonials: null;
  } | {
    _type: "hero";
    _key: string;
    heading: string | null;
    subtitle: string | null;
    items: null;
    testimonials: null;
  } | {
    _type: "testimonial";
    _key: string;
    heading: string | null;
    subtitle: null;
    items: null;
    testimonials: Array<{
      quote: string | null;
      author: null;
    }> | null;
  }> | null;
}>;
// Variable: LANDING_PAGE_QUERY
// Query: *[_type == "landingPage" && slug.current == $slug][0]{  _id,  title,   theme{      mode,      primaryColor,      font,      borderRadius,      buttonStyle,      spacing,      colorPalette->{        _id,        title,        label,        primary,        palette{          primaryLight,          primaryDark,          secondary,          secondaryLight,          secondaryDark,          accent1,          accent2,          lightNeutral,          darkNeutral,          bodyBg,          bodyBgDark        }      }    },  sections[]{    _type,    _key,    _type == "header" => {      logoImage,      logoText,      navLinks[] {        title,        href      },      ctaButton {        text,        link      },      topbarText,      isSticky,      layout    },    _type == "hero" => {      heading,      subtitle,      primaryButton,      backgroundImage,      layout    },    _type == "features" => {      heading,      items[]{        title,        description,        icon      }    },    _type == "testimonial" => {      heading,      subheading,      layout,      testimonials[]{        quote,        rating,        author {          name,          role,          company,          image        }      }    },    _type == "cta" => {      heading,      subheading,      button    },    _type == "faq" => {      heading,      questions[]{        question,        answer      }    },   _type == "footer" => {  copyrightText,  pageLinks[]{    text,    url  },  socialLinks[]{    platform,    url,    icon  },  legalLinks[]{    text,    url  }}  }}
export type LANDING_PAGE_QUERYResult = {
  _id: string;
  title: string | null;
  theme: {
    mode: "dark" | "light" | null;
    primaryColor: SimplerColor | null;
    font: "poppins" | "roboto" | "spaceGrotesk" | null;
    borderRadius: "full" | "lg" | "md" | "none" | "sm" | null;
    buttonStyle: "ghost" | "outline" | "solid" | null;
    spacing: "comfortable" | "compact" | "spacious" | null;
    colorPalette: {
      _id: string;
      title: string | null;
      label: string | null;
      primary: string | null;
      palette: {
        primaryLight: string | null;
        primaryDark: string | null;
        secondary: string | null;
        secondaryLight: string | null;
        secondaryDark: string | null;
        accent1: string | null;
        accent2: string | null;
        lightNeutral: string | null;
        darkNeutral: string | null;
        bodyBg: string | null;
        bodyBgDark: string | null;
      } | null;
    } | null;
  } | null;
  sections: Array<{
    _type: "cta";
    _key: string;
    heading: string | null;
    subheading: string | null;
    button: CtaButton | null;
  } | {
    _type: "faq";
    _key: string;
    heading: string | null;
    questions: Array<{
      question: string | null;
      answer: string | null;
    }> | null;
  } | {
    _type: "features";
    _key: string;
    heading: string | null;
    items: Array<{
      title: string | null;
      description: string | null;
      icon: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      } | null;
    }> | null;
  } | {
    _type: "footer";
    _key: string;
    copyrightText: string | null;
    pageLinks: Array<{
      text: string | null;
      url: string | null;
    }> | null;
    socialLinks: Array<{
      platform: "facebook" | "instagram" | "linkedin" | "twitter" | "youtube" | null;
      url: string | null;
      icon: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      } | null;
    }> | null;
    legalLinks: Array<{
      text: string | null;
      url: string | null;
    }> | null;
  } | {
    _type: "header";
    _key: string;
    logoImage: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    logoText: string | null;
    navLinks: Array<{
      title: string | null;
      href: string | null;
    }> | null;
    ctaButton: {
      text: string | null;
      link: string | null;
    } | null;
    topbarText: string | null;
    isSticky: boolean | null;
    layout: "centered" | "default" | "minimal" | "split" | null;
  } | {
    _type: "hero";
    _key: string;
    heading: string | null;
    subtitle: string | null;
    primaryButton: CtaButton | null;
    backgroundImage: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    layout: "centered" | "imageFullBackground" | "imageLeft" | "imageRight" | "textOnly" | null;
  } | {
    _type: "testimonial";
    _key: string;
    heading: string | null;
    subheading: string | null;
    layout: "carousel" | "grid" | "stacked" | null;
    testimonials: Array<{
      quote: string | null;
      rating: 1 | 2 | 3 | 4 | 5 | null;
      author: {
        name: string | null;
        role: string | null;
        company: string | null;
        image: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          media?: unknown;
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        } | null;
      } | null;
    }> | null;
  }> | null;
} | null;

// Query TypeMap
// import "@sanity/client";
// declare module "@sanity/client" {
//    interface SanityQueries {
//     "*[_type == \"landingPage\" && defined(slug.current)]{\n  _id,\n  title,\n  \"slug\": slug.current,\n  sections[]{\n    _type,\n    _key,\n    heading,\n    subtitle,\n    items[]{\n      title,\n      description\n    },\n    testimonials[]{\n      quote,\n      author->{\n        name,\n        role\n      }\n    }\n  }\n}": LANDING_PAGES_QUERYResult;
//     "*[_type == \"landingPage\" && slug.current == $slug][0]{\n  _id,\n  title,\n   theme{\n      mode,\n      primaryColor,\n      font,\n      borderRadius,\n      buttonStyle,\n      spacing,\n      colorPalette->{\n        _id,\n        title,\n        label,\n        primary,\n        palette{\n          primaryLight,\n          primaryDark,\n          secondary,\n          secondaryLight,\n          secondaryDark,\n          accent1,\n          accent2,\n          lightNeutral,\n          darkNeutral,\n          bodyBg,\n          bodyBgDark\n        }\n      }\n    },\n  sections[]{\n    _type,\n    _key,\n    _type == \"header\" => {\n      logoImage,\n      logoText,\n      navLinks[] {\n        title,\n        href\n      },\n      ctaButton {\n        text,\n        link\n      },\n      topbarText,\n      isSticky,\n      layout\n    },\n    _type == \"hero\" => {\n      heading,\n      subtitle,\n      primaryButton,\n      backgroundImage,\n      layout\n    },\n    _type == \"features\" => {\n      heading,\n      items[]{\n        title,\n        description,\n        icon\n      }\n    },\n    _type == \"testimonial\" => {\n      heading,\n      subheading,\n      layout,\n      testimonials[]{\n        quote,\n        rating,\n        author {\n          name,\n          role,\n          company,\n          image\n        }\n      }\n    },\n    _type == \"cta\" => {\n      heading,\n      subheading,\n      button\n    },\n    _type == \"faq\" => {\n      heading,\n      questions[]{\n        question,\n        answer\n      }\n    },\n   _type == \"footer\" => {\n  copyrightText,\n  pageLinks[]{\n    text,\n    url\n  },\n  socialLinks[]{\n    platform,\n    url,\n    icon\n  },\n  legalLinks[]{\n    text,\n    url\n  }\n}\n  }\n}": LANDING_PAGE_QUERYResult;
//   }
// }
