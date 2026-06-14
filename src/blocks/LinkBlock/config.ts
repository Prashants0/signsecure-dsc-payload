import type { Block } from 'payload'
import { link } from '@/fields/link'

export const LinkBlock: Block = {
  slug: 'linkBlock',
  fields: [
    link({
      appearances: ['default', 'outline'],
      overrides: {
        admin: {
          description: 'Configure the link for this block.',
        },
      },
    }),
    {
      name: 'alignment',
      type: 'select',
      enumName: 'LinkBlockAlignment',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      admin: {
        description: 'Choose how to align the link.',
      },
      required: true,
    },
    {
      name: 'marginTop',
      label: 'Top Spacing',
      type: 'select',
      enumName: 'LinkBlockMargin',
      defaultValue: 'medium',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
      admin: {
        width: '50%',
      },
    },
    {
      name: 'marginBottom',
      label: 'Bottom Spacing',
      type: 'select',
      enumName: 'LinkBlockMargin',
      defaultValue: 'medium',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
      admin: {
        width: '50%',
      },
    },
  ],
  interfaceName: 'LinkBlockType',
}
