'use client'
import axois from 'axios'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from '@/hooks/use-toast'
import { useMutation } from '@tanstack/react-query'

interface FormData {
  name: string
  email: string
  phone: string
  organization: string
  requirements: string
  product: string
}

interface FormErrors {
  name: string
  email: string
  phone: string
  requirements: string
  product: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    requirements: '',
    product: '',
  })

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    phone: '',
    requirements: '',
    product: '',
  })

  const [isFormValid, setIsFormValid] = useState(false)

  const validateName = (name: string) => {
    return name.length >= 2 ? '' : 'Name must be at least 2 characters long'
  }

  const validateEmail = (email: string) => {
    const re = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/
    return re.test(email) ? '' : 'Please enter a valid email address'
  }

  const validatePhone = (phone: string) => {
    const re = /^\+?[1-9]\d{1,14}$/
    return re.test(phone) ? '' : 'Please enter a valid phone number'
  }

  const validateRequirements = (requirements: string) => {
    return requirements.length >= 10 ? '' : 'Requirements must be at least 10 characters long'
  }

  const validateProduct = (product: string) => {
    return product ? '' : 'Please select a product type'
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

    if (name in errors) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validateField(name, value),
      }))
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      product: value,
    }))

    setErrors((prevErrors) => ({
      ...prevErrors,
      product: validateProduct(value),
    }))
  }

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return validateName(value)
      case 'email':
        return validateEmail(value)
      case 'phone':
        return validatePhone(value)
      case 'requirements':
        return validateRequirements(value)
      case 'product':
        return validateProduct(value)
      default:
        return ''
    }
  }

  useEffect(() => {
    const formIsValid =
      Object.values(errors).every((error) => error === '') &&
      Object.values(formData).every((value) => value !== '')
    setIsFormValid(formIsValid)
  }, [formData, errors])

  const submitMutation = useMutation({
    mutationFn: async () => {
      if (!isFormValid) {
        return
      }
      try {
        const res = await axois.post(
          process.env.NEXT_PUBLIC_BACKEND_URL + '/create-lead',
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            organization: formData.organization,
            comments: formData.requirements,
            product_id: formData.product,
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
            description: "We've received your contact information and will get back to you soon.",
            variant: 'default',
          })
        }
      } catch (error) {
        console.log(error)
        toast({
          title: 'Form submission failed',
          description: 'Please try again later.',
          variant: 'destructive',
        })
      }
    },
  })

  return (
    <section id="contact" className="scroll-mt-20 w-full py-16 bg-primary">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information Side */}
          <div className="space-y-8 h-full">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Contact Us</h2>
              <p className="text-lg text-white/90">
                We&apos;re here to help you with your document signing needs. Please fill out the
                form below and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-white/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href={`mailto:dsc@signsecure.in`} className="hover:text-white transition-colors">
                  dsc@signsecure.in
                </a>
              </div>

              <div className="flex items-center space-x-4 text-white/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href={`tel:+919324462329`} className="hover:text-white transition-colors">
                  +91 93244 62329
                </a>
              </div>

              <div className="flex items-center space-x-4 text-white/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <a href={`https://wa.me/917990740623`} className="hover:text-white transition-colors">
                  WhatsApp +91 79907 40623
                </a>
              </div>
            </div>

            <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-lg ring-1 ring-white/20">
              <iframe
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=25,%201st%20%20Floor,%20Gordhandas%20building%20%20Raja%20Ram%20Mohan%20Roy%20Road%20Opp.%20Girgaon%20Church%20,%20%20Opera%20House,%20Charni%20Rd,%20Mumbai%20-400004+(Sign%20Secure)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="border-0"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <form
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault()
              submitMutation.mutate()
            }}
            className="space-y-6 bg-white p-8 rounded-xl shadow-lg h-full"
            id="contact-us-form"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`bg-white border-gray-200 placeholder-gray-400 text-gray-900 focus:border-primary focus:ring-primary ${
                    errors.name ? 'border-red-400' : ''
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`bg-white border-gray-200 placeholder-gray-400 text-gray-900 focus:border-primary focus:ring-primary ${
                    errors.email ? 'border-red-400' : ''
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`bg-white border-gray-200 placeholder-gray-400 text-gray-900 focus:border-primary focus:ring-primary ${
                    errors.phone ? 'border-red-400' : ''
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization" className="text-sm font-medium text-gray-700">
                  Organization
                </Label>
                <Input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="bg-white border-gray-200 placeholder-gray-400 text-gray-900 focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements" className="text-sm font-medium text-gray-700">
                User Requirements
              </Label>
              <Textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                required
                className={`bg-white border-gray-200 placeholder-gray-400 text-gray-900 focus:border-primary focus:ring-primary min-h-[120px] ${
                  errors.requirements ? 'border-red-400' : ''
                }`}
              />
              {errors.requirements && (
                <p className="text-red-500 text-xs mt-1">{errors.requirements}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="product" className="text-sm font-medium text-gray-700">
                Product Type
              </Label>
              <Select onValueChange={handleSelectChange} value={formData.product}>
                <SelectTrigger
                  className={`bg-white border-gray-200 text-gray-900 focus:border-primary focus:ring-primary ${
                    errors.product ? 'border-red-400' : ''
                  }`}
                >
                  <SelectValue placeholder="Select a product type" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="class-3" className="text-gray-900 hover:bg-gray-100">
                    Class 3 DSC
                  </SelectItem>
                  <SelectItem value="ds" className="text-gray-900 hover:bg-gray-100">
                    Class 2 / Document Signer DSC
                  </SelectItem>
                  <SelectItem value="dgft" className="text-gray-900 hover:bg-gray-100">
                    DGFT
                  </SelectItem>
                  <SelectItem
                    value="dsc-reseller-login"
                    className="text-gray-900 hover:bg-gray-100"
                  >
                    DSC Reseller Login
                  </SelectItem>

                  <SelectItem value="0" className="text-gray-900 hover:bg-gray-100">
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.product && <p className="text-red-500 text-xs mt-1">{errors.product}</p>}
            </div>

            <Button
              type="submit"
              className={`w-full py-3 text-sm font-medium transition-colors ${
                !isFormValid
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-primary text-white hover:bg-primary/90'
              }`}
              disabled={!isFormValid}
              id="contact-us-submit"
            >
              {submitMutation.isPending ? (
                <div className="flex items-center justify-center space-x-2">
                  <span>Submitting...</span>
                  <span className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></span>
                </div>
              ) : (
                'Submit'
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
