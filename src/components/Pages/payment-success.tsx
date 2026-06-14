'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function PaymentSuccessPopup({
  open = false,
  paymentId = '',
  paymentRequestId = '',
}: {
  open: boolean
  paymentId: string
  paymentRequestId: string
}) {
  const [isOpen, setIsOpen] = useState(open)

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Payment Successful</CardTitle>
            <Button variant="ghost" size="icon" onClick={handleClose}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">
            Thank you for your purchase! Your payment has been processed successfully.
          </p>
          <div className="space-y-2 text-sm ">
            <p className="text-center">Payment ID: {paymentId}</p>
            <p className="text-center">Payment Request ID: {paymentRequestId}</p>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            An email with all your purchased license keys has been sent to you.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleClose}>Close</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
