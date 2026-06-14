'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  CheckCircle,
  Phone,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Clock,
  Headphones,
  Award,
  Users,
  Star,
  Shield,
  BookOpen,
  MessageCircle,
  Target,
  Zap,
  Gift,
} from 'lucide-react'
import { toast } from '@/hooks/use-toast'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import FAQSection, { FAQ } from '@/components/faq'
import DSCRegistrationFlow from '@/components/DSCRegistrationFlow'

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

const faqs: Array<FAQ> = [
  {
    id: 1,
    question: 'Is there any registration fee to become DSC Reseller?',
    answer: 'No, registration for DSC reseller is completely free.',
  },
  {
    id: 2,
    question: 'Do I need any technical knowledge to start DSC business?',
    answer: 'Not at all, we will take care of all your technical issues once you partner with us.',
  },
  {
    id: 3,
    question: 'How much I can earn per DSC?',
    answer:
      'Your earnings depend upon your sell volume. As a reseller you get special commission percentage on each DSC issued and wholesale rates on DSC Token purchase.',
  },
  {
    id: 4,
    question: 'Can I use this platform to issue DSC for my own clients?',
    answer:
      'Yes, definitely. You can issue DSC for your own clients, whether individuals or organization.',
  },
  {
    id: 5,
    question: 'How much I have to invest to start DSC business?',
    answer:
      'If you have your own laptop/computer, Internet and a place where you can start working – you can easily start your own DSC business by purchasing DSC tokens of worth 10k to 25k',
  },
]

export default function DSCPartnerPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const formMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/create-lead', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization: formData.company,
        comments: formData.message,
        product_id: 'dsc-reseller-login',
        lead_source: 'website',
      })
      if (res.status === 200) {
        toast({
          title: 'Registration submitted!',
          description: "We've received your partner application and will get back to you soon.",
        })
        setFormSubmitted(true)
      }
    },
    onError: () => {
      toast({
        title: 'Submission failed',
        description: 'Please try again later.',
        variant: 'destructive',
      })
    },
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <MaxWidthWrapper>
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6">DSC Partner Login</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="mb-8 bg-white/10 rounded-lg p-8 text-center">
                  <div className="flex justify-center items-center space-x-6 mb-6">
                    <div className="bg-white/20 p-4 rounded-full">
                      <Shield className="h-12 w-12 text-white" />
                    </div>
                    <div className="bg-white/20 p-4 rounded-full">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <div className="bg-white/20 p-4 rounded-full">
                      <Award className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Digital Signature Partner Program
                  </h3>
                  <p className="text-primary-foreground/80">
                    Join India&apos;s Leading DSC Provider Network
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Why you should start DSC business?</h2>
                  <div className="space-y-4 text-primary-foreground/90">
                    <p>
                      Because world is going toward complete digitalization,{' '}
                      <strong>Digital Signature Certificates (DSC)</strong> have become an important
                      for secure online transactions, compliances and identity verifications.
                      DSC&apos;s are widely in use for online authentication and signing for ITR
                      Returns, GST Returns, Company registrations, Trademark registration, E Tender
                      Filing, Import Export document and many more.
                    </p>
                    <p>
                      Because Indian government is pushing all industries to go digital and
                      paperless as much as possible, the demand for{' '}
                      <strong>DSC&apos;s are growing rapidly</strong> from individuals to all size
                      of businesses. This rising demands creates a great opportunity to become an
                      authorized <strong>DSC Reseller.</strong> By partnering with{' '}
                      <strong>Signsecure,</strong> you can directly offer DSC to all your B to B and
                      B to C customers, earn attractive incomes without having any technical
                      knowledge.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <Card className="shadow-xl">
                <CardContent className="p-6">
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold mb-2 text-green-600">Thank You!</h3>
                      <p className="text-muted-foreground">
                        We&apos;ve received your partner application and will be in touch shortly.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        formMutation.mutate()
                      }}
                      className="space-y-4"
                    >
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder=""
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder=""
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder=""
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telephone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder=""
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder=""
                          rows={4}
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={formMutation.isPending}>
                        {formMutation.isPending ? 'Submitting...' : 'Regiter Now'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Section before benefits */}
      <section className="py-16">
        <MaxWidthWrapper>
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why You Should Become DSC Reseller?</h2>
              <p className="text-xl text-muted-foreground">
                Because India is going toward complete digital and paperless transformations,
                Becoming DSC reseller is not just a business move, it&apos;s a future investment.
                Here is why –
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow border-orange-200">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-12 w-12 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 mb-2">Rising Demand</p>
                    <p className="text-muted-foreground text-sm">
                      with going toward digitalization, demand for the DSC&apos;s are rapidly
                      increasing for online transactions, signing and identity verifications. From
                      Tax Consultants/CA/CS to importer/Exporter and Government contractors –
                      everyone need DSC
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-orange-200">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <DollarSign className="h-12 w-12 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 mb-2">
                      High Returns, Minimum Investment
                    </p>
                    <p className="text-muted-foreground text-sm">
                      You don&apos;t need big setup or capital to start DSC business. You can just
                      start with computer / laptop, internet &amp; sufficient stock of DSC Tokens.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-orange-200">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-12 w-12 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 mb-2">Fast Service Delivery</p>
                    <p className="text-muted-foreground text-sm">
                      By partnering as DSC Reseller with Signsecure, you can issue DSC for your
                      customers within 10-15 minutes.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-orange-200">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <Headphones className="h-12 w-12 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 mb-2">Free Technical Support</p>
                    <p className="text-muted-foreground text-sm">
                      The dashboard provided by Signsecure will be completely user friendly as it is
                      specially developed for Non-Technical users. With the basic computers skills,
                      you can effortlessly apply and issue DSC to your customers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Why Choose Signsecure */}
      <section className="py-16">
        <MaxWidthWrapper>
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose Signsecure?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Signsecure is established and trusted name in DSC industry for over 10+ years. Here
                is why Signsecure is an ideal platform to partner with<strong> –</strong>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-muted-foreground text-sm">
                      <strong>Proven Industry Experience – </strong>10+ years of experience in DSC
                      issuance and digital signing solutions. 1000+ active users all over India.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-muted-foreground text-sm">
                      <strong>Experienced Technical Support Team – </strong>You can completely rely
                      of Signsecure technical support team to resolve all kind of technical problems
                      after sale.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Star className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-muted-foreground text-sm">
                      <strong>Best Prices &amp; Commissions – </strong>Signsecure guarantees highest
                      commissions and best DSC Token prices to all active users.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-muted-foreground text-sm">
                      <strong>Data Privacy – </strong>No need to share your customer&apos;s data to
                      third party vendors. Now can issue DSC for your customers on your own.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Registration Steps */}
      <section className="py-16 bg-gray-50">
        <MaxWidthWrapper>
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Steps to Register as A DSC Reseller
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Submit Application Form</h3>
                      <p className="text-muted-foreground text-sm">
                        Visit dsc.signsecure.in and enroll &amp; submit application form to become
                        DSC Reseller.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Sales Team Verification</h3>
                      <p className="text-muted-foreground text-sm">
                        Our sales team will contact you for further verification and registration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Provide KYC & Organization Documents
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        You have to provide your personal kyc and Organization registration proof
                        for registration as mentioned below:
                      </p>
                      <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                        <li>• Photo</li>
                        <li>• PAN Card</li>
                        <li>• Address Proof (Adhar/PAN/Driving License/Electricity Bill etc.)</li>
                        <li>
                          • Organization Registration Proof (GST Certificate/Incorporation
                          Certificate/MSME etc.)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Receive Login Credentials
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        After registration you will receive an email to set login credentials for
                        your <strong>DSC Reseller Login.</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Get Training & Demo</h3>
                      <p className="text-muted-foreground text-sm">
                        Once you are ready with your DSC Partner Login, our team will contact you to
                        provide live demo and training to apply DSC Applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <DSCRegistrationFlow />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Benefits of Becoming DSC Reseller with Signsecure */}
      <section className="py-16">
        <MaxWidthWrapper>
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Benefits of Becoming DSC Reseller with Signsecure -{' '}
              </h2>
              <div className="text-muted-foreground space-y-4 max-w-4xl mx-auto text-left">
                <p>
                  At <strong>Signsecure, </strong>we are committed for your success in DSC business.
                  When you partner with us, you don&apos;t only get access of user friendly portal
                  to apply DSC, you also get a dedicated support system which helps you to grow
                  business faster and easier.
                </p>
                <p>
                  Here is what you get from <strong>Signsecure – </strong>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Free Training and Registration
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      At signsecure registration is completely free. Also we provide free training
                      &amp; support to apply &amp; download DSC.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Call and WhatsApp Support</h4>
                    <p className="text-muted-foreground text-sm">
                      We have a dedicated support team which will help you to resolve any technical
                      problem related to DSC.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Marketing Ideas</h4>
                    <p className="text-muted-foreground text-sm">
                      It&apos;s very hard to marketing for your new business when you don&apos;t
                      have idea where to market. <strong>Signsecure</strong> guide their resellers
                      in it and provide brief idea&apos;s about where to do marketing for DSC
                      services.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Instant Commission Payouts</h4>
                    <p className="text-muted-foreground text-sm">
                      While registering as a DSC Partner, you can add your bank details where you
                      want to redeem your commission payouts. You can easily withdraw your earned
                      commission to your bank anytime.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Gift className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Exclusive Offers to Active Resellers
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      <strong>Signsecure</strong> provides exclusive offers to their active
                      resellers according to sale&apos;s performances, to encourage resellers to
                      boost their businesses.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <MaxWidthWrapper>
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">FAQs – DSC Partner Login</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <FAQSection faqs={faqs} />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gray-50">
        <MaxWidthWrapper>
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Conclusion</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground">
              <p>
                Becoming a <strong>DSC Reseller partner with Signsecure</strong> is a smart and
                future oriented move. With the growing demand of Digital Signature Certificates
                across the industries, you can get opportunity to –
              </p>
              <p>
                a) Start a <strong>high earning business with low investment</strong>
              </p>
              <p>
                b) Issue DSC for your clients anytime and anywhere without sharing client&apos;s
                data to third party.
              </p>
              <p>c) No need to rely on others in the case of urgency</p>
              <p>d) Earn attractive commissions with free technical support</p>
              <p>
                e) Access a user friendly dashboard for issuing DSC with no technical expertise
                required.
              </p>
              <p>
                Now is the time to start your own{' '}
                <strong>
                  DSC business with Signsecure to go with India&apos;s digital revolution – Take the
                  first step toward your new business today.
                </strong>
              </p>
              <p>Click the below button to talk with our experts.</p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <MaxWidthWrapper>
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your DSC Business?</h2>
            <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto mb-8">
              Take the first step toward your new business today. Start your DSC reseller journey
              with SignSecure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-medium text-base md:text-lg"
                asChild
              >
                <a href="tel:+919324462329">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91 93244 62329
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white hover:bg-white/10 font-medium text-base md:text-lg"
                asChild
              >
                <a href="https://wa.me/917990740623">
                  WhatsApp Us: +91 79907 40623
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
