import { CheckCircle, Award, Shield, BarChart, FileCheck } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card'
import Link from 'next/link'
import MaxWidthWrapper from '../MaxWidthWrapper'

const plans = [
  {
    title: 'Class 3 DSC (Individual) ',
    description: 'Perfect for individual professionals',
    price: '₹789 /-',
    period: '',
    features: ['ITR', 'GST Returns', 'Company Registration', 'TDS Returns', 'And many more'],
    cta: 'Enquire Now',
    query: {
      quantity: 1,
      needUSB: false,
      assistance: false,
      dscType: 'individual',
      certificateType: 'signature',
      validity: '1',
      isIndianCitizen: true,
    },
    url: '/class-3-digital-signature',
    icon: <Shield className="h-8 w-8 text-blue-600" />,
  },
  {
    title: 'Class 3 DSC (Org Combo)',
    description: 'For businesses and organizations',
    price: '₹1,580/-',
    period: '',
    features: ['E-Tendering', 'E-Procurement', 'ICEGATE Registration', 'IREPS', 'And many more'],
    cta: 'Enquire Now',
    query: {
      quantity: 1,
      needUSB: false,
      assistance: false,
      dscType: 'organization',
      certificateType: 'combo',
      validity: '1',
      isIndianCitizen: true,
    },
    url: '/class-3-digital-signature',
    icon: <Award className="h-8 w-8 text-blue-600" />,
    popular: true,
  },
  {
    title: 'DGFT DSC',
    description: 'For import-export businesses',
    price: '₹789/-',
    period: '',
    features: [
      'Import Export Docs Authentication',
      'Applying Licenses on DGFT Website',
      'Applying Certificate Of Origin',
      'Submitting Bank Realization Certificate',
    ],
    cta: 'Enquire Now',
    url: '/dgft-dsc',
    icon: <BarChart className="h-8 w-8 text-blue-600" />,
  },
  {
    title: 'Class 2 Document Signer',
    description: 'For high-volume document signing',
    price: '₹11,050/-',
    period: '',
    features: [
      'Automated PDF Signing',
      'Signing Bulk Invoices',
      'Agreements',
      'Contracts',
      'Offer Letters',
      'And many more',
    ],
    cta: 'Enquire Now',
    url: '/document-signer-certificate',
    icon: <FileCheck className="h-8 w-8 text-blue-600" />,
  },
]

function Pricing() {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-white py-16 scroll-mt-20" id="pricing">
      <MaxWidthWrapper className="max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Choose According To Your Requirements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect Digital Signature Certificate based on your specific needs and
            requirements
          </p>
        </div>

        {/* 
          Responsive grid layout:
          - 1 column on mobile
          - 2 columns on tablets and small laptops
          - 2 columns on medium laptops (instead of 4)
          - 4 columns on large desktops
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col h-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
                plan.popular ? 'border-2 border-blue-500 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                </div>
              )}

              <CardHeader className="pb-3 pt-5">
                <div className="mb-2">{plan.icon}</div>
                <CardTitle className="text-lg font-semibold text-primary">{plan.title}</CardTitle>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </CardHeader>

              <CardContent className="flex-grow px-4 sm:px-5 pb-2">
                <div className="flex flex-col items-baseline mb-4">
                  <span className="text-sm font-medium text-gray-500">Starting from</span>
                  <p className="text-2xl sm:text-3xl font-bold text-primary">{plan.price}</p>
                  <span className="text-xs font-medium text-gray-500">* Including all taxes</span>
                </div>

                <div className="border-t border-gray-100 pt-3 mb-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">Features include:</p>
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="px-4 sm:px-5 pb-5 pt-2">
                <Link
                  href={{
                    pathname: plan.url,
                    query: plan.query,
                  }}
                  className="w-full"
                >
                  <Button
                    className={`text-base font-medium w-full ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Pricing
