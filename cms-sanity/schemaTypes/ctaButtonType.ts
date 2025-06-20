import {defineField, defineType} from 'sanity'

export const ctaButtonType = defineType({
  name: 'ctaButton',
  title: 'CTA Button',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Button Text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Button Link',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
    defineField({
      name: 'variant',
      type: 'string',
      title: 'Button Style',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
        ],
      },
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'link',
    },
  },
})
