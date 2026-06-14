'use client'

import { DSCProduct } from '@/components/shared/dsc-product'
import { DSCFormState } from '@/types/product'
import { Suspense } from 'react'

const priceMap = {
  'dgft-organization-signature-1-true': 789.0,
  'dgft-organization-signature-2-true': 1779.0,
  'dgft-organization-signature-3-true': 3495.0,

  'dgft-organization-signature-1-false': 6490.0,
  'dgft-organization-signature-2-false': 7765.0,
  'dgft-organization-signature-3-false': 13205.0,
}

const defaultFormState: DSCFormState = {
  productId: 'dgft',
  quantity: 1,
  needUSB: false,
  assistance: false,
  dscType: 'organization',
  certificateType: 'signature',
  validity: '1',
  isIndianCitizen: true,
  redirectUrl: '/dgft-dsc',
}

export default function Product() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DSCProduct
        productId="dgft"
        priceMap={priceMap}
        defaultFormState={defaultFormState}
        showDscType={false}
        showCertificateType={false}
        showValidity={true}
        showIndianCitizen={true}
        showUsbToken={true}
        showAssistance={true}
        showQuantity={true}
      />
    </Suspense>
  )
}
