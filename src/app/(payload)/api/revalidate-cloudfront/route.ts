import { NextResponse } from 'next/server'
import { CloudFrontClient, CreateInvalidationCommand } from '@aws-sdk/client-cloudfront'

export async function POST(request: Request) {
  try {
    const { distributionId, paths } = await request.json()

    // Validate inputs
    if (!distributionId) {
      return NextResponse.json({ error: 'Distribution ID is required' }, { status: 400 })
    }

    if (!paths || !Array.isArray(paths) || paths.length === 0) {
      return NextResponse.json({ error: 'Paths array is required' }, { status: 400 })
    }

    // Initialize CloudFront client
    const cloudfront = new CloudFrontClient({
      region: process.env.AWS_REGION || 'us-east-1',
    })

    // Create invalidation
    const invalidationParams = {
      DistributionId: distributionId,
      InvalidationBatch: {
        CallerReference: `manual-invalidation-${Date.now()}`,
        Paths: {
          Quantity: paths.length,
          Items: paths,
        },
      },
    }

    const command = new CreateInvalidationCommand(invalidationParams)
    const response = await cloudfront.send(command)

    return NextResponse.json({
      success: true,
      invalidationId: response.Invalidation?.Id,
      status: response.Invalidation?.Status,
      paths: paths,
    })
  } catch (error) {
    console.error('Error creating CloudFront invalidation:', error)
    return NextResponse.json(
      { error: 'Failed to create invalidation', details: (error as Error).message },
      { status: 500 },
    )
  }
}
