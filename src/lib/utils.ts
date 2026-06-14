import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Creates a CloudFront cache invalidation for the specified paths
 * @param paths Array of paths to invalidate (e.g. ['/blogs/*', '/index.html'])
 * @returns Promise with the invalidation result
 */
export async function revalidateCloudFront(paths: string[]) {
  // Ensure paths are provided
  if (!paths || paths.length === 0) {
    throw new Error('No paths provided for CloudFront invalidation')
  }

  // Get CloudFront distribution ID from environment variable
  const distributionId = process.env.CLOUDFRONT_DISTRIBUTION_ID
  if (!distributionId) {
    throw new Error('CLOUDFRONT_DISTRIBUTION_ID environment variable is not set')
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/revalidate-cloudfront`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        distributionId,
        paths,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Failed to create invalidation: ${error}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error creating CloudFront invalidation:', error)
    throw error
  }
}
