import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { UseCase } from '../../../payload-types'
import { revalidateCloudFront } from '@/lib/utils'

export const revalidateUseCase: CollectionAfterChangeHook<UseCase> = async ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/use-cases/${doc.slug}`

      payload.logger.info(`Revalidating use case at path: ${path}`)

      revalidatePath(path)
      revalidateTag('use-cases-sitemap', 'max')
      revalidateCloudFront([path, '/use-cases', '/use-cases/*'])

      // Also revalidate CloudFront cache if available
      try {
        if (process.env.CLOUDFRONT_DISTRIBUTION_ID) {
          await revalidateCloudFront([path, '/use-cases', '/use-cases/*'])
          payload.logger.info(`CloudFront cache invalidated for ${path}`)
        }
      } catch (error) {
        payload.logger.error(`Failed to invalidate CloudFront cache: ${error}`)
      }
    }

    // If the use case was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/use-cases/${previousDoc.slug}`

      payload.logger.info(`Revalidating old use case at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('use-cases-sitemap', 'max')
      revalidateCloudFront([oldPath, '/use-cases', '/use-cases/*'])

      // Also revalidate CloudFront cache if available
      try {
        if (process.env.CLOUDFRONT_DISTRIBUTION_ID) {
          await revalidateCloudFront([oldPath, '/use-cases', '/use-cases/*'])
          payload.logger.info(`CloudFront cache invalidated for ${oldPath}`)
        }
      } catch (error) {
        payload.logger.error(`Failed to invalidate CloudFront cache: ${error}`)
      }
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<UseCase> = async ({
  doc,
  req: { context, payload },
}) => {
  if (!context.disableRevalidate) {
    const path = `/use-cases/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('use-cases-sitemap', 'max')
    revalidateCloudFront([path, '/use-cases', '/use-cases/*'])

    // Also revalidate CloudFront cache if available
    try {
      if (process.env.CLOUDFRONT_DISTRIBUTION_ID) {
        await revalidateCloudFront([path, '/use-cases', '/use-cases/*'])
        payload.logger.info(`CloudFront cache invalidated for ${path} (deleted)`)
      }
    } catch (error) {
      payload.logger.error(`Failed to invalidate CloudFront cache: ${error}`)
    }
  }

  return doc
}
