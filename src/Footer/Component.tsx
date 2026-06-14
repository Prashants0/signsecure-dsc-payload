import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'
import Image from 'next/image'

import { CMSLink } from '@/components/Link'

import { SiYoutube } from '@icons-pack/react-simple-icons'

// LinkedIn was removed from Simple Icons (and lucide-react v1), so it's inlined here.
const LinkedInIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    role="img"
    aria-label="LinkedIn"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
)

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
                <LinkedInIcon size={24} />
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
