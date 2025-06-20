import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      type: 'text',
      title: 'Subheading',
      rows: 3,
    }),
    defineField({
      name: 'testimonials',
      type: 'array',
      title: 'Testimonials',
      of: [{type: 'testimonialItem'}],
      validation: (Rule) => Rule.min(1).required(),
    }),
    defineField({
      name: 'layout',
      type: 'string',
      title: 'Layout Style',
      options: {
        list: [
          {title: 'Grid', value: 'grid'},
          {title: 'Carousel', value: 'carousel'},
          {title: 'Stacked', value: 'stacked'},
        ],
        layout: 'radio',
      },
      initialValue: 'grid',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      count: 'testimonials',
      layout: 'layout',
    },
    prepare({title, count, layout}) {
      const countLength = count.length
      return {
        title: title,
        subtitle: `${countLength} testimonial${countLength !== 1 ? 's' : ''} (${layout})`,
      }
    },
  },
})

export const testimonialItemType = defineType({
  name: 'testimonialItem',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      type: 'text',
      title: 'Quote',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'object',
      title: 'Author',
      fields: [
        defineField({
          name: 'name',
          type: 'string',
          title: 'Name',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'role',
          type: 'string',
          title: 'Role/Position',
        }),
        defineField({
          name: 'company',
          type: 'string',
          title: 'Company',
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Photo',
          options: {hotspot: true},
        }),
      ],
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Rating (1-5)',
      validation: (Rule) => Rule.min(1).max(5),
      options: {
        list: [1, 2, 3, 4, 5],
      },
    }),
  ],
  preview: {
    select: {
      title: 'author.name',
      role: 'author.role',
      media: 'author.image',
      quote: 'quote',
    },
    prepare({title, role, media, quote}) {
      return {
        title: title || 'Anonymous',
        subtitle: role || '',
        media,
        description: quote ? quote.slice(0, 50) + (quote.length > 50 ? '...' : '') : '',
      }
    },
  },
})
