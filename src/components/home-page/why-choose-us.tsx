import { ShieldCheck, Zap, Users, Award, Lock, Clock } from 'lucide-react'
import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'

const benefits = [
  {
    title: 'Protect Your Digital Identity',
    description:
      'Take measures to ensure that all your online transactions or communication go through protection and encryption.',
    icon: <ShieldCheck className="h-10 w-10 text-white" />,
  },
  {
    title: 'Fast & Easy DSC Online Application',
    description:
      'The procedure for apply DSC online with us is designed to be fast and easy for you to obtain it without struggle.',
    icon: <Zap className="h-10 w-10 text-white" />,
  },
  {
    title: 'Available for Personal and Business Use',
    description:
      "Be it an individual, an organization, or a governmental body, every novel's solutions are beyond your expectations",
    icon: <Users className="h-10 w-10 text-white" />,
  },
  {
    title: ' Certified Excellence',
    description: 'All the certificates we provide are recognized and respected across the industry',
    icon: <Award className="h-10 w-10 text-white" />,
  },
  {
    title: 'Cutting-Edge Technology',
    description:
      'We protect your digital identity by employing the frequency of encryption and security measures available in the modern world.',
    icon: <Lock className="h-10 w-10 text-white" />,
  },
  {
    title: 'Free Online Support',
    description:
      'Our dedicated support team is available online to assist you with any queries or issues you might encounter, free of cost.',
    icon: <Clock className="h-10 w-10 text-white" />,
  },
]

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-r from-primary to-blue-700 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>

      <MaxWidthWrapper className="relative z-10">
        <div className="px-2 md:px-4">
          <div className="flex flex-col items-center mb-12">
            <div className="w-24 h-1 bg-white/60 rounded mb-6"></div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4 text-white">
              Why Choose Us
            </h2>
            <p className="text-white/80 text-lg md:text-xl text-center max-w-2xl">
              We provide secure, reliable, and efficient Digital Signature Certificate solutions for
              all your needs
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group flex flex-col p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-4 p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-white/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default WhyChooseUs
