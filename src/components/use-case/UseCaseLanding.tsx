import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, Phone, ShieldCheck } from 'lucide-react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import FAQSection, { type FAQ } from '@/components/faq'

export interface UseCaseContent {
  slug: string
  metadata: {
    title: string
    description: string
    keywords: string
  }
  badge: string
  title: string
  subtitle: string
  intro: string[]
  benefits: { title: string; description: string }[]
  requirements: string[]
  steps: { title: string; description: string }[]
  faqs: FAQ[]
  purchase: { href: string; label: string }
}

export function UseCaseLanding({
  badge,
  title,
  subtitle,
  intro,
  benefits,
  requirements,
  steps,
  faqs,
  purchase,
}: UseCaseContent) {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-blue-700 py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="usecase-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#usecase-grid)" />
          </svg>
        </div>
        <MaxWidthWrapper className="max-w-7xl relative z-10">
          <div className="px-2 md:px-4 max-w-3xl text-white space-y-4 md:space-y-6">
            <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
              <span className="font-medium">{badge}</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href={purchase.href}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-medium text-base md:text-lg"
                >
                  {purchase.label}
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 font-medium text-base md:text-lg"
                >
                  Get Free Consultation To Buy DSC
                </Button>
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <MaxWidthWrapper className="max-w-7xl">
        <div className="px-2 md:px-4 py-12 md:py-16 space-y-12 md:space-y-16">
          {/* Intro */}
          <section className="max-w-3xl space-y-4 text-gray-700">
            {intro.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>

          {/* Benefits */}
          {benefits.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
                Why You Need a DSC for {badge.replace(/^DSC for /i, '')}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit) => (
                  <Card
                    key={benefit.title}
                    className="border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Requirements + Steps */}
          <section className="grid gap-6 lg:grid-cols-2">
            {requirements.length > 0 && (
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-primary/5 rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <FileText className="h-5 w-5 text-primary" />
                    Documents Required
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {requirements.map((requirement) => (
                      <li key={requirement} className="flex items-start gap-3 text-gray-700">
                        <ShieldCheck className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {steps.length > 0 && (
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-primary/5 rounded-t-lg">
                  <CardTitle className="text-xl">How to Apply</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ol className="space-y-4">
                    {steps.map((step, index) => (
                      <li key={step.title} className="flex items-start gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="font-semibold">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            )}
          </section>

          {/* FAQ */}
          {faqs.length > 0 && <FAQSection faqs={faqs} />}

          {/* Closing CTA */}
          <section className="rounded-2xl bg-gradient-to-r from-primary to-blue-700 p-8 md:p-12 text-white">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2 max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold">Ready to get your DSC?</h2>
                <p className="text-white/90">
                  Get the right Digital Signature Certificate at the best price with free online
                  support from our experts.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={purchase.href}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-medium"
                  >
                    {purchase.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 font-medium"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Talk to an Expert
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
