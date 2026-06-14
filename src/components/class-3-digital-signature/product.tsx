'use client'

import { DSCProduct } from '@/components/shared/dsc-product'
import { DSCFormState } from '@/types/product'
import { Suspense } from 'react'

const priceMap = {
  'class-3-individual-signature-1-true': 789.0,
  'class-3-individual-signature-2-true': 890.0,
  'class-3-individual-signature-3-true': 1335.0,
  'class-3-individual-encryption-1-true': 825.0,
  'class-3-individual-encryption-2-true': 990.0,
  'class-3-individual-encryption-3-true': 1690.0,
  'class-3-individual-combo-1-true': 1580.0,
  'class-3-individual-combo-2-true': 1779.0,
  'class-3-individual-combo-3-true': 2670.0,
  'class-3-individual-signature-1-false': 3800.0,
  'class-3-individual-signature-2-false': 4501.0,
  'class-3-individual-signature-3-false': 6750.0,
  'class-3-individual-encryption-1-false': 5545.0,
  'class-3-individual-encryption-2-false': 6655.0,
  'class-3-individual-encryption-3-false': 11315.0,
  'class-3-individual-combo-1-false': 6375.0,
  'class-3-individual-combo-2-false': 7645.0,
  'class-3-individual-combo-3-false': 12970.0,

  'class-3-organization-signature-1-true': 789.0,
  'class-3-organization-signature-2-true': 890.0,
  'class-3-organization-signature-3-true': 1335.0,
  'class-3-organization-encryption-1-true': 789.0,
  'class-3-organization-encryption-2-true': 890.0,
  'class-3-organization-encryption-3-true': 1335.0,
  'class-3-organization-combo-1-true': 1580.0,
  'class-3-organization-combo-2-true': 1779.0,
  'class-3-organization-combo-3-true': 2670.0,
  'class-3-organization-signature-1-false': 5545.0,
  'class-3-organization-signature-2-false': 6655.0,
  'class-3-organization-signature-3-false': 11315.0,
  'class-3-organization-encryption-1-false': 5545.0,
  'class-3-organization-encryption-2-false': 6655.0,
  'class-3-organization-encryption-3-false': 11315.0,
  'class-3-organization-combo-1-false': 6490.0,
  'class-3-organization-combo-2-false': 7765.0,
  'class-3-organization-combo-3-false': 13205.0,
}

const defaultFormState: DSCFormState = {
  productId: 'class-3',
  quantity: 1,
  needUSB: false,
  assistance: false,
  dscType: 'individual',
  certificateType: 'signature',
  validity: '1',
  isIndianCitizen: true,
  redirectUrl: '/class-3-digital-signature',
}

export default function Product() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DSCProduct
        productId="class-3"
        priceMap={priceMap}
        defaultFormState={defaultFormState}
        showDscType={true}
        showCertificateType={true}
        showValidity={true}
        showIndianCitizen={true}
        showUsbToken={true}
        showAssistance={true}
        showQuantity={true}
      />
    </Suspense>
  )
}
