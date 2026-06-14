import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Blog } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'

export const BlogHero: React.FC<{
  blog: Blog
}> = ({ blog }) => {
  const { heroImage, populatedAuthors, publishedAt, title } = blog

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <div className="relative min-h-[70vh] flex items-end">
      <div className="absolute inset-0 z-0">
        {heroImage && typeof heroImage !== 'string' && (
          <Media fill priority imgClassName="object-cover brightness-[0.65]" resource={heroImage} />
        )}
      </div>

      <div className="container relative z-10 pb-16 pt-32">
        <div className="max-w-4xl mx-auto text-white">
          <div className="mb-6 flex items-center">
            <div className="h-1 w-12 bg-white mr-4"></div>
            <span className="uppercase tracking-wider text-sm font-medium">Blog Post</span>
          </div>

          <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{title}</h1>

          <div className="flex flex-wrap gap-6 items-center text-white/90">
            {hasAuthors && (
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>{formatAuthors(populatedAuthors)}</span>
              </div>
            )}
            {publishedAt && (
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  )
}
