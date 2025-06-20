import { defineQuery } from 'next-sanity';

export const LANDING_PAGES_QUERY =
  defineQuery(`*[_type == "landingPage" && defined(slug.current)]{
  _id,
  title,
  "slug": slug.current,
  sections[]{
    _type,
    _key,
    heading,
    subtitle,
    items[]{
      title,
      description
    },
    testimonials[]{
      quote,
      author->{
        name,
        role
      }
    }
  }
}`);

export const LANDING_PAGE_QUERY =
  defineQuery(`*[_type == "landingPage" && slug.current == $slug][0]{
  _id,
  title,
   theme,
  sections[]{
    _type,
    _key,
    _type == "hero" => {
      heading,
      subtitle,
      primaryButton,
      backgroundImage
    },
    _type == "features" => {
      heading,
      items[]{
        title,
        description,
        icon
      }
    },
    _type == "testimonial" => {
      heading,
      subheading,
      layout,
      testimonials[]{
        quote,
        rating,
        author {
          name,
          role,
          company,
          image
        }
      }
    },
    _type == "cta" => {
      heading,
      subheading,
      button
    },
    _type == "faq" => {
      heading,
      questions[]{
        question,
        answer
      }
    },
    _type == "footer" => {
      copyrightText,
      columns[]{
        heading,
        links[]{
          text,
          url
        }
      },
      socialLinks[]{
        platform,
        url,
        icon
      }
    }
  }
}`);
