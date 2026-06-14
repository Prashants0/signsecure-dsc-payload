import type { Metadata } from 'next'

import { RelatedUseCases } from '@/blocks/RelatedUseCases/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

import type { UseCase } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { formatAuthors } from '@/utilities/formatAuthors'
import { SiFacebook, SiX } from '@icons-pack/react-simple-icons'
import Link from 'next/link'
import { CMSLink } from '@/components/Link'

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

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const useCases = await payload.find({
    collection: 'use-cases',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = useCases.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
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
        prefetch
      >
        <SiX className="w-5 h-5 " />
      </Link>
      <Link
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-primary"
        aria-label="Share on LinkedIn"
        prefetch
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
        prefetch
      >
        <SiFacebook className="w-5 h-5" />
      </Link>
    </div>
  )
}

export default async function UseCase({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/use-cases/' + slug
  const useCase = await queryUseCaseBySlug({ slug })

  if (!useCase) return <PayloadRedirects url={url} />

  const { heroImage, populatedAuthors, publishedAt, title, content } = useCase
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

      <div className="bg-gray-50 pt-4 pb-16">
        <div className="container mx-auto px-6">
          {/* UseCase header */}

          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            {/* Content - Now on left */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Use Case: {title}</h2>
                <RichText
                  className="prose prose-lg max-w-none"
                  data={useCase.content}
                  enableGutter={false}
                />
              </div>
            </div>

            {/* Image - Now on right */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              {heroImage && typeof heroImage !== 'string' && (
                <div className="sticky top-28 w-full h-auto flex flex-col gap-3">
                  <div className="bg-white rounded-xl shadow-xl p-5">
                    <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden">
                      <Media fill priority imgClassName="object-cover" resource={heroImage} />
                    </div>
                  </div>

                  <CMSLink className="align-middle justify-center" {...useCase.link} />
                </div>
              )}
            </div>
          </div>

          {/* Related use cases section - Now using the RelatedUseCases component */}
          {useCase.relatedUseCases && useCase.relatedUseCases.length > 0 && (
            <div className="mt-20 max-w-6xl mx-auto">
              <RelatedUseCases
                docs={useCase.relatedUseCases.filter((useCase) => typeof useCase === 'object')}
              />
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const useCase = await queryUseCaseBySlug({ slug })

  return generateMeta({ doc: useCase })
}

const queryUseCaseBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'use-cases',
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
