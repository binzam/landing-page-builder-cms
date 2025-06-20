import {defineField, defineType} from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Section Heading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      type: 'text',
      title: 'Subheading',
      rows: 3,
    }),
    defineField({
      name: 'questions',
      type: 'array',
      title: 'Questions',
      of: [{type: 'faqItem'}],
      validation: (Rule) => Rule.min(1).required(),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      count: 'questions',
    },
    prepare({title, count}) {
      const countLength = count.length
      return {
        title: title || 'FAQ Section',
        subtitle: `${countLength || 0} question${countLength !== 1 ? 's' : ''}`,
      }
    },
  },
})

export const faqItemType = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Question',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      type: 'text',
      title: 'Answer',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'answer',
    },
  },
})
