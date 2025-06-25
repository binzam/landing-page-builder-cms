import {defineField, defineType} from 'sanity'

export const featuresType = defineType({
  name: 'features',
  title: 'Features Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'items',
      title: 'Features',
      type: 'array',
      of: [{type: 'featureItem'}],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      count: 'items',
    },
    prepare({title, count}) {
      const countLength = count.length
      return {
        title: `Features Section: ${title || 'Untitled'}`,
        subtitle: `${countLength} Feature${countLength !== 1 ? 's' : ''}`,
      }
    },
  },
})

export const featureItemType = defineType({
  name: 'featureItem',
  title: 'Feature Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'icon',
      type: 'image',
      title: 'Icon',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
    prepare({title, media}) {
      return {
        title: `Feature: ${title || 'Untitled'}`,
        media,
      }
    },
  },
})
