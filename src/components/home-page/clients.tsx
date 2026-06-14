import React from 'react'
import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'

const brands = [
  {
    name: 'BSNL',
    logo: 'bsnl.webp',
  },
  {
    name: 'Indian-Railways',
    logo: 'indian-railway.webp',
  },
  {
    name: 'Central Railway',
    logo: 'cr.webp',
  },
  {
    name: 'JSW',
    logo: 'jsw.webp',
  },
  {
    name: 'MSRTC',
    logo: 'msrtc.webp',
  },
  {
    name: 'IDBI Trustee',
    logo: 'idbi.webp',
  },
]

function Clients() {
  return (
    <section id="clients" className="w-full py-10 md:py-12 lg:py-16 bg-gray-50 scroll-mt-20">
      <MaxWidthWrapper>
        <div className="px-2 md:px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
            {brands.map((brand) => (
              <Image
                src={`/brands/${brand.logo}`}
                alt={brand.name}
                width={180}
                height={140}
                className="mx-auto"
                key={brand.name}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Clients
