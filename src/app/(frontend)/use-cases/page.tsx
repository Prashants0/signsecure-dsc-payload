import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const useCases = await payload.find({
    collection: 'use-cases',
    depth: 0,
    limit: 12,
    overrideAccess: true,
  })

  return (
    <div className="pt-8 pb-8">
      <PageClient />
      <div className="container mb-8">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Use Cases</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="useCases"
          currentPage={useCases.page}
          limit={12}
          totalDocs={useCases.totalDocs}
        />
      </div>

      <CollectionArchive collections={useCases.docs} relationTo="use-cases" />

      <div className="container">
        {useCases.totalPages > 1 && useCases.page && (
          <Pagination
            collection="use-cases"
            page={useCases.page}
            totalPages={useCases.totalPages}
          />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Use Cases`,
  }
}
