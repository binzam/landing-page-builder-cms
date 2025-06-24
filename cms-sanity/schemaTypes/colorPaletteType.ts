import {defineType, defineField} from 'sanity'

export const colorPaletteType = defineType({
  name: 'colorPalette',
  title: 'Color Palettes',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Palette Title',
      type: 'string',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'primary',
      title: 'Primary Color',
      type: 'string',
    }),
    defineField({
      name: 'palette',
      title: 'Palette',
      type: 'object',
      fields: [
        {name: 'primaryLight', type: 'string'},
        {name: 'primaryDark', type: 'string'},
        {name: 'secondary', type: 'string'},
        {name: 'secondaryLight', type: 'string'},
        {name: 'secondaryDark', type: 'string'},
        {name: 'accent1', type: 'string'},
        {name: 'accent2', type: 'string'},
        {name: 'lightNeutral', type: 'string'},
        {name: 'darkNeutral', type: 'string'},
        {name: 'bodyBg', type: 'string'},
        {name: 'bodyBgDark', type: 'string'},
      ],
    }),
  ],
})
