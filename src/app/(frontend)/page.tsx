// import PageTemplate, { generateMetadata } from './[slug]/page'

// export default PageTemplate

// export { generateMetadata }

import Hero from '@/components/home-page/Hero'
import WhyChooseUs from '@/components/home-page/why-choose-us'
import Benefits from '@/components/home-page/benefits'
import Contact from '@/components/home-page/contact'
import Pricing from '@/components/home-page/pricing'
import WhatIsDSC from '@/components/home-page/what-is-dsc'
// import TestimonialSection from '@/components/home-page/testimonals'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy DSC Online With SignSecure | Class 3 DSC | DGFT DSC',
  description:
    'Sign Secure deals in all kind of Digital signature certificate including Class 3 Digital Signature, DGFT DSC, Document Signer Certificate. Apply DSC Online with SignSecure',
  keywords:
    'buy dsc online, dsc apply online, digital signature certificate online, Class 3 DSC, DGFT DSC',
}

export default function DigitalCertificateLandingPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main>
          <Hero />
          <Pricing />
          <WhatIsDSC />
          <WhyChooseUs />
          <Benefits />
          {/* <TestimonialSection /> */}
          <Contact />
        </main>
      </div>
    </>
  )
}
