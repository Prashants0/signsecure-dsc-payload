'use client'

import { cn } from '@/utilities/ui'
import React from 'react'
import { LinkBlockType } from '@/payload-types'
import { CMSLink } from '@/components/Link'

const marginMap = {
  none: '',
  small: 'mt-2',
  medium: 'mt-4',
  large: 'mt-8',
}

const bottomMarginMap = {
  none: '',
  small: 'mb-2',
  medium: 'mb-4',
  large: 'mb-8',
}

export const LinkBlock: React.FC<LinkBlockType> = ({
  alignment,
  link,
  marginTop = 'medium',
  marginBottom = 'medium',
}) => {
  const appearance = link?.appearance || 'default'
  const newTab = link?.newTab

  const alignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }

  return (
    <div
      className={cn(
        'w-full flex',
        alignmentClasses[alignment],
        marginMap[marginTop ?? 'medium'],
        bottomMarginMap[marginBottom ?? 'medium'],
      )}
    >
      {link && <CMSLink {...link} appearance={appearance} newTab={newTab} />}
    </div>
  )
}
