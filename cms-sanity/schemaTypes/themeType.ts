import {defineField, defineType} from 'sanity'

export const themeType = defineType({
  name: 'theme',
  title: 'Theme',
  type: 'object',
  fields: [
    defineField({
      name: 'mode',
      title: 'Color Mode',
      type: 'string',
      options: {
        list: [
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
          {title: 'Brand', value: 'brand'},
          {title: 'Custom', value: 'custom'},
        ],
        layout: 'radio',
      },
      initialValue: 'light',
    }),
    defineField({
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'simplerColor',
      options: {
        colorList: [
          {label: 'Indigo', value: '#6366f1'},
          {label: 'Sky Blue', value: '#0ea5e9'},
          {label: 'Emerald', value: '#10b981'},
          {label: 'Amber', value: '#f59e0b'},
          {label: 'Rose', value: '#f43f5e'},
          {label: 'Slate', value: '#64748b'},
        ],
      },
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'simplerColor',
      options: {
        colorList: [
          {label: 'Slate', value: '#94a3b8'},
          {label: 'Gray', value: '#9ca3af'},
          {label: 'Zinc', value: '#71717a'},
          {label: 'Neutral', value: '#737373'},
          {label: 'Stone', value: '#78716c'},
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
