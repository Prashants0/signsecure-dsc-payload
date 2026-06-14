import clsx from 'clsx'
import React from 'react'
import RichText from '@/components/RichText'
import Link from 'next/link'

import type { Blog } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'
import { formatDateTime } from '@/utilities/formatDateTime'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export type RelatedBlogsProps = {
  className?: string
  docs?: Blog[]
  introContent?: SerializedEditorState
}

export const RelatedBlogs: React.FC<RelatedBlogsProps> = (props) => {
  const { className, docs, introContent } = props

  if (!docs || docs.length === 0) return null

  return (
    <div className={clsx('', className)}>
      <div className="mb-8">
        {introContent ? (
          <RichText data={introContent} enableGutter={false} />
        ) : (
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1 w-6 bg-blue-600"></div>
            <h2 className="text-2xl font-bold">Related Articles</h2>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {docs?.map((doc, index) => {
          if (typeof doc === 'string') return null

          const { slug, meta, title, publishedAt, populatedAuthors } = doc || {}
          const { description, image: metaImage } = meta || {}
          const href = `/blogs/${slug}`

          return (
            <Link
              prefetch
              href={href}
              key={index}
              className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {metaImage && typeof metaImage !== 'string' && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Media
                    resource={metaImage}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    imgClassName="transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}

              <div className="p-5 flex flex-col flex-grow">
                {title && (
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {title}
                  </h3>
                )}

                {description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {description.replace(/\s/g, ' ')}
                  </p>
                )}

                <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                  {populatedAuthors && populatedAuthors.length > 0 && (
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
                      <span>{formatAuthors(populatedAuthors)}</span>
                    </div>
                  )}

                  {publishedAt && (
                    <time dateTime={publishedAt} className="flex items-center">
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
                      <span>{formatDateTime(publishedAt)}</span>
                    </time>
                  )}
                </div>

                <div className="mt-4 flex group-hover:text-blue-600 transition-colors duration-200">
                  <span className="text-sm font-medium">Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
