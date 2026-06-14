'use client'

import { DSCProduct } from '@/components/shared/dsc-product'
import { DSCFormState } from '@/types/product'
import { Suspense } from 'react'

const priceMap = {
  Hyp2003: 460,
  Proxykey: 440,
  MToken: 460,
}

const defaultFormState: DSCFormState = {
  productId: 'usb-token',
  quantity: 25,
  needUSB: false,
  assistance: false,
  dscType: 'individual',
  certificateType: 'signature',
  validity: '1',
  isIndianCitizen: true,
  redirectUrl: '/dsc-token',
  tokenType: 'Hyp2003',
}

const quantityOptions = [
  { value: 10, label: '10' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
]

const tokenTypes = [
  { value: 'Hyp2003', label: 'Hyp 2003' },
  { value: 'Proxykey', label: 'Proxykey' },
  { value: 'MToken', label: 'M Token' },
]

const COURIER_CHARGE = 100

// Discount calculation function based on quantity to match chart pricing
const calculateDiscount = (formState: DSCFormState) => {
  if (formState.productId !== 'usb-token') return 0

  // Discount based on quantity to achieve chart prices
  // Base price is for qty 10, discounts applied for higher quantities
  switch (formState.quantity) {
    case 10:
      return 0 // No discount for base quantity
    case 25:
      return 10 // 410->400, 390->380
    case 50:
      return 15 // 410->395, 390->375
    case 100:
      return 20 // 410->390, 390->370
    default:
      return 0
  }
}

export default function Product() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DSCProduct
        productId="usb-token"
        priceMap={priceMap}
        defaultFormState={defaultFormState}
        showDscType={false}
        showCertificateType={false}
        showValidity={false}
        showIndianCitizen={false}
        showUsbToken={false}
        showAssistance={false}
        showQuantity={true}
        showTokenType={true}
        tokenTypes={tokenTypes}
        quantityOptions={quantityOptions}
        courierCharge={COURIER_CHARGE}
        hasCourierCharge={(formState) => formState.quantity !== 100}
        calculateDiscount={calculateDiscount}
      />
    </Suspense>
  )
}
