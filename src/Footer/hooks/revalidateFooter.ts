import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'
import { revalidateCloudFront } from '@/lib/utils'

export const revalidateFooter: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating footer`)

    revalidateTag('global_footer', 'max')
    revalidateCloudFront(['/'])
  }

  return doc
}
