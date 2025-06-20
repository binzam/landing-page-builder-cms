import {defineField, defineType} from 'sanity'

export const ctaType = defineType({
  name: 'cta',
  title: 'Call to Action Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'subheading',
      type: 'text',
      title: 'Subheading',
    }),
    defineField({
      name: 'button',
      type: 'ctaButton',
      title: 'Button',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
    },
  },
})
