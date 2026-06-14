export type SearchParams = {
  quantity: string
  needUSB: string
  assistance: string
  dscType: string
  certificateType: string
  validity: string
  isIndianCitizen: string
}

export interface DSCFormState {
  productId: string
  quantity: number
  needUSB: boolean
  assistance: boolean
  dscType: 'individual' | 'organization'
  certificateType: 'signature' | 'encryption' | 'combo'
  validity: '1' | '2' | '3'
  isIndianCitizen: boolean
  redirectUrl: string
  tokenType?: string
  courierCharge?: number
}
