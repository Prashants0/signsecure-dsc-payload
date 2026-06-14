'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'

import type { Blog, UseCase } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'
import { formatDateTime } from '@/utilities/formatDateTime'

export type CardBlogData = Pick<
  Blog,
  'slug' | 'meta' | 'title' | 'publishedAt' | 'populatedAuthors'
>

export type CardUseCaseData = Pick<
  UseCase,
  'slug' | 'meta' | 'title' | 'publishedAt' | 'populatedAuthors'
>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardBlogData | CardUseCaseData
  relationTo?: 'blogs' | 'use-cases'
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo = 'blogs', title: titleFromProps } = props

  const { slug, meta, title, publishedAt, populatedAuthors } = doc || {}
  const { description, image: metaImage } = meta || {}

  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`
  const formattedDate = publishedAt ? formatDateTime(publishedAt) : null
  const authors =
    populatedAuthors && populatedAuthors.length > 0 ? formatAuthors(populatedAuthors) : null

  return (
    <article
      className={cn(
        'border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer hover:shadow-md transition-shadow duration-200',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full">
        {metaImage && typeof metaImage !== 'string' && (
          <div className="aspect-video overflow-hidden ">
            <Media resource={metaImage} size="33vw" className="object-cover w-full h-full" />
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2">
        {titleToUse && (
          <div className="prose">
            <h3 className="text-lg font-semibold text-foreground">
              <Link
                className="not-prose hover:text-primary transition-colors"
                href={href}
                ref={link.ref}
              >
                {titleToUse}
              </Link>
            </h3>
          </div>
        )}
        {description && <p className="text-muted-foreground text-sm">{sanitizedDescription}</p>}
        <div className="mt-2 flex flex-col sm:flex-row sm:items-center text-xs text-muted-foreground gap-1 sm:gap-3">
          {authors && (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-1"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>{authors}</span>
            </div>
          )}
          {formattedDate && (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-1"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>{formattedDate}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
