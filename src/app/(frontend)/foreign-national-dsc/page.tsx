import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import FAQSection, { FAQ } from '@/components/faq'
import { Metadata } from 'next'
import Product from '@/components/foreign-national-dsc/product'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Foreign National DSC for NRIs & Foreign Directors | SignSecure',
  description:
    'Get a Class 3 Digital Signature Certificate for foreign nationals, NRIs and foreign directors of Indian companies. Accepted on MCA, GST and other portals. Apply with SignSecure.',
  keywords:
    'foreign national dsc, dsc for foreign nationals, dsc for nri, dsc for foreign directors, class 3 dsc for foreigners',
}

const faqs: Array<FAQ> = [
  {
    id: 1,
    question: 'Who needs a Foreign National DSC?',
    answer:
      'Foreign nationals, NRIs and foreign directors or shareholders of Indian companies who need to sign documents on Indian government portals such as MCA, GST and Income Tax require a Foreign National Digital Signature Certificate.',
  },
  {
    id: 2,
    question: 'What documents are required for a Foreign National DSC?',
    answer:
      'A copy of the passport is mandatory as identity proof, along with an address proof. For applicants residing outside India, the documents usually need to be apostilled or attested as per CCA guidelines. Our team will guide you through the exact requirements based on your country of residence.',
  },
  {
    id: 3,
    question: 'Which class of DSC is issued to foreign nationals?',
    answer:
      'Foreign nationals are issued a Class 3 Digital Signature Certificate, available as Signature, Encryption or Combo, with 1, 2 or 3 year validity.',
  },
  {
    id: 4,
    question: 'Can a foreign national DSC be used to register an Indian company?',
    answer:
      'Yes. Foreign directors and subscribers use a Foreign National DSC to digitally sign incorporation forms on the MCA portal and to complete ongoing compliance.',
  },
]

const features = [
  {
    title: 'For NRIs & Foreign Nationals',
    description:
      'Designed for non-Indian citizens, NRIs and foreign directors who must sign on Indian government portals.',
    icon: CheckCircle2,
  },
  {
    title: 'Class 3 Security',
    description:
      'The highest assurance level of digital signature, with strong encryption and strict identity verification.',
    icon: CheckCircle2,
  },
  {
    title: 'Documentation Support',
    description:
      'We guide you through passport-based verification and apostille / attestation requirements for your country.',
    icon: CheckCircle2,
  },
  {
    title: 'Accepted Across Portals',
    description:
      'Use it on MCA, GST, Income Tax and other portals just like a domestic Class 3 certificate.',
    icon: CheckCircle2,
  },
  {
    title: 'Flexible Options',
    description:
      'Choose Individual or Organisation, Signature / Encryption / Combo, and 1–3 year validity.',
    icon: CheckCircle2,
  },
  {
    title: 'Expert Assistance',
    description:
      'Our team provides free online support to make the application smooth for overseas applicants.',
    icon: CheckCircle2,
  },
]

export default function ForeignNationalDSCPage() {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-background">
        {/* Product Selection */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6 mt-4">
          <h1 className="text-xl md:text-2xl font-bold mb-2">Foreign National DSC</h1>
          <p className="text-sm text-muted-foreground mb-4">
            Class 3 Digital Signature Certificate for non-Indian citizens. Configure your
            certificate below.
          </p>
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
            <CardTitle className="text-xl md:text-2xl">About the Foreign National DSC</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 text-sm md:text-base space-y-6">
            <p>
              A Foreign National Digital Signature Certificate is a Class 3 DSC issued to non-Indian
              citizens — including NRIs and foreign directors or shareholders of Indian companies —
              who need to authenticate documents on Indian government portals. It carries the same
              legal validity as a domestic Class 3 certificate and is widely used for company
              incorporation and compliance on the MCA portal, GST, Income Tax and more.
            </p>
            <h3 className="text-lg md:text-xl font-semibold">Documentation for Overseas Applicants</h3>
            <p>
              Because the applicant is a foreign national, a valid passport is the primary identity
              document. Depending on whether the applicant is currently in India or abroad, the
              identity and address documents may need to be apostilled (for Hague Convention
              countries) or attested by the Indian Embassy / Consulate. Our team will confirm the
              exact set of documents required for your country of residence and assist you through
              the verification process.
            </p>
            <p>
              Not sure which option you need? Choose “Get Free Consultation To Buy DSC” and our
              experts will help you select the right certificate and complete the paperwork.
            </p>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
