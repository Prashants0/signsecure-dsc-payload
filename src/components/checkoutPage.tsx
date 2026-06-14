'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Suspense, useState } from 'react'
import OrderSummary from './payment/order-summary'
import { DSCFormState } from '@/app/(frontend)/class-3-digital-signature/page'

export type BillFormData = {
  name: string
  email: string
  mobile: string
  organisation: string
  gstn: string
}

export default function Checkout({
  orderDetails,
  amount,
}: {
  orderDetails: DSCFormState
  amount: number
}) {
  const [errors, setErrors] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    gstn: '',
  })

  const [billData, setFormData] = useState<BillFormData>({
    name: '',
    email: '',
    mobile: '',
    organisation: '',
    gstn: '',
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      name: '',
      company: '',
      email: '',
      mobile: '',
      gstn: '',
    }

    if (!billData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!billData.organisation.trim()) {
      newErrors.company = 'Company name is required'
      isValid = false
    }
    if (!billData.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/.test(billData.email)) {
      newErrors.email = 'Email must be valid'
      isValid = false
    }

    if (!billData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required'
      isValid = false
    } else if (!/^\d{10}$/.test(billData.mobile)) {
      newErrors.mobile = 'Mobile number should be 10 digits'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Fill Enquiry Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form id="checkout-form">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    onChange={(e) => setFormData({ ...billData, name: e.target.value })}
                    required
                    value={billData.name}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    onChange={(e) => setFormData({ ...billData, organisation: e.target.value })}
                    value={billData.organisation}
                    required
                  />
                  {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email ID</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={billData.email}
                    onChange={(e) => setFormData({ ...billData, email: e.target.value })}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="9876543210"
                    required
                    value={billData.mobile}
                    onChange={(e) => setFormData({ ...billData, mobile: e.target.value })}
                  />
                  {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                </div>
                {/* <div className="grid gap-2">
                  <Label htmlFor="mobile">GSTN (Optional)</Label>
                  <Input
                    id="GSTN"
                    type="text"
                    placeholder="GSTN (Optional)"
                    required
                    value={billData.gstn}
                    onChange={(e) =>
                      setFormData({ ...billData, gstn: e.target.value })
                    }
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm">{errors.gstn}</p>
                  )}
                </div> */}
              </div>
            </form>
          </CardContent>
        </Card>
        <Suspense>
          <OrderSummary
            billData={billData}
            validateForm={validateForm}
            orderDetails={orderDetails}
            amount={amount}
          />
        </Suspense>
      </div>
    </div>
  )
}
