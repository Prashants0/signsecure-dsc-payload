/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import axois from 'axios'

import { Separator } from '@/components/ui/separator'
import { useMutation } from '@tanstack/react-query'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { BillFormData } from '../checkoutPage'
import { DSCFormState } from '@/app/(frontend)/class-3-digital-signature/page'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

enum ProductID {
  Class3 = 'class-3',
  DGFT = 'dgft',
  DS = 'ds',
  UsbToken = 'usb-token',
}

// Add courier charge constant
const COURIER_CHARGE = 100

function OrderSummary({
  billData,
  orderDetails,
  amount,
  validateForm,
}: {
  billData: BillFormData
  orderDetails: DSCFormState
  amount: number
  validateForm: () => boolean
}) {
  const { push } = useRouter()
  const [payment_pop, setPaymentPop] = React.useState(false)
  const [orderId, setOrderId] = React.useState('')

  const formatPrice = (amount: number) => {
    return amount.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: 'INR',
    })
  }

  let dscType = ''
  if (orderDetails.productId == ProductID.Class3) {
    dscType = 'Class-3'
  } else if (orderDetails.productId == ProductID.DGFT) {
    dscType = 'DGFT'
  } else if (orderDetails.productId == ProductID.DS) {
    dscType = 'DS'
  }

  if (orderDetails.dscType == 'individual') {
    dscType += ' Individual'
  } else {
    dscType += ' Organization'
  }

  if (orderDetails.certificateType == 'signature') {
    dscType += ' Signature'
  } else if (orderDetails.certificateType == 'encryption') {
    dscType += ' Encryption'
  } else {
    dscType += ' Combo'
  }

  dscType += ' Certificate'
  let validity = ''
  if (orderDetails.validity == '1') {
    validity += ' 1 Year'
  } else if (orderDetails.validity == '2') {
    validity += ' 2 Year'
  } else {
    validity += ' 3 Year'
  }

  // Check if courier charge should be applied
  const hasCourierCharge = orderDetails.productId === 'usb-token' && orderDetails.quantity !== 100
  const courierChargeAmount = hasCourierCharge ? COURIER_CHARGE : 0

  // Calculate the subtotal and total separately from the passed amount
  const productTotal = amount
  const subtotal = productTotal
  const total = productTotal

  const paymentMutate = useMutation({
    mutationFn: async () => {
      if (!validateForm()) {
        return
      }
      try {
        const res = await axois.post(
          process.env.NEXT_PUBLIC_BACKEND_URL + '/create-order',
          {
            name: billData.name,
            email: billData.email,
            number: billData.mobile,
            product_id: orderDetails.productId,
            organisation: billData.organisation,
            quantity: orderDetails.quantity,
            gstn: billData.gstn,
            usb_needed: orderDetails.needUSB ? true : false,
            indian_citizen: orderDetails.isIndianCitizen ? true : false,
            dsc_validity: parseInt(orderDetails.validity!),
            certificate_type: orderDetails.certificateType,
            assistance_required: orderDetails.assistance ? true : false,
            dsc_type: orderDetails.dscType,
            token_type: orderDetails.tokenType,
            payment_type: 'post-dsc',
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )

        if (res.status === 200 && res.data.status == true) {
          setOrderId(res.data.orderId)
          setPaymentPop(true)
          console.log('sss', res.data.status)
        }
      } catch (e) {
        console.log(e)
        return
      }

      return
    },
  })
  return (
    <>
      <Dialog
        open={payment_pop}
        onOpenChange={(value: boolean | ((prevState: boolean) => boolean)) => setPaymentPop(value)}
      >
        <DialogContent className="sm:max-w-[425px] border-t-4 border-primary">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-primary">
              <CheckCircle className="h-6 w-6" />
              Order Confirmed
            </DialogTitle>
            <DialogDescription>Your order has been successfully placed.</DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Order ID: <span className="font-medium text-primary">{orderId}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                We've sent a confirmation email to{' '}
                <span className="font-medium text-primary">{billData.email}</span> with your order
                details.
              </p>
            </div>
            <div className="border-t pt-4">
              <h4 className="text-sm font-semibold mb-2 flex items-center gap-2 text-primary">
                <ArrowRight className="h-4 w-4" />
                Next Steps
              </h4>
              <p className="text-sm text-muted-foreground">
                The DSC (Digital Signature Certificate) process has been initiated. We will contact
                you shortly for further steps and any additional information required.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                setPaymentPop(false)
                console.log(orderDetails.redirectUrl)

                push(orderDetails.redirectUrl)
              }}
              className="w-full sm:w-auto bg-primary hover:bg-[#3a79e0] text-white"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
        <Card>
          <CardHeader>
            <CardTitle>Configuration Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                {orderDetails.productId == 'usb-token' ? (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">DSC Token</h3>
                    <span>{orderDetails.tokenType}</span>
                  </div>
                ) : (
                  <div>
                    <span>{dscType}</span>
                    <br />
                    <span>{validity}</span>
                    <br />
                    <p className="text-sm text-gray-500">
                      Indian Citizen: {orderDetails.isIndianCitizen ? 'Yes' : 'No'}
                    </p>
                    <p className="text-sm text-gray-500">
                      Need Personal Assistance: {orderDetails.assistance ? 'Yes' : 'No'}
                    </p>
                    <p className="text-sm text-gray-500">
                      Need USB Token: {orderDetails.needUSB ? 'Yes' : 'No'}
                    </p>
                    <br />
                  </div>
                )}

                {hasCourierCharge ? (
                  <span className="font-semibold">
                    {formatPrice((productTotal - 100) / orderDetails.quantity)}
                  </span>
                ) : (
                  <span className="font-semibold">
                    {formatPrice(productTotal / orderDetails.quantity)}
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Quantity</span>
                <span>{orderDetails.quantity}</span>
              </div>

              <Separator />
              <div className="flex justify-between items-center text-sm">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {hasCourierCharge && (
                <div className="flex justify-between items-center text-sm">
                  <span>Courier Charge</span>
                  <span>{formatPrice(courierChargeAmount)}</span>
                </div>
              )}
              {/* <div className="flex justify-between items-center text-sm">
                <span>GST (18%)</span>
                <span>{formatPrice(gstAmount)}</span>
              </div> */}
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total </span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              type="submit"
              onClick={() => {
                if (paymentMutate.isPending) return
                paymentMutate.mutate()
              }}
              id="checkout-btn"
            >
              {paymentMutate.isPending ? 'Processing' : 'Submit'}
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  )
}

export default OrderSummary
