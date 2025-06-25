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
      name: 'pageLinks',
      type: 'array',
      title: 'Page Links',
      of: [{type: 'link'}],
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
      pageLinks: 'pageLinks',
      socials: 'socialLinks',
      legalLinks: 'legalLinks',
    },
    prepare({pageLinks, socials, legalLinks}) {
      return {
        title: 'Footer',
        subtitle: `${pageLinks?.length || 0} page links • ${socials?.length || 0} social links • ${legalLinks?.length || 0} legal links`,
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
