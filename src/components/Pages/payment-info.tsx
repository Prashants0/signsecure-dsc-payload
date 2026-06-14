'use client'
import OrderSummary from './order-summary'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Suspense, useState } from 'react'

export type PaymentFormData = {
  name: string
  email: string
  mobile: string
  organisation: string
  gstn: string
}
export default function BillingDetails() {
  const [errors, setErrors] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    gstn: '',
  })

  const [formData, setFormData] = useState<PaymentFormData>({
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

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!formData.organisation.trim()) {
      newErrors.company = 'Company name is required'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
      isValid = false
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required'
      isValid = false
    } else if (!/^\d{10}$/.test(formData.mobile)) {
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
            <CardTitle>Billing Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    value={formData.name}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    value={formData.organisation}
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
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                  {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="mobile">GSTN (Optional)</Label>
                  <Input
                    id="GSTN"
                    type="text"
                    placeholder="GSTN (Optional)"
                    required
                    value={formData.gstn}
                    onChange={(e) => setFormData({ ...formData, gstn: e.target.value })}
                  />
                  {errors.mobile && <p className="text-red-500 text-sm">{errors.gstn}</p>}
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <Suspense>
          <OrderSummary formData={formData} validateForm={validateForm} />
        </Suspense>
      </div>
    </div>
  )
}
