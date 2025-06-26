import {defineField, defineType} from 'sanity'
import ThemeInput from '../components/ThemeInput'

export const themeType = defineType({
  name: 'theme',
  title: 'Theme',
  type: 'object',
  components: {input: ThemeInput},
  fields: [
    defineField({
      name: 'mode',
      title: 'Color Mode',
      type: 'string',
      options: {
        list: [
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
        ],
        layout: 'radio',
      },
      initialValue: 'light',
    }),
    defineField({
      name: 'colorPalette',
      title: 'Color Palette',
      description: 'These are the colors that will be used.',
      type: 'reference',
      to: [{type: 'colorPalette'}],
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'primaryColor',
      description:
        'Choose a primary color. A matching secondary color will be applied automatically.',
      title: 'Primary Color',
      type: 'simplerColor',
      options: {
        colorList: [
          {label: 'Indigo', value: '#6366f1'},
          {label: 'Blue', value: '#3b82f6'},
          {label: 'Sky', value: '#0ea5e9'},
          {label: 'Cyan', value: '#06b6d4'},
          {label: 'Emerald', value: '#10b981'},
          {label: 'Amber', value: '#f59e0b'},
          {label: 'Rose', value: '#f43f5e'},
          {label: 'Violet', value: '#8b5cf6'},
          {label: 'Slate', value: '#64748b'},
          {label: 'Zinc', value: '#71717a'},
        ],
      },
    }),

    defineField({
      name: 'font',
      title: 'Font Family',
      type: 'string',
      options: {
        list: [
          {title: 'Poppins', value: 'poppins'},
          {title: 'Roboto', value: 'roboto'},
          {title: 'Space Grotesk', value: 'spaceGrotesk'},
        ],
      },
      initialValue: 'poppins',
    }),
    defineField({
      name: 'borderRadius',
      title: 'Border Radius',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Small', value: 'sm'},
          {title: 'Medium', value: 'md'},
          {title: 'Large', value: 'lg'},
          {title: 'Full (Pill)', value: 'full'},
        ],
      },
      initialValue: 'md',
    }),
    defineField({
      name: 'buttonStyle',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          {title: 'Solid', value: 'solid'},
          {title: 'Outline', value: 'outline'},
          {title: 'Ghost', value: 'ghost'},
        ],
      },
      initialValue: 'solid',
    }),
    defineField({
      name: 'spacing',
      title: 'Base Spacing',
      type: 'string',
      options: {
        list: [
          {title: 'Compact', value: 'compact'},
          {title: 'Comfortable', value: 'comfortable'},
          {title: 'Spacious', value: 'spacious'},
        ],
      },
      initialValue: 'comfortable',
    }),
  ],
})
