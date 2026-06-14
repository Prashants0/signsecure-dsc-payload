import React from 'react'

import axois from 'axios'
import { useRouter } from 'next/navigation'

import { Separator } from '@/components/ui/separator'
import { useSearchParams } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import PaymentSuccessPopup from './payment-success'
import { PaymentFormData } from './payment-info'

function OrderSummary({
  formData,
  validateForm,
}: {
  formData: PaymentFormData
  validateForm: () => boolean
}) {
  const searchParams = useSearchParams()

  const payment_status = searchParams.get('payment_status')
  const quantity = searchParams.get('quantity')
  const paymentId = searchParams.get('payment_id')
  const paymentRequestId = searchParams.get('payment_request_id')
  const options = searchParams.get('options')?.split(',')
  const selectedOptions = ['Template Mode (Base Option)']

  let price = 1500 // Price in rupees
  const gstRate = 0.18 // 18% GST rate

  if (options?.includes('sign_text')) {
    selectedOptions.push('Text Mode')
    price += 500
  }
  if (options?.includes('sign_apperance')) {
    selectedOptions.push('Signature Appearance Modification')
    price += 500
  }
  if (options?.includes('mail')) {
    selectedOptions.push('Mail PDF After Signing')
    price += 300
  }
  if (options?.includes('time_stamp')) {
    selectedOptions.push('Time Stamp/LTV Signing')
    price += 100
  }
  if (options?.includes('password_protection')) {
    selectedOptions.push('PDF Password Protection')
    price += 100
  }

  const subtotal = price * parseInt(quantity!)
  const gstAmount = subtotal * gstRate
  const total = subtotal + gstAmount

  let payment_pop = false
  if (payment_status === 'Credit') {
    payment_pop = true
  }

  const formatPrice = (amount: number) => {
    return amount.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: 'INR',
    })
  }

  const { push } = useRouter()

  const paymentMutate = useMutation({
    mutationFn: async () => {
      if (!validateForm()) {
        return
      }
      const currentUrl = window.location.href
      const res = await axois.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + '/create-order',
        {
          name: formData.name,
          email: formData.email,
          number: formData.mobile,
          organisation: formData.organisation,
          redirect_url: currentUrl,
          quantity: parseInt(quantity!),
          product_id: '1',
          gstn: formData.gstn,
          license_options: options,
          payment_type: 'instamojo',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      if (res.status === 200) {
        push(res.data.payment_link)
      }
      return
    },
  })
  return (
    <>
      <PaymentSuccessPopup
        open={payment_pop}
        paymentId={paymentId!}
        paymentRequestId={paymentRequestId!}
      />
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">Software License</p>
                {selectedOptions?.map((option) => (
                  <p key={option} className="text-sm">
                    {option}
                  </p>
                ))}
              </div>
              <span className="font-semibold">{formatPrice(price)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Quantity</span>
              <span>{quantity}</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center text-sm">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>GST (18%)</span>
              <span>{formatPrice(gstAmount)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold">
              <span>Total (including GST)</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => paymentMutate.mutate()}>
            {paymentMutate.isPending ? (
              <div className="flex items-center space-x-2">
                <span>Processing...</span>
                <span className="animate-spin rounded-full h-3 w-3 border-t-2 border-b-2 border-white"></span>
              </div>
            ) : (
              'Complete Purchase'
            )}
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default OrderSummary
