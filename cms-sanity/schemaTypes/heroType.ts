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
    defineField({
      name: 'layout',
      type: 'string',
      title: 'Layout',
      options: {
        list: [
          {title: 'Image Left', value: 'imageLeft'},
          {title: 'Image Right', value: 'imageRight'},
          {title: 'Full Image Background', value: 'imageFullBackground'},
          {title: 'Text Only', value: 'textOnly'},
          {title: 'Centered Content', value: 'centered'},
        ],
        layout: 'radio',
      },
      initialValue: 'imageRight',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
    prepare({title, media}) {
      return {
        title: `Hero: ${title || 'Untitled'}`,
        media,
      }
    },
  },
})
