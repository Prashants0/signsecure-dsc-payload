import type { Field, GlobalConfig } from 'payload'

import { revalidateHeader } from './hooks/revalidateHeader'

const linkFields: Field[] = [
  {
    name: 'linkType',
    type: 'radio',
    enumName: 'HeaderLinkType',
    defaultValue: 'reference',
    options: [
      {
        label: 'Internal link',
        value: 'reference',
      },
      {
        label: 'Custom URL',
        value: 'custom',
      },
    ],
  },
  {
    type: 'row',
    fields: [
      {
        name: 'reference',
        type: 'relationship',
        admin: {
          condition: (_, siblingData) => siblingData?.linkType === 'reference',
          width: '50%',
        },
        label: 'Document to link to',
        relationTo: ['blogs', 'use-cases'],
        required: true,
      },
      {
        name: 'url',
        type: 'text',
        admin: {
          condition: (_, siblingData) => siblingData?.linkType === 'custom',
          width: '50%',
        },
        label: 'Custom URL',
        required: true,
      },
      {
        name: 'label',
        type: 'text',
        admin: {
          width: '50%',
        },
        label: 'Label',
        required: true,
      },
    ],
  },
]

const navItemField: Field = {
  name: 'navItem',
  type: 'group',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'type',
          type: 'radio',
          enumName: 'HeaderNavItemType',
          admin: {
            layout: 'horizontal',
            width: '50%',
          },
          defaultValue: 'single',
          options: [
            {
              label: 'Single Link',
              value: 'single',
            },
            {
              label: 'Multiple Links',
              value: 'multiple',
            },
            {
              label: 'Multiple Links with description',
              value: 'multipleWithDescription',
            },
          ],
        },
        {
          name: 'newTab',
          type: 'checkbox',
          admin: {
            style: {
              alignSelf: 'flex-end',
            },
            width: '50%',
          },
          label: 'Open in new tab',
        },
      ],
    },
    {
      name: 'label',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData?.type != 'single',
      },
      required: true,
    },
    {
      name: 'showMoreItemsButton',
      type: 'checkbox',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.type === 'multiple' || siblingData?.type === 'multipleWithDescription',
      },
      label: 'Show view more items button in dropdown',
      defaultValue: false,
    },
    {
      name: 'singleLink',
      type: 'group',
      admin: {
        hideGutter: true,
        condition: (_, siblingData) => siblingData?.type === 'single',
      },
      fields: linkFields,
    },
    {
      type: 'array',
      name: 'multipleLinks',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'multiple',
      },
      fields: linkFields,
    },
    {
      type: 'array',
      name: 'multipleLinksWithDescription',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'multipleWithDescription',
      },
      fields: [
        ...linkFields,
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          required: true,
        },
      ],
    },
  ],
}

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [navItemField],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
