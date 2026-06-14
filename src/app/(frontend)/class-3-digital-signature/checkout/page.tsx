import Checkout from '@/components/checkoutPage'
import React, { use } from 'react'
import { DSCFormState } from '../page'

type BillFormData = Promise<{
  orderData: string
  amount: number
}>

function Page({ searchParams }: { searchParams: BillFormData }) {
  const params = use(searchParams)
  if (!params.orderData || !params.amount) {
    return <div className="text-center">Invalid data</div>
  }
  const orderDetails = JSON.parse(params.orderData) as DSCFormState
  return <Checkout orderDetails={orderDetails} amount={params.amount} />
}

export default Page
