import { DSCFormState } from '@/app/(frontend)/class-3-digital-signature/page'
import Checkout from '@/components/checkoutPage'
import React, { use } from 'react'

type BillFormData = Promise<{
  orderData: string
  amount: number
}>

function Page({ searchParams }: { searchParams: BillFormData }) {
  const params = use(searchParams)
  const orderDetails = JSON.parse(params.orderData) as DSCFormState
  return <Checkout orderDetails={orderDetails} amount={params.amount} />
}

export default Page
