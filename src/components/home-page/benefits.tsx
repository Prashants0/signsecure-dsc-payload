import { ShieldCheck, Clock, DollarSign, Users, Lock } from 'lucide-react'
import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'

const benefits = [
  {
    title: 'Enhanced Security',
    description: `Digital signatures employ the public key infrastructure (PKI) technology, which guarantees the
highest security level possible. Your documents are also encrypted, rendering them impossible
for unauthorized individuals to alter or forge. Thus, with a DSC, you enhance nearly all your
digital dealings' security.`,
    icon: <Lock className="h-12 w-12 text-blue-600" />,
  },
  {
    title: 'Legal Validity',
    description: `All the documents that have been processed with a DSC are admissible in court as evidence
without any opposition under the Information Technology Act. In other words, e-signatures are
treated as equivalent to wet ink signatures, which protects your dealings fully by law.`,
    icon: <ShieldCheck className="h-12 w-12 text-blue-600" />,
  },
  {
    title: 'Convenience and Time-Efficiency',
    description: `It is undeniable that one of the biggest benefits of acquiring a digital signing certificate is its
simplicity and comfort. The era of hard copy documents being printed, bearing signatures, and
subsequently scanned is long gone. When one has a DSC, they only sign and forward
documents; hence, the entire process takes reduced time.`,
    icon: <Clock className="h-12 w-12 text-blue-600" />,
  },
  {
    title: 'Cost-Effective',
    description: `Moving to electronic for signing documents can help in reducing the costs associated with
printing, paper, couriers, and others. Moreover, faster transactions allow for dedicated time to be
channeled to other productive activities.`,
    icon: <DollarSign className="h-12 w-12 text-blue-600" />,
  },
  {
    title: 'Suitable for Personal and Professional Use',
    description: `Digital Signature Certificates are not only meant for corporate firms. An online DSC is preferred
by an individual wanting to securely append his signature to certain personal documents or a
firm needing to append a signature to a number of legal agreements.`,
    icon: <Users className="h-12 w-12 text-blue-600" />,
  },
]

function Benefits() {
  return (
    <section id="benefits" className="w-full py-12 bg-white">
      <MaxWidthWrapper>
        <div className="px-2">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-3 text-primary">
              Benefits of Digital Certificates
            </h2>
            <div className="w-16 h-1 bg-blue-500 rounded mb-4"></div>
            <p className="text-gray-600 text-lg text-center max-w-2xl mb-8">
              Digital Signature Certificates offer numerous advantages for individuals and
              businesses
            </p>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="border-b border-gray-100 pb-6 last:border-0">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="text-blue-600 mr-4">
                      {React.cloneElement(benefit.icon, { className: 'h-8 w-8' })}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-primary mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-5 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              View Our Plans
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Benefits
