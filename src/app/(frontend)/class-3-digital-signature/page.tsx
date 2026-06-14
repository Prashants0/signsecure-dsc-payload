import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import FAQSection, { FAQ } from '@/components/faq'
import { Metadata } from 'next'
import Product from '@/components/class-3-digital-signature/product'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Buy Class 3 Digital Signature Online at exclusive rates',
  description:
    'We provide class 3 DSC at best rates in all over India. Apply class 3 DSC online for ITR/GST/MCA/Trademark/eTenders/ICEGATE and many more.',
  keywords:
    'class 3 digital signature, class 3 dsc, class three digital signature, digital signature class iii, class 3 dsc price, dsc class3',
}

const faqs: Array<FAQ> = [
  {
    id: 1,
    question: 'What is the validity of a class 3 e-signature?',
    answer:
      'In general, the validity is for between one and three years, and it is contingent upon the kind of certificate that you purchased. After the expiration date, the certificate will be required to renew your certificate in order to use it again',
  },
  {
    id: 2,
    question: 'Can I use the same signature for different applications?',
    answer:
      'Yes, the Class 3 DSC can be utilized across different platforms to use diverse applications like filing electronically with government portals, signing documents, or participating in safe online transactions such as tendering electronically and bidding electronically.',
  },
  {
    id: 3,
    question: 'How secure is a Class 3 e-signature compared to other types?',
    answer:
      'This certificate provides the best level of security in comparison with Class 1, Class 2, and other certifications. This type of certificate requires a strict verification of the identity of the person signing it, as well as sophisticated encryption. This makes it the best choice to make high-risk online transactions.',
  },
  {
    id: 4,
    question: 'What should I do if I lose my digital signature?',
    answer:
      'f you lose access to your DSC, immediately call Sign Secure to revoke the present certificate and request another one. It will secure the integrity of all your transactions online and stop unauthorized usage of your personal signature.',
  },
]

const features = [
  {
    title: 'Most secure encryption level',
    description:
      'It is the highest level of security in encryption that ensures the authenticity and integrity of signed documents.',
    icon: CheckCircle2,
  },
  {
    title: 'Two-Factor Authentication(TFA)',
    description:
      'This assures that only the authentic user is able to access and harness the class 3 DSC uses. It also adds an extra layer of security.',
    icon: CheckCircle2,
  },
  {
    title: 'Legally Accepted',
    description:
      'They are issued through Sign Secure and are recognized by government authorities. This makes it ideal for legal agreements, E-filing, compliance,and legal.',
    icon: CheckCircle2,
  },
  {
    title: 'Multi-Application:',
    description:
      'You may make use of the Class 3 Digital Signature Certificate across various platforms like e-tenders bank online, as well as secure email, which offers versatility to customers in various fields.',
    icon: CheckCircle2,
  },
  {
    title: 'Simple User Interface',
    description:
      'With an easy procedure for setting up and using the system, the DSC allows companies and users to take advantage of this new technology without requiring complicated processes.',
    icon: CheckCircle2,
  },
  {
    title: 'Affordable Prices',
    description:
      'We have an affordable class 3 DSC price, so security does not come with a price. Our plans are created to satisfy the requirements of different users, ranging from large and small businesses to individuals',
    icon: CheckCircle2,
  },
]

const benefits = [
  {
    title: 'Advanced Security',
    description:
      'Digital Signatures of Class 3 provide strong encryption that ensures your data remains secure and secure from access by unauthorized persons. This is crucial for areas like government, finance, and legal, where the security of data is imperative.',
  },
  {
    title: 'Streamlined Workflow',
    description:
      'Eliminating the need to sign documents with physical signatures in DSCs helps businesses reduce the time it takes to complete their procedures. They not only speed up the approval of documents but also decrease the use of paper, resulting in greener workplaces.',
  },
  {
    title: 'Cost Savings',
    description:
      'The implementation of the Class 3 Digital Signature Certificate reduces the cost of paperwork, which includes printing, transportation, and storage. If you work for a company that handles an extensive amount of legal or transactional documents, the savings could be considerable. This reduces the overall Class 3 DSC price.',
  },
  {
    title: 'Legal compliance',
    description:
      'Lots of businesses have to utilize digital signatures as a means of document authentication. Class 3 e-signatures satisfy the legal requirements and ensure that organizations are compliant with the regulatory requirements.',
  },
  {
    title: 'Global Recognition:',
    description:
      'As businesses increase their dependence on digital transactions around the world, Class 3 Digital Signature Certificates have been recognized and accepted globally, which makes it much easier for firms to take part in trans-border communication and transactions.',
  },
]

export type DSCFormState = {
  quantity: number
  needUSB?: boolean
  productId: string
  assistance?: boolean
  dscType?: string
  certificateType?: string
  validity?: string
  isIndianCitizen?: boolean
  tokenType?: string
  redirectUrl: string
}

export default async function DSCPurchasePage() {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-background">
        {/* Product Selection */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Configure Your Class 3 Digital Signature
          </h2>
          <Product />
        </div>
        {/* Features Section */}
        <div className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border border-gray-100 hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <feature.icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Product Description */}
        <Card className="my-12 border-none shadow-lg">
          <CardHeader className="bg-primary/5 rounded-t-lg">
            <CardTitle className="text-xl md:text-2xl">Product Description</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 text-sm md:text-base space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold">
              Class 3 Digital Signature: Secure and Efficient Digital Authentication
            </h2>
            <p>
              Nowadays, safeguarding sensitive information online is an essential concern for both
              businesses and individuals. In the face of increasing demands for safe transactions
              and the need for legal compliance, class 3 Digital Signatures have come to the
              forefront as an effective solution. Sign Secure offers a seamless and safe method of
              authenticating documents electronically, ensuring assurance for everyone who uses it.
            </p>
            <h3 className="text-lg md:text-xl font-semibold">
              What is a Class 3 Digital Signature?
            </h3>
            <p>
              The DSC is the most prestigious standard of accessible digital signatures, offering
              unbeatable security when it comes to online transactions and document authentication.
              Certified by licensed authorities, they ensure the authenticity of the person signing
              when performing high-risk activities like e-tendering, electronic filing, as well as
              documents that are legally required to be submitted.
            </p>
            <p>
              We at Sign Secure Sign Secure offer Class 3 DSCs, which are in compliance with the
              regulations of the government, making them ideal for private individuals or businesses
              who require legal, secure, as well as verified digital identity
            </p>

            <h3 className="text-xl font-semibold mt-8">
              Benefits of Class 3 e-Signature for Businesses
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* FAQ Section with improved styling */}
        <div className="mb-12">
          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
