import {defineField, defineType} from 'sanity'

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    defineField({
      name: 'copyrightText',
      type: 'string',
      title: 'Copyright Text',
      initialValue: '© 2025 Company Name. All rights reserved.',
    }),
    defineField({
      name: 'columns',
      type: 'array',
      title: 'Footer Columns',
      of: [{type: 'footerColumn'}],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      title: 'Social Media Links',
      of: [{type: 'socialLink'}],
    }),
    defineField({
      name: 'legalLinks',
      type: 'array',
      title: 'Legal Links',
      of: [{type: 'link'}],
    }),
  ],
  preview: {
    select: {
      columns: 'columns',
      socials: 'socialLinks',
    },
    prepare({columns, socials}) {
      const columnLength = columns.length
      const socialsLength = socials.length
      return {
        title: 'Footer',
        subtitle: `${columnLength || 0} columns • ${socialsLength || 0} social links`,
      }
    },
  },
})

export const footerColumnType = defineType({
  name: 'footerColumn',
  title: 'Footer Column',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Column Heading',
    }),
    defineField({
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [{type: 'link'}],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      count: 'links',
    },
    prepare({title, count}) {
      const countLength = count.length
      return {
        title: title || 'Untitled column',
        subtitle: `${countLength || 0} link${countLength !== 1 ? 's' : ''}`,
      }
    },
  },
})

export const socialLinkType = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      type: 'string',
      title: 'Platform',
      options: {
        list: [
          {title: 'Facebook', value: 'facebook'},
          {title: 'Twitter', value: 'twitter'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'LinkedIn', value: 'linkedin'},
          {title: 'YouTube', value: 'youtube'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'icon',
      type: 'image',
      title: 'Custom Icon (optional)',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {
      title: 'platform',
      media: 'icon',
    },
  },
})

export const linkType = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Link Text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'url',
    },
  },
})
// link url in the footer should be '/'
