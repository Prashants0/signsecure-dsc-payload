import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'
import Image from 'next/image'

import { CMSLink } from '@/components/Link'

import { SiYoutube } from '@icons-pack/react-simple-icons'
import { Linkedin } from 'lucide-react'

export async function Footer() {
  const footerData = (await getCachedGlobal('footer', 1)()) as Footer

  const navItems = footerData?.navItems || []

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 xl:mx-24 xl:px-10">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 lg:mb-0 lg:mr-8 flex flex-row md:flex-col align-middle items-center sm:justify-around gap-3">
            <Image
              src="/logo.webp"
              width={100}
              height={100}
              alt="Company Logo"
              className="h-auto w-auto mb-4"
            />
            <div className="flex space-x-10">
              <Link
                prefetch
                href="https://www.linkedin.com/company/signsecure-pvt-ltd/"
                className="text-gray-400 hover:text-theme-blue"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                prefetch
                href="https://www.youtube.com/@Signsecure0604"
                className="text-gray-400 hover:text-theme-blue"
              >
                <SiYoutube size={24} />
              </Link>
            </div>
          </div>

          {/* Nav Items - Left side with fixed spacing */}
          <div className="flex flex-wrap md:flex-nowrap md:space-x-12 lg:space-x-16 w-full md:w-auto md:order-1 md:mr-8">
            {navItems.map((items) => (
              <div key={items.subItemName} className="w-1/2 sm:w-auto mb-6 md:mb-0 flex-shrink-0">
                <h5 className="text-lg font-semibold mb-4 text-theme-blue">{items.subItemName}</h5>
                <ul className="space-y-2">
                  {items.subItems?.map((item, i) => (
                    <li key={i}>
                      <CMSLink
                        className="text-theme-blue whitespace-nowrap"
                        {...item.link}
                        appearance={'link'}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
