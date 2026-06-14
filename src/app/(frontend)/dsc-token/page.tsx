import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Metadata } from 'next'
import Product from '@/components/dsc-token/product'
import TokenPriceChart from '@/components/dsc-token/price-chart'

export const metadata: Metadata = {
  title: 'Buy DSC Token | EPass Token | WatchData ProxKey',
  description:
    'Buy DSC With Token with highest security at Sign Secure to download digital signature. Contact us for more info.',
  keywords:
    'dsc token price, buy dsc token, dsc token purchase, buy dsc token online, dsc token, dsc with token, digital signature token, ProxKey token, wd ProxKey, EPass token, EPass2003, hyp2003, ',
}

export type TokenFormState = {
  productId: string
  quantity: number
  redirectUrl: string
  tokenType: string
}

export default function DSCPurchasePage() {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">DSC Token</h1>
        <Product />
        <TokenPriceChart />
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Product Description</CardTitle>
          </CardHeader>
          <CardContent className="text-sm md:text-base">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              Buy DSC Token With Sign Secure!
            </h2>
            <p className="mb-4">
              In today’s digital world, secure online transaction and authentication has never been
              more important. Whether you are filing taxes, signing official documents or conducting
              business transaction, digital signatures are a safe and legally recognized method for
              identifying yourself. A Token is one of the most widely used ways to utilize a digital
              signature. Signsecure is a trusted and convenient platform should you be looking to
              buy a Token. Because, Signsecure provide best Token Price all over India.
            </p>
            <p>
              This blog introduces you to what a DSC USB Token is, and why Signsecure is the place
              to go when you decide you need to secure that Token.
            </p>
            <h3 className="text-base md:text-lg font-semibold mb-2">
              1. What is Digital Signature Token?
            </h3>
            <p>
              oken is a portable device that effortlessly stores your digital signature certificate
              (DSC) and facilitates the digitally signing a document and verifying your identity
              online. It behaves like a virtual seal and is used to encrypt strongly and provide
              tamper-proof information which you are sending or signing.
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">How Does a DSC Token Work?</h4>
            <p>
              Also, Digital Signature Token has an embedded chip to hold your digital signature
              certificate securely. If you’re signing a document, you plug the token into your
              computer USB port, provide a PIN and your signature is applied to the document
              digitally. It’s like having a handwritten signature but is safer, and its usage is
              legally acceptable for online transactions in India.
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">Legal Recognition</h4>
            <p>
              The Digital Signature is legally recognized under the Information Technology Act 2000
              in India. Digital signatures are compulsory to use for various applications such as
              stamping tax forms, signing contracts and civil filings to maintain the integrity and
              authenticity of all online transactions.
            </p>
            <h3 className="text-base md:text-lg font-semibold mb-2">2. Benefits</h3>
            <p>
              By using a Token users might get various benefits like ensuring the security,
              authenticity and convenience in online interactions.
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">Security and Authentication</h4>
            <p>
              Increase in security is one of the main key benefits of Digital Signature Token .
              Because certificate is stored in physical Token, no unauthorized person can use Token
              unless he has physical Token with PIN.
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">Easy Access and Use</h4>
            <p>
              Digital Signature Token is very easy to use. Once you receive your token and install
              the required software, you can start using it in right away. The plug & play
              functionality ensures that you don’t need any special technical expert to use the
              Digital Signature Pendrive for signing documents.
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">Legality and Compliance</h4>
            <p>
              Digital signatures are legalized by the Govt and different regulatory bodies of India.
              They are legally valid like a physical signature and are widely accepted for ITR
              Filings, GST Filings, MCA Filings, TDS Filing, PF, Trademark Registration, GEM
              Registration, Startup INDIA Registration, IRCTC, IREPS, ICEGATE, signing contracts,
              submitting documents for government applications, and more.
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">Multi-Purpose Use</h4>
            <p>
              Apart from legal and government filings, digital signature dongle / token has large
              number of uses in banking, corporate communication and business transactions. This
              makes the digital signature dongle / token an important for both individuals and
              businesses which require secure online authentication.
            </p>
            <h3 className="text-base md:text-lg font-semibold mb-2">3. Why Choose Signsecure?</h3>
            <p>
              There are many platforms available online in DSC market where you can BUY DSC Token
              online, but Signsecure is the repudiated & reliable company which provides best
              customer support. Here are some reasons why you should choose Signsecure:
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">Trusted Platform</h4>
            <p>
              Signsecure is serving customers from more than 7 years now with a reputation for
              providing secure and reliable digital signature solution. It is a trusted provider for
              individuals and businesses looking to apply for DSC in India.
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">
              Wide Range of Digital Signature Certificates
            </h4>
            <p>
              The platform offers all kind of digital signature certificates which can fulfil on
              your needs. Signsecure provides Class 3 DSC (for ITR, GST, MCA, TDS, PF, Trademark,
              PDF Signing ETC), Class 3 ORG Combo DSC (For E Tenders, ICGATE, GEM Registration,
              IRCTC, IERPS, Startup India Registration etc) , DGFT DSC (For all kind of Import
              Export Documents submission & signing on DGFT. Visit our “Buy DSC” page to purchase a
              DSC with Token
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">
              Customer Support and Assistance
            </h4>
            <p>
              One of the key advantage of buying from Signsecure is the dedicated customer support
              team. If you face any issues with the installation, use of your Token, or any other
              technical Problems, you can contact support team to get it resolved in few minutes.
            </p>
            <h3 className="text-base md:text-lg font-semibold mb-2">
              4. How to Buy a DSC Token from Signsecure?
            </h3>
            <p>
              Purchase of Digital Signature USB Token for digital signature from Signsecure is a
              simpliest process. Here is a step by step guide:
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">Step 1: Visit the Website</h4>
            <p>
              Visit our official website “dsc.signsecure.in” to start purchasing DSC Pendrive. The
              site is user friendly and easy to navigate, ensuring you can find what you require
              hassle free.
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">
              Step 2: Select the Type & QTY of DSC Token
            </h4>
            <p>
              Signsecure provide verity of Token depending on availability from Importers. Some of
              them are mentioned below :-
            </p>
            <ol>
              <li>Epass Token 2003 / Hyp2003 / Epass USB Token /</li>
              <li>Proxkey Watchdata / Proxkey Token</li>
              <li>MToken</li>
            </ol>
            <p>Choose required Token & Qty and proceed further to book the order.</p>
            <h4 className="text-base md:text-lg font-semibold mb-2">Step 3: Complete the order</h4>
            <p>
              Once you confirm order with Token with QTY, fill the form with courier address &
              billing details. This includes your personal & business details. Double check all
              information for accuracy, because USB Token parcel will be couriered on the same
              address you will provide in form.
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">Step 4: Payment Process</h4>
            <p>
              The purchaser can make payment for the Digital Signature USB Token through various
              online methods, which includes debit/credit cards, UPI payment and net banking. The
              final price of digital signature dongle will be depending on the type of Token and the
              QTY.
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">
              Step 5: Delivery of USB Token
            </h4>
            <p>
              After confirming order and receiving payment , your Token will be dispatched to your
              address. Tokens might take 3-4 working days to be delivered out of Maharashtra.
            </p>
            <p>
              We ship your parcels with trusted courier services like{' '}
              <a href="https://www.bluedart.com/" target="_blank" rel="noopener noreferrer">
                Bluedart
              </a>
              ,
              <a href="https://www.dtdc.in/" target="_blank" rel="noopener noreferrer">
                DTDC
              </a>
              ,
              <a href="https://www.trackon.in/" target="_blank" rel="noopener noreferrer">
                Trackon
              </a>
              ,
              <a href="https://www.skyking.com/" target="_blank" rel="noopener noreferrer">
                SkyKing
              </a>
              ,
              <a href="https://www.borzodelivery.com/" target="_blank" rel="noopener noreferrer">
                WeFast
              </a>{' '}
              etc.
            </p>
            <h3 className="text-base md:text-lg font-semibold mb-2">
              5. Common Issues and Troubleshooting
            </h3>
            <p>
              Users might face some issues while using a Token like{' '}
              <a href="https://www.hypersecu.com/">Epass USB Token</a>,
              <a href="https://www.support.cryptoplanet.in/index.php">Proxkey Token</a>,
              <a href="https://www.getmtokens.com/">MToken</a>. Here are few common problems and
              their solutions:
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">USB Token Not Recognized</h4>
            <p>
              If your Digital Signature Token is not recognized by your computer, try the following:
            </p>
            <ol>
              <li>Check whether Token is plugged in properly or not.</li>
              <li>Try to use a different USB port/Computer.</li>
              <li>Try to update DSC Token driver.</li>
            </ol>
            <h4 className="text-base md:text-lg font-semibold mb-2">
              Certificate Installation Issues
            </h4>
            <p>
              Follow the instructions provided with the Token to install your digital signature
              certificate in correct manner. If there are any errors, reinstall the software or
              Contact Us for prompt support.
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">Contacting Customer Support</h4>
            <p>
              If you face any problems, Signsecure’s customer support team is available via email or
              phone. They will guide you to troubleshoot steps and make sure that you can use your
              Digital Signature USB Token without issues.
            </p>
            <h3 className="text-base md:text-lg font-semibold mb-2">6. Conclusion</h3>
            <p>
              A DSC USB Token is a important tool for anyone who needs to sign documents securely
              online, file taxes, or perform government related transactions. By purchasing it from
              a trusted platform like Signsecure, you can rest assured that your digital identity
              and sensitive information will be protected.
            </p>
            <p>
              Whether you are an individual professional or a business looking for trusted and
              secure digital signature solutions, Signsecure offers a simple and efficient process
              for getting your DSC with Token. Don’t wait, ensure your online transactions are
              secure by getting your DSC with Token today.
            </p>
            <h3 className="text-base md:text-lg font-semibold mb-2">7. Call to Action</h3>
            <h4 className="text-base md:text-lg font-semibold mb-2">
              Ready to Buy? Visit dsc.signsecure.in Today!
            </h4>
            <p>
              If you are ready to buy your DSC with Token, Go to dsc.signsecure.in and follow the
              easy steps to purchase DSC With Token today!
            </p>
            <h4 className="text-base md:text-lg font-semibold mb-2">
              Need More Help? Contact Our Support Team!
            </h4>
            <p>
              If you have any questions or need assistance with your order, feel free to contact the
              customer support team at dsc.signsecure.in. We are here to help you every step of the
              way.
            </p>
          </CardContent>
        </Card>
        {/* <FAQSection faqs={faqs} /> */}
      </div>
    </MaxWidthWrapper>
  )
}
