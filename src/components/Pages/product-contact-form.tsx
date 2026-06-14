/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from 'react'
import { Button } from '../ui/button'
import { AlertCircle, Check } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { toast } from '@/hooks/use-toast'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

interface FormData {
  name: string
  email: string
  organization: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  organization?: string
  phone?: string
  message?: string
}

function ProductContactForm({ className, productId }: { className?: string; productId: string }) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.organization.trim()) {
      newErrors.organization = 'organization name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const formMutate = useMutation({
    mutationFn: async () => {
      if (!validateForm()) {
        return
      }
      const res = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + '/create-lead',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          comments: formData.message,
          product_id: productId,
          lead_source: 'website',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      if (res.status === 200) {
        toast({
          title: 'Form submitted!',
          description: "We've received your inquiry and will get back to you soon.",
        })
        setFormSubmitted(true)
      }
    },
  })

  return (
    <div className={className}>
      <Card>
        <CardHeader>
          <CardTitle>Contact Us for Pricing</CardTitle>
          {/* <CardDescription>
            Fill out the form and we'll get back to you with a custom quote.
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          {formSubmitted ? (
            <div className="text-center py-8">
              <Check className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                We've received your inquiry and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                formMutate.mutate()
              }}
              className="space-y-4"
              id="get-quote-form"
            >
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="1234567890"
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="organization">organization</Label>
                <Input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Acme Inc."
                  className={errors.organization ? 'border-red-500' : ''}
                />
                {errors.organization && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.organization}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your needs..."
                  className={errors.message ? 'border-red-500' : ''}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductContactForm
