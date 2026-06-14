'use client'

import { DSCProduct } from '@/components/shared/dsc-product'
import { DSCFormState } from '@/types/product'
import { Suspense } from 'react'

// A Foreign National DSC is a Class 3 certificate issued to non-Indian citizens.
// Pricing matches the Class 3 non-Indian-citizen (isIndianCitizen: false) rates,
// and the order reuses the Class 3 checkout flow.
const priceMap = {
  'class-3-individual-signature-1-false': 3800.0,
  'class-3-individual-signature-2-false': 4501.0,
  'class-3-individual-signature-3-false': 6750.0,
  'class-3-individual-encryption-1-false': 5545.0,
  'class-3-individual-encryption-2-false': 6655.0,
  'class-3-individual-encryption-3-false': 11315.0,
  'class-3-individual-combo-1-false': 6375.0,
  'class-3-individual-combo-2-false': 7645.0,
  'class-3-individual-combo-3-false': 12970.0,

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
  isIndianCitizen: false,
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
        showIndianCitizen={false}
        showUsbToken={true}
        showAssistance={true}
        showQuantity={true}
      />
    </Suspense>
  )
}
