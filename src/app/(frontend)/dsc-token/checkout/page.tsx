import { DSCFormState } from '@/app/(frontend)/class-3-digital-signature/page'
import Checkout from '@/components/checkoutPage'
import React, { use } from 'react'

type BillFormData = Promise<{
  orderData: string
  amount: number
}>

function Page({ searchParams }: { searchParams: BillFormData }) {
  const param = use(searchParams)
  if (!param.orderData || !param.amount) {
    return <div>Invalid data</div>
  }
  const orderDetails = JSON.parse(param.orderData) as DSCFormState
  return <Checkout orderDetails={orderDetails} amount={param.amount} />
}

export default Page
