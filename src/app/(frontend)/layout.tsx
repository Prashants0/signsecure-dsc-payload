import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import React from 'react'

import { GoogleTagManager } from '@next/third-parties/google'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import { IBM_Plex_Sans } from 'next/font/google'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SiWhatsapp } from '@icons-pack/react-simple-icons'
import { Toaster } from '@/components/ui/toaster'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(ibmPlexSans.className)} lang="en" suppressHydrationWarning>
      <head>
        {/* <InitTheme /> */}
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        {/* <link href="/favicon.svg" rel="icon" type="image/svg+xml" /> */}
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          <Toaster />
          <Footer />
        </Providers>
        <Link
          href={'https://wa.me/917990740623'}
          className="fixed bottom-20 right-6  md:bottom-24 md:right-8  text-white"
        >
          <SiWhatsapp className="w-10 h-10 md:w-12 md:h-12  text-green-500" />
        </Link>
        <Link
          href={'tel:+919324462329'}
          className="fixed bottom-6 right-6 md:bottom-6 md:right-8 rounded-full p-1.5 bg-white"
        >
          <Phone className="w-7 h-7 md:w-9 md:h-9  text-blue-500" />
        </Link>
        <GoogleTagManager gtmId="GTM-MKBQ4GT6" />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
