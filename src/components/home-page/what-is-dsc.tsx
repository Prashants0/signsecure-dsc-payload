import { Globe, Lock, Shield, Key, FileText } from 'lucide-react'
import MaxWidthWrapper from '../MaxWidthWrapper'

function WhatIsDSC() {
  return (
    <section
      id="what-is-dsc"
      className="w-full py-10 md:py-14 lg:py-18 bg-gradient-to-b from-white to-blue-50 scroll-mt-20"
    >
      <MaxWidthWrapper className="max-w-7xl">
        <div className="px-2 md:px-4">
          <div className="flex flex-col items-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
              <Key className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4 text-primary">
              What is a Digital Signature Certificate (DSC)?
            </h2>
            <div className="w-24 h-1 bg-blue-500 rounded mb-6"></div>
            <p className="text-gray-600 text-lg text-center max-w-3xl">
              Learn about the technology that&apos;s transforming digital security and
              authentication
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="text-gray-700 space-y-5">
              <p className="text-base md:text-lg leading-relaxed">
                A Digital Signature Certificate online is likened to a physical signature, but
                instead, it takes an electronic format, which helps them protect the integrity and
                authenticity of the signed digital files. In so doing, a digitally signed
                certificate acts as a safe device to verify the identity of the signatory and helps
                secure the document against any alterations using encryption technology.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Thus, in the event that a recipient receives an email with an attachment that has
                been digitally signed by a particular certificate, that certificate guarantees the
                recipient that the owner of the certificate is indeed the person who sent the
                document. Such certificates are found in a number of different industries, such as
                when submitting government papers, banking, and business submissions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white mr-3">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">Security</h3>
                </div>
                <p className="text-gray-600 text-sm mt-2 ml-13">
                  Ensures the confidentiality and integrity of digital communications.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white mr-3">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">Authentication</h3>
                </div>
                <p className="text-gray-600 text-sm mt-2 ml-13">
                  Verifies the identity of the signer, preventing impersonation and fraud.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white mr-3">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">Global Recognition</h3>
                </div>
                <p className="text-gray-600 text-sm mt-2 ml-13">
                  Widely accepted for secure online transactions worldwide.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white mr-3">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">Legal Compliance</h3>
                </div>
                <p className="text-gray-600 text-sm mt-2 ml-13">
                  Meets regulatory requirements for digital documents in government and business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default WhatIsDSC
