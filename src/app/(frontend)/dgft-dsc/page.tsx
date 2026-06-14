import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import FAQSection, { FAQ } from '@/components/faq'
import { Metadata } from 'next'
import Product from '@/components/dgft-dsc/product'

export const metadata: Metadata = {
  title: 'Get DGFT Digital Signature Here | For Import Export Doc Signing',
  description:
    'Get DGFT Digital Signature at best price for all kind of import export document signing & submissions.',
  keywords:
    'dgft digital signature, dgft dsc, dsc dgft, dgft signature, DGFT Digital Signature Certificate',
}

const faqs: Array<FAQ> = [
  {
    id: 1,
    question: 'How do you get a DGFT e-signature?',
    answer:
      'In order to get a digital signature certificate, one is required to apply through a legitimate certifying authority such as Sign Secure. This procedure includes the following: making an online application, providing an ID with a photo and address, going through the scrutiny, and other processes that may be involved. However, after the said process has been successful, a digital signature will be granted for use in DGFT services.',
  },
  {
    id: 2,
    question: 'What is the difference between DGFT and DSC?',
    answer:
      'The abbreviation DGFT refers to the Directorate General of Foreign Trade, which is an apex governmental organization in charge of the regulation of foreign trade in India. A Digital Signature Certificate or DSC is an electronic document that authenticates an individual or an organization during online transactions. A Digital Signature Certificate, in particular, is the electronic signature that needs to be affixed to submissions made to DGFT.',
  },
  {
    id: 3,
    question: ': What is the validity of a DGFT Digital Signature?',
    answer:
      'A DSC is usually valid for a period of 1 to 2 years and, therefore, must be reissued after that time. This period of duration is very basic, and renewal maximizes the chances of remaining in accordance with the DGFT policies.',
  },
  {
    id: 4,
    question: 'Is the DGFT DSC mandatory for all businesses?',
    answer:
      'Indeed, it is compulsory for a business operating in foreign trade to apply for an Import Export Code (IEC), submit licensing applications, or upload files on the DGFT website to have a DGFT e-signature. It guarantees the safety and genuineness of all transactions with the DGFT.',
  },
]

const features = [
  {
    title: 'User-Friendly Process',
    description:
      'Our step-by-step application process is easy to navigate, with clear instructions on submitting your documents and obtaining your DSC.',
  },
  {
    title: 'Fast Approval',
    description:
      'We understand the importance of time in foreign trade, so we ensure quick processing and fast issuance of your digital signature certificate.',
  },
  {
    title: 'Affordable Plans',
    description:
      "We offer cost-effective pricing plans to meet your business needs, whether you're applying for a Class 2 or Class 3 DGFT DSC.",
  },
  {
    title: 'Expert Support',
    description:
      'Our team of experts is always available to assist you, providing guidance on choosing the right DSC and ensuring a hassle-free application process.',
  },
]

const benefits = [
  {
    title: 'Legal Recognition',
    description:
      'A DGFT-issued Digital Signature Certificate is valid and recognized by the Indian government, thereby allowing you to submit to the DGFT without any hindrances.',
  },
  {
    title: 'Secure Communication',
    description:
      'In layperson’s terms, a digital signature locks your documents, providing a tremendous security level and making sure that any sensitive information can be neither accessed nor tampered with while in transit.',
  },
  {
    title: 'Faster Processing',
    description:
      'With the use of digital signatures, there is no longer any requirement for hard copies, thus enhancing the rate of filling and approval of processes like applications for IEC registration, issuance of licenses, and many others.',
  },
  {
    title: 'Cost-Effective',
    description:
      'The implementation of Digital Signature saves the expenses incurred in the process of printing, stuffing in envelopes, stamping, and signing documents.',
  },
  {
    title: 'Reduced Errors',
    description:
      'The electronic format aids in limiting errors that often result from manual processes, thereby ensuring better submissions.',
  },
  {
    title: 'Compliance',
    description:
      'Many of the functions performed by DGFT require a digital signature certificate to make sure compliance with laws is not an issue.',
  },
]
export default function DSCPurchasePage() {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">DGFT DSC</h1>
        <Product />
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Product Description</CardTitle>
          </CardHeader>
          <CardContent className="text-sm md:text-base">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              Secure Your DGFT Transactions with a Digital Signature Certificate (DSC)
            </h2>
            <p className="mb-4">
              Globalization and international trade run as rapidly as they can. It goes without
              saying that protecting your electronic transactions is very important. The Directorate
              General of Foreign Trade (DGFT) is responsible for overseeing the legislation on
              foreign trade in India. One of the most important elements in assuring safe and
              productive engagement with the DGFT is a DGFT Digital Signature Certificate (DSC). It
              is required when applying for the Importer Exporter Code (IEC), filing documents
              online, signing trade licenses, etc. A DSC is a quick and encrypted way of signing an
              online communication that is legally verifiable.
            </p>
            <p>
              Today, we will help you understand what DGFT signatures are and what their advantages
              are, and we will explain why Sign Secure is the best option for obtaining them.
            </p>
            <h3 className="text-base md:text-lg font-semibold mb-2">
              What is a DGFT Digital Signature?
            </h3>
            <p>
              As an electronic signing tool created by the DGFT, a DGFT Digital Signature
              Certificate (DSC) protects the integrity and credibility of the files uploaded before
              the DGFT. It acts as a digital version of a hand signature and, therefore, is
              compulsory for several DGFT processes, such as applying for an Import Export Code
              (IEC), processing of applications for Licensing, and any other e-filing procedures.
            </p>
            <p>
              DGFT also provides a Digital Signature Certificate (DSC) for foreign trade member
              companies, allowing them to secure the signing and encoding of sensitive documents
              frequenting the corporations. It also provides assurance of the actual sender of the
              document and that the document submitted was not changed when in transit.
            </p>
            <h3 className="text-base md:text-lg font-semibold mb-2">Key Benefits of DGFT DSC</h3>
            <p>
              A DGFT Digital Signature Certificate offers multiple advantages to businesses engaged
              in trade:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              {benefits.map((benefit) => (
                <li key={benefit.title}>
                  {benefit.title}:{benefit.description}
                </li>
              ))}
            </ul>
            <h3 className="text-base md:text-lg font-semibold mb-2">Why Choose Sign Secure?</h3>
            <p>
              With the increase in online business transaction security threats in the world today,
              using the DGFT DSC becomes complex if you cannot find a good service provider. The
              problem, as with other companies such as Digital Signature, is solved at SignSecure as
              we offer end-to-end services from application to digital signature activation, which
              quite appeals to most enterprises.
            </p>
            <p>Here’s why you should choose Sign Secure:</p>
            <ul className="list-disc list-inside space-y-2">
              {features.map((feature) => (
                <li key={feature.title}>
                  {feature.title}:{feature.description}
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
