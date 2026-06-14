'use client'

import { DSCProduct } from '@/components/shared/dsc-product'
import { DSCFormState } from '@/types/product'
import { Suspense } from 'react'

const priceMap = {
  'ds-organization-signature-1-true': 11050.0,
  'ds-organization-signature-2-true': 14050.0,
  'ds-organization-signature-3-true': 19050.0,

  'ds-organization-signature-1-false': 15930.0,
  'ds-organization-signature-2-false': 21595.0,
  'ds-organization-signature-3-false': 24910.0,
}

const defaultFormState: DSCFormState = {
  productId: 'ds',
  quantity: 1,
  needUSB: false,
  assistance: false,
  dscType: 'organization',
  certificateType: 'signature',
  validity: '1',
  isIndianCitizen: true,
  redirectUrl: '/class-2-document-signer',
}

export default function Product() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DSCProduct
        productId="ds"
        priceMap={priceMap}
        defaultFormState={defaultFormState}
        showDscType={false}
        showCertificateType={false}
        showValidity={true}
        showIndianCitizen={true}
        showUsbToken={false}
        showAssistance={true}
        showQuantity={true}
      />
    </Suspense>
  )
}
