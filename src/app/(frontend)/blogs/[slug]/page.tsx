import type { Metadata } from 'next'

import { RelatedBlogs } from '@/blocks/RelatedBlogs/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

import type { Blog } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { formatAuthors } from '@/utilities/formatAuthors'
import { formatDateTime } from '@/utilities/formatDateTime'
import { User } from 'lucide-react'
import { SiFacebook, SiX } from '@icons-pack/react-simple-icons'
import Link from 'next/link'

// Define proper types for rich text content
interface RichTextNode {
  text?: string
  children?: RichTextNode[]
  type?: string
  value?: unknown
  [key: string]: unknown
}

// Updated to match the actual structure
interface RichTextContent {
  root?: {
    children: RichTextNode[]
    [key: string]: unknown
  }
  [key: string]: unknown
}

// Function to calculate reading time from content
const calculateReadingTime = (content: RichTextContent | null | undefined): number => {
  if (!content || !content.root || !content.root.children) return 0

  // Count words in nested rich text content
  const countWordsInRichText = (nodes: RichTextNode[]): number => {
    if (!nodes || !Array.isArray(nodes)) return 0

    return nodes.reduce((total, node) => {
      // If it's a text node, count words
      if (node.text) {
        return total + node.text.split(/\s+/).filter(Boolean).length
      }

      // If it has children, process them recursively
      if (node.children) {
        return total + countWordsInRichText(node.children)
      }

      return total
    }, 0)
  }

  const wordCount = countWordsInRichText(content.root.children)

  // Average reading speed: 200 words per minute
  const readingTime = Math.ceil(wordCount / 200)

  // Return at least 1 minute
  return Math.max(1, readingTime)
}

// Add ShareButtons component
const ShareButtons = ({ url, title }: { url: string; title: string }) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  return (
    <div className="flex gap-3 mt-2">
      <Link
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-primary"
        aria-label="Share on Twitter"
      >
        <SiX className="w-5 h-5 " />
      </Link>
      <Link
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-primary"
        aria-label="Share on LinkedIn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </Link>
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-primary"
        aria-label="Share on Facebook"
      >
        <SiFacebook className="w-5 h-5" />
      </Link>
    </div>
  )
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const blogs = await payload.find({
    collection: 'blogs',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = blogs.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Blog({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/blogs/' + slug
  const blog = await queryBlogBySlug({ slug })

  if (!blog) return <PayloadRedirects url={url} />

  const { heroImage, populatedAuthors, publishedAt, title, content } = blog
  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  // Calculate reading time based on content
  const readingTime = calculateReadingTime(content)

  // Get the full URL for sharing
  const fullUrl = `${process.env.NEXT_PUBLIC_SERVER_URL || 'https://signsecure.com'}${url}`

  return (
    <article>
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <div className="bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Blog header */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="h-1 w-8 bg-primary"></div>
                <span className="uppercase tracking-wider text-xs font-medium text-primary">
                  Blog Post
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{title}</h1>
            </div>

            <div className="flex flex-wrap gap-6 items-center text-gray-600 mb-8">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{readingTime} min read</span>
              </div>
            </div>

            {heroImage && typeof heroImage !== 'string' && (
              <div className="w-full aspect-[16/9] relative rounded-xl overflow-hidden shadow-xl">
                <Media fill priority imgClassName="object-cover" resource={heroImage} />
              </div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            {/* Main content - Now on left */}
            <div className="lg:w-3/4 order-1">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <RichText
                  className="prose prose-lg max-w-none"
                  data={blog.content}
                  enableGutter={false}
                />
              </div>
            </div>

            {/* Sidebar - Now on right */}
            <div className="lg:w-1/4 order-2">
              <div className="bg-white rounded-lg shadow-lg p-5 sticky top-20 lg:top-28">
                <h2 className="text-xl font-bold mb-5 pb-3 border-b">About this article</h2>

                {populatedAuthors && populatedAuthors.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-base font-medium mb-3">Author</h3>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        <User className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-medium">{formatAuthors(populatedAuthors)}</p>
                      </div>
                    </div>
                  </div>
                )}

                {publishedAt && (
                  <div className="mb-5">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Published on</h3>
                    <time dateTime={publishedAt} className="text-base">
                      {formatDateTime(publishedAt)}
                    </time>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Share this article</h3>
                  <ShareButtons url={fullUrl} title={title} />
                </div>
              </div>
            </div>
          </div>

          {/* Related blogs section - Now below both content and sidebar */}
          {blog.relatedBlogs && blog.relatedBlogs.length > 0 && (
            <div className="mt-20 max-w-6xl mx-auto">
              <RelatedBlogs docs={blog.relatedBlogs.filter((blog) => typeof blog === 'object')} />
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const blog = await queryBlogBySlug({ slug })

  return generateMeta({ doc: blog })
}

const queryBlogBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'blogs',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
