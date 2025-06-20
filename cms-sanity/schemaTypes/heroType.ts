import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'subtitle',
      type: 'text',
      title: 'Subtitle',
    }),
    defineField({
      name: 'primaryButton',
      type: 'ctaButton',
      title: 'Primary Button',
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
  },
})
