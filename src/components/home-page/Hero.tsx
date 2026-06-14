import React from 'react'
import { Button } from '../ui/button'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Link from 'next/link'
import Image from 'next/image'

function Hero() {
  return (
    <section className="py-10 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-primary to-blue-700 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      <MaxWidthWrapper className="max-w-7xl">
        <div className="px-2 md:px-4">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-10">
            <div className="flex-1 space-y-4 md:space-y-5 lg:space-y-6 text-white">
              <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                <span className="font-medium">Trusted by 1000+ businesses</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                Secure Your Transactions with a Digital Signature Certificate (DSC)
              </h1>
              <p className="text-base sm:text-lg md:text-lg lg:text-xl opacity-90 max-w-3xl">
                As we are living in the digital age, security over transactions and communication
                takes priority in all endeavors embraced or undertaken. A Digital Signature
                Certificate (DSC) makes it possible for one to vouch for their identity, thus
                facilitating safe, secure, and enforceable transactions over the internet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
                <Link href="/#contact">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-medium text-base md:text-lg"
                  >
                    Get Free Consultation To Buy DSC
                  </Button>
                </Link>
                <Link href="/#what-is-dsc">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 font-medium text-base md:text-lg"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="relative w-full max-w-sm md:max-w-md">
                <Image
                  src="/images/dsc-hero-illustration.svg"
                  alt="Digital Signature Certificate"
                  width={500}
                  height={500}
                  className="drop-shadow-xl w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
