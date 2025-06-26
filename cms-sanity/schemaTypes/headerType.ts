import {defineType, defineField} from 'sanity'

export const headerType = defineType({
  name: 'header',
  title: 'Header',
  type: 'object',
  fields: [
    defineField({
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
      description: 'Optional image logo. If not provided, the text title will be used.',
    }),
    defineField({
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
      description: 'Text title of the company, used if no image is provided.',
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        defineField({
          name: 'navItem',
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', title: 'Text'}),
            defineField({name: 'href', type: 'string', title: 'Link'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call to Action Button',
      type: 'ctaButton',
    }),
    defineField({
      name: 'layout',
      title: 'Header Layout',
      type: 'string',
      initialValue: 'default',
      options: {
        list: [
          {title: 'Default (Logo Left + Nav + CTA)', value: 'default'},
          {title: 'Split (Logo Left + Nav + CTA Right)', value: 'split'},
          {title: 'Centered Logo', value: 'centered'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'showTopbar',
      title: 'Show Top Bar',
      type: 'boolean',
      initialValue: false,
      description: 'Enable a top bar above the main header (e.g., for announcements or promos)',
    }),
    defineField({
      name: 'topbarText',
      title: 'Top Bar Text',
      type: 'string',
      description: 'Optional announcement or promotional text shown above the main header',
      hidden: ({parent}) => !parent?.showTopbar,
    }),
    defineField({
      name: 'isSticky',
      title: 'Sticky Header',
      type: 'boolean',
      description: 'Make the header fixed to the top of the page on scroll',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'logoText',
      media: 'logoImage',
    },
    prepare({title, media}) {
      return {
        title: `Header: ${title || 'Untitled'}`,
        media,
      }
    },
  },
})
