import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import FAQSection, { FAQ } from '@/components/faq'
import { Metadata } from 'next'
import Product from '@/components/document-signer-certificate/product'

export const metadata: Metadata = {
  title: 'Buy Class 2 & Class 3 Digital Signer Certificate at discounted rates',
  description:
    'Get Class 2 & Class 3 Document Signer Certificates with signsecure and automate your digital signing process securely.',
  keywords:
    'digital signer certificate, Document Signer Certificate, class 2 document signer certificate, buy document signer certificate, class 3 document signer certificate',
}

const faqs: Array<FAQ> = [
  {
    id: 1,
    question: 'How do I get a PDF signer certificate?',
    answer:
      'For a document signer certificate, an applicant can approach a Certifying Authority (CA) approved by the government. Just go to their portal, complete the application, and upload the necessary documents.',
  },
  {
    id: 2,
    question: 'Who gives a PDF signature certificate?',
    answer:
      'A PDF signature certificate is issued by Certifying Authorities (CA), which is an entity authorized by the government to provide such certificates.',
  },
  {
    id: 3,
    question: 'Can I create my own PDF signature certificate?',
    answer:
      'It is impossible to generate a PDF signature certificate on one’s own. It must be issued by a Certifying Authority to guarantee the security and validity of the certificate',
  },
  {
    id: 4,
    question: 'Who is eligible for a PDF signature?',
    answer:
      'Every person or group can request a PDF signature certificate as long as the requirements of the Certifying Authority are fulfilled. Usually, possessing an original form of ID is a must. Plus, for corporations, evidence of business incorporation is also essentia',
  },
]

const features = [
  {
    title: 'User-Friendly Interface',
    description:
      'This platform is built with ease of use in mind. Signing your papers through our system is easy regardless of whether you’re techy or just starting.',
  },
  {
    title: 'Comprehensive Support',
    description:
      'We offer dedicated customer support services to help you with any concerns or challenges that you face while using our DSC signer.',
  },
  {
    title: 'Versatile Solutions',
    description:
      'Be it a PDF DSC signer for signing PDFs or a range of document signing packages for all formats, Sign Secure provides the solution.',
  },
  {
    title: 'Industry Compliant',
    description:
      'We look into the law and understand clearly all the rules and regulations that would construe the use of your electronic signatures in various businesses.',
  },
]

const benefits = [
  {
    title: 'Enhanced Security',
    description:
      'A DSC signer offers solid security measures, including encryption and authentication, which protect your documents from unwanted modifications. This means that your signed documents are both protected from any form of tampering and kept private.',
  },
  {
    title: 'Legally Recognized',
    description:
      'Our certificate-signed documents are considered to have the same legal standing as a document signed with an ink signature. In other words, you can use them for any official or legal undertaking because such documents are recognized by courts and other government bodies.',
  },
  {
    title: 'Time-Efficient',
    description:
      'Gone are the long days of printing papers, signing them, and then scanning them back into the computer. Sign Secure enables its clients to sign and dispatch any documents in a span of seconds, and this helps reduce the turnaround time a lot.',
  },
  {
    title: 'Cost-Effective',
    description:
      "There's a considerable financial advantage to this in terms of less use of paper, ink, and postage. Also, the process of signing tends to reduce the chances of mistakes and rewrites, thereby increasing efficiency.",
  },
  {
    title: 'Compliance',
    description:
      ' Our DSc signer guarantees that you satisfy all the legal and regulatory provisions on electronic signatures, enabling you to run your operations within the limits of industry standards.',
  },
]

export default function DSCPurchasePage() {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Document Signer Certificate</h1>
        <Product />
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Product Description</CardTitle>
          </CardHeader>
          <CardContent className="text-sm md:text-base">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              PDF Signer Certificate: A Secure Solution for Document Signing
            </h2>
            <p className="mb-4">
              Digital transformation has revolutionized communication, making it more organized and
              efficient. With more document exchanges taking place through the internet, there
              arises a massive demand for secure and dependable document-signing solutions.
            </p>
            <p className="mb-4">
              Presenting Sign Secure - the ultimate platform to ease the process of signing
              documents with our PDF Signer Certificate. Our signer not only guarantees the signing
              of your documents but also secures them, thus presenting itself as the perfect
              solution for both corporate entities and individuals.
            </p>
            <h3 className="text-base md:text-lg font-semibold mb-2">
              What is a PDF Signer Certificate?
            </h3>
            <p className="mb-4">
              A PDF signer certificate is considered an electronic equivalent of a physical
              signature, as it helps authenticate a signer’s identity and protects the signed
              document from alterations. As per the provisions of the Information Technology Act, a
              DSC establishes the legal recognition of electronic signatures in different sectors
              within the country, including the government and finance.
            </p>
            <p className="mb-4">
              A signer using DSC allows the user to apply an electronic signature to other documents
              without fear of movement or alteration of the document. This is very advantageous for
              contracts, agreements, and other legal papers that need a reliable signature and
              cannot afford forgery
            </p>
            <h3 className="text-base md:text-lg font-semibold mb-2">
              Benefits of Using a Document Signer Certificate
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              {benefits.map((benefit) => (
                <li key={benefit.title}>
                  <b>{benefit.title}:</b>
                  {benefit.description}
                </li>
              ))}
            </ul>
            <h3 className="text-base md:text-lg font-semibold mb-2">Why Choose Sign Secure?</h3>
            <p>
              Choosing Sign Secure means opting for reliability, security, and user-friendliness.
              Here’s why we stand out:
            </p>
            <ul className="list-disc list-inside space-y-2">
              {features.map((feature) => (
                <li key={feature.title}>
                  <b>{feature.title}:</b>
                  {feature.description}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <FAQSection faqs={faqs} />
      </div>
    </MaxWidthWrapper>
  )
}
