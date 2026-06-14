import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'
import { revalidateCloudFront } from '@/lib/utils'

export const revalidateHeader: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating header`)

    revalidateTag('global_header')
    revalidateCloudFront(['/'])
  }

  return doc
}
