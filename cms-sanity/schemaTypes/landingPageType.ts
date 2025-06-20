import {defineField, defineType} from 'sanity'

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'theme',
      description: 'Customize the look and feel of this landing page',
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {type: 'hero'},
        {type: 'features'},
        {type: 'testimonial'},
        {type: 'cta'},
        {type: 'faq'},
        {type: 'footer'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'sections.hero.backgroundImage',
    },
  },
})
