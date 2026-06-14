import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { formatAuthors } from '@/utilities/formatAuthors'
import { formatDateTime } from '@/utilities/formatDateTime'
import Link from 'next/link'
import { Media } from '@/components/Media'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  // Get the latest blog post for featured section
  const latestBlog = await payload.find({
    collection: 'blogs',
    depth: 0,
    limit: 1,
    sort: '-publishedAt',
    overrideAccess: false,
  })

  const blogs = await payload.find({
    collection: 'blogs',
    depth: 0,
    limit: 12,
    overrideAccess: false,
  })

  const featuredBlog = latestBlog.docs[0]

  return (
    <div className="pt-8 pb-8">
      <PageClient />
      <div className="container mb-8">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Blogs</h1>
        </div>
      </div>

      {/* Featured Blog Section */}
      {featuredBlog && (
        <div className="container mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              {featuredBlog.meta?.image && typeof featuredBlog.meta.image !== 'string' && (
                <div className="relative aspect-[16/9] w-full">
                  <Media
                    resource={featuredBlog.meta.image}
                    fill
                    className="object-cover w-full h-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                    Featured Post
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  <Link
                    href={`/blogs/${featuredBlog.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {featuredBlog.title}
                  </Link>
                </h2>
                {featuredBlog.meta?.description && (
                  <p className="text-gray-600 mb-6 line-clamp-3">{featuredBlog.meta.description}</p>
                )}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  {featuredBlog.populatedAuthors && featuredBlog.populatedAuthors.length > 0 && (
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
                      <span>{formatAuthors(featuredBlog.populatedAuthors)}</span>
                    </div>
                  )}
                  {featuredBlog.publishedAt && (
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
                      <span>{formatDateTime(featuredBlog.publishedAt)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mb-8">
        <PageRange
          collection="blogs"
          currentPage={blogs.page}
          limit={12}
          totalDocs={blogs.totalDocs}
        />
      </div>

      <CollectionArchive collections={blogs.docs} relationTo="blogs" />

      <div className="container">
        {blogs.totalPages > 1 && blogs.page && (
          <Pagination collection="blogs" page={blogs.page} totalPages={blogs.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Blogs`,
  }
}
