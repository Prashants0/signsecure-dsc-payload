import type { UseCaseContent } from './UseCaseLanding'

const CLASS_3_CTA = { href: '/class-3-digital-signature', label: 'Buy Class 3 DSC' }
const DGFT_CTA = { href: '/dgft-dsc', label: 'Buy DGFT DSC' }

// Common documentation across most Class 3 use cases. Tailored per page where needed.
const INDIVIDUAL_REQUIREMENTS = [
  'PAN card of the applicant',
  'Aadhaar card or other valid address proof',
  'Recent passport-size photograph',
  'Active email ID and mobile number for OTP and video verification',
]

const ORGANISATION_REQUIREMENTS = [
  'PAN and ID proof of the authorised signatory',
  'Authorisation letter on company letterhead',
  'Company / firm registration or incorporation proof',
  'Active email ID and mobile number of the authorised signatory',
]

const STANDARD_STEPS = [
  {
    title: 'Choose your DSC',
    description: 'Select the certificate type, validity and quantity that suits your requirement.',
  },
  {
    title: 'Submit your details',
    description: 'Fill in the applicant details and upload the required documents.',
  },
  {
    title: 'Complete verification',
    description: 'Finish the quick mobile/video-based verification as per CCA guidelines.',
  },
  {
    title: 'Receive your DSC',
    description: 'Get your DSC issued on a secure USB token, ready to use on the portal.',
  },
]

export const useCases = {
  'dsc-for-gst': {
    slug: 'dsc-for-gst',
    metadata: {
      title: 'DSC for GST Registration & Return Filing | SignSecure',
      description:
        'Get a Class 3 Digital Signature Certificate for GST registration and GST return filing. Companies and LLPs can sign on the GST portal securely with SignSecure.',
      keywords:
        'dsc for gst, gst dsc, digital signature for gst, dsc for gst registration, dsc for gst return filing',
    },
    badge: 'DSC for GST',
    title: 'DSC for GST Registration & Return Filing',
    subtitle:
      'Companies, LLPs and Foreign Companies must digitally sign GST applications and returns. Get a Class 3 DSC to file on the GST portal with full legal validity.',
    intro: [
      'Under the GST regime, companies and LLPs are required to authenticate their GST registration application and every GST return using a Class 3 Digital Signature Certificate. A DSC ensures that filings submitted on the GST portal are legally valid, tamper-proof and traceable to the authorised signatory.',
      'SignSecure provides Class 3 DSCs that are accepted on the GST portal for new registration, return filing (GSTR-1, GSTR-3B and more), amendments and responses to notices — issued quickly and at the best price.',
    ],
    benefits: [
      {
        title: 'Mandatory for Companies & LLPs',
        description:
          'A DSC is compulsory for companies and LLPs to register and file returns on the GST portal.',
      },
      {
        title: 'Legally Valid Filings',
        description:
          'Digitally signed GST submissions carry the same legal standing as physically signed documents.',
      },
      {
        title: 'Faster Processing',
        description:
          'Sign and submit applications, returns and replies instantly without printing or couriering documents.',
      },
      {
        title: 'Secure & Tamper-Proof',
        description:
          'Strong encryption ensures your GST data cannot be altered after it has been signed and submitted.',
      },
    ],
    requirements: ORGANISATION_REQUIREMENTS,
    steps: STANDARD_STEPS,
    faqs: [
      {
        id: 1,
        question: 'Which class of DSC is required for GST?',
        answer:
          'A Class 3 Digital Signature Certificate is required for filing on the GST portal. The authorised signatory of the company or LLP uses it to sign the registration application and returns.',
      },
      {
        id: 2,
        question: 'Is a DSC mandatory for GST return filing?',
        answer:
          'Yes. Companies and LLPs must file GST returns using a DSC. Other taxpayers may file using an EVC (OTP), but a DSC is recommended for secure, hassle-free filing.',
      },
      {
        id: 3,
        question: 'Can I use the same DSC for GST and other portals?',
        answer:
          'Yes. A Class 3 DSC can be used across multiple government portals such as GST, MCA, Income Tax, e-Tendering and more, as long as the signatory details match.',
      },
    ],
    purchase: CLASS_3_CTA,
  },

  'dsc-for-mca': {
    slug: 'dsc-for-mca',
    metadata: {
      title: 'DSC for MCA / ROC Filing & Company Registration | SignSecure',
      description:
        'Class 3 Digital Signature Certificate for MCA (MCA21) and ROC filings — company incorporation (SPICe+), annual returns and director KYC. Apply online with SignSecure.',
      keywords:
        'dsc for mca, mca dsc, dsc for company registration, dsc for roc filing, digital signature for directors',
    },
    badge: 'DSC for MCA',
    title: 'DSC for MCA & ROC Filings',
    subtitle:
      'Directors and authorised signatories need a Class 3 DSC to incorporate companies and file with the Ministry of Corporate Affairs (MCA21 / ROC).',
    intro: [
      'Every filing on the MCA21 portal — from company and LLP incorporation through SPICe+ to annual returns like AOC-4 and MGT-7, and Director KYC (DIR-3 KYC) — must be digitally signed using a Class 3 Digital Signature Certificate.',
      'SignSecure issues Class 3 DSCs for directors, designated partners, professionals (CA/CS/CMA) and authorised signatories so you can complete ROC compliance smoothly and on time.',
    ],
    benefits: [
      {
        title: 'Required for Incorporation',
        description:
          'A DSC is mandatory for directors and subscribers when incorporating a company or LLP via SPICe+.',
      },
      {
        title: 'Annual ROC Compliance',
        description:
          'Sign AOC-4, MGT-7, DIR-3 KYC and other MCA forms without delays or paperwork.',
      },
      {
        title: 'For Professionals Too',
        description:
          'Practising CAs, CSs and CMAs use a Class 3 DSC to certify and file MCA forms for their clients.',
      },
      {
        title: 'Legally Recognised',
        description:
          'Digitally signed MCA filings are recognised by the Ministry of Corporate Affairs and the law.',
      },
    ],
    requirements: ORGANISATION_REQUIREMENTS,
    steps: STANDARD_STEPS,
    faqs: [
      {
        id: 1,
        question: 'Which DSC is needed for MCA filing?',
        answer:
          'A Class 3 DSC is required for all filings on the MCA21 portal, including company incorporation, annual returns and Director KYC.',
      },
      {
        id: 2,
        question: 'Do directors need to register their DSC on MCA?',
        answer:
          'Yes. After obtaining the DSC, each director or signatory must register it as an associated DSC against their DIN/role on the MCA portal before signing forms.',
      },
      {
        id: 3,
        question: 'Is a DSC needed for DIR-3 KYC?',
        answer:
          'Yes. Directors must use their Class 3 DSC to complete the annual DIR-3 KYC filing on the MCA portal.',
      },
    ],
    purchase: CLASS_3_CTA,
  },

  'dsc-for-income-tax': {
    slug: 'dsc-for-income-tax',
    metadata: {
      title: 'DSC for Income Tax Return (ITR) e-Filing | SignSecure',
      description:
        'Get a Class 3 Digital Signature Certificate for Income Tax e-filing. Mandatory for companies, LLPs and audit cases (44AB). Apply online with SignSecure.',
      keywords:
        'dsc for income tax, dsc for itr filing, digital signature for income tax, income tax dsc, dsc for tax audit',
    },
    badge: 'DSC for Income Tax',
    title: 'DSC for Income Tax Return (ITR) e-Filing',
    subtitle:
      'Companies, LLPs and taxpayers under audit must e-verify their Income Tax Returns using a Class 3 DSC on the Income Tax portal.',
    intro: [
      'For companies, LLPs and taxpayers whose accounts require an audit (such as under Section 44AB), e-verifying the Income Tax Return with a Digital Signature Certificate is mandatory. A DSC also lets professionals and other taxpayers file securely without OTP-based verification.',
      'SignSecure provides Class 3 DSCs that are fully accepted on the Income Tax e-filing portal for ITR filing, tax audit reports, TDS returns and responses to notices.',
    ],
    benefits: [
      {
        title: 'Mandatory in Audit Cases',
        description:
          'Companies, LLPs and taxpayers liable to audit must file their ITR using a DSC.',
      },
      {
        title: 'Instant e-Verification',
        description:
          'Sign and submit your return instantly — no need to send a physical ITR-V to CPC.',
      },
      {
        title: 'For Tax Professionals',
        description:
          'Chartered Accountants use a DSC to upload and certify tax audit reports and client returns.',
      },
      {
        title: 'Secure Submissions',
        description:
          'Encryption protects your financial data and confirms the identity of the signatory.',
      },
    ],
    requirements: INDIVIDUAL_REQUIREMENTS,
    steps: STANDARD_STEPS,
    faqs: [
      {
        id: 1,
        question: 'Is a DSC mandatory for filing Income Tax Returns?',
        answer:
          'A DSC is mandatory for companies, LLPs and taxpayers whose accounts are subject to audit. Other individuals can file using a DSC or e-verify through other methods.',
      },
      {
        id: 2,
        question: 'Which class of DSC is used for Income Tax?',
        answer:
          'A Class 3 Digital Signature Certificate is used for e-filing on the Income Tax portal.',
      },
      {
        id: 3,
        question: 'Do I need to register my DSC on the Income Tax portal?',
        answer:
          'Yes. After purchasing the DSC, register it under your profile on the Income Tax e-filing portal before using it to sign returns.',
      },
    ],
    purchase: CLASS_3_CTA,
  },

  'dsc-for-etendering': {
    slug: 'dsc-for-etendering',
    metadata: {
      title: 'DSC for e-Tendering & e-Procurement | SignSecure',
      description:
        'Get a Class 3 Digital Signature Certificate for e-Tendering and e-Procurement portals. Sign and encrypt bids securely. Apply online with SignSecure.',
      keywords:
        'dsc for etendering, dsc for e-tender, dsc for e-procurement, class 3 dsc for tender, digital signature for tender',
    },
    badge: 'DSC for e-Tendering',
    title: 'DSC for e-Tendering & e-Procurement',
    subtitle:
      'Participate in government and private e-tenders with a Class 3 DSC to log in, encrypt bids and digitally sign your tender documents.',
    intro: [
      'A Class 3 Digital Signature Certificate is mandatory to participate in e-tendering and e-procurement on portals such as the Central Public Procurement Portal (CPPP), GeM and various state government portals. It is used to log in, encrypt bid documents and digitally sign submissions.',
      'SignSecure provides Class 3 Signing and Combo (Sign + Encrypt) certificates so bidders can securely submit competitive bids and protect sensitive commercial information.',
    ],
    benefits: [
      {
        title: 'Mandatory to Bid',
        description:
          'Most e-tender portals require a Class 3 DSC to register, log in and submit bids.',
      },
      {
        title: 'Encrypt Your Bids',
        description:
          'A Combo (Sign + Encrypt) DSC keeps your commercial bid confidential until the official opening.',
      },
      {
        title: 'Tamper-Proof Submissions',
        description:
          'Digital signatures guarantee that your tender documents have not been altered after submission.',
      },
      {
        title: 'Wide Acceptance',
        description:
          'Works across CPPP, GeM, state procurement portals and most private tendering systems.',
      },
    ],
    requirements: ORGANISATION_REQUIREMENTS,
    steps: STANDARD_STEPS,
    faqs: [
      {
        id: 1,
        question: 'Which DSC is required for e-tendering?',
        answer:
          'A Class 3 DSC is required for e-tendering. For encrypting bids, a Class 3 Combo (Signing + Encryption) certificate is recommended.',
      },
      {
        id: 2,
        question: 'Do I need a signing or a combo DSC for tenders?',
        answer:
          'For most tenders you need a Combo DSC — the signing key authenticates you and the encryption key keeps your bid confidential until the tender opening.',
      },
      {
        id: 3,
        question: 'Can one DSC be used for multiple tender portals?',
        answer:
          'Yes. A single Class 3 DSC can be registered and used across multiple e-tender and e-procurement portals.',
      },
    ],
    purchase: CLASS_3_CTA,
  },

  'dsc-for-epfo': {
    slug: 'dsc-for-epfo',
    metadata: {
      title: 'DSC for EPFO Employer Portal | SignSecure',
      description:
        'Get a Class 3 Digital Signature Certificate for the EPFO employer portal — register your DSC, approve KYC and sign filings. Apply online with SignSecure.',
      keywords:
        'dsc for epfo, epfo dsc, digital signature for epfo, dsc for pf, dsc for employer epfo',
    },
    badge: 'DSC for EPFO',
    title: 'DSC for the EPFO Employer Portal',
    subtitle:
      'Employers need a Class 3 DSC to register on the EPFO Unified Portal, approve member KYC and digitally sign filings and transfer claims.',
    intro: [
      'On the EPFO (Employees’ Provident Fund Organisation) Unified Portal, the authorised signatory of an establishment must register a Class 3 Digital Signature Certificate to approve employee KYC, attest details and digitally sign returns and transfer claims.',
      'SignSecure provides Class 3 DSCs accepted by the EPFO employer portal so HR and compliance teams can complete PF formalities securely and without delays.',
    ],
    benefits: [
      {
        title: 'Approve Member KYC',
        description:
          'Employers use a DSC to digitally approve employee KYC and account details on the EPFO portal.',
      },
      {
        title: 'Authorise Filings',
        description:
          'Sign returns, attest member details and authorise transfer claims securely.',
      },
      {
        title: 'One-Time Registration',
        description:
          'Register the authorised signatory’s DSC once to enable digital approvals on the portal.',
      },
      {
        title: 'Legally Valid',
        description:
          'Digitally signed EPFO approvals are legally recognised and tamper-proof.',
      },
    ],
    requirements: ORGANISATION_REQUIREMENTS,
    steps: STANDARD_STEPS,
    faqs: [
      {
        id: 1,
        question: 'Which DSC is needed for EPFO?',
        answer:
          'A Class 3 DSC of the establishment’s authorised signatory is required to register on and operate the EPFO employer portal.',
      },
      {
        id: 2,
        question: 'Who should hold the DSC for an establishment?',
        answer:
          'The authorised signatory of the establishment (such as the owner, director or partner) should hold and register the DSC on the EPFO portal.',
      },
      {
        id: 3,
        question: 'Is DSC registration on EPFO a one-time process?',
        answer:
          'Yes, until the DSC expires. Once registered and approved, the signatory can use it for digital approvals until renewal is required.',
      },
    ],
    purchase: CLASS_3_CTA,
  },

  'dsc-for-icegate': {
    slug: 'dsc-for-icegate',
    metadata: {
      title: 'DSC for ICEGATE Customs e-Filing | SignSecure',
      description:
        'Get a Class 3 Digital Signature Certificate for ICEGATE — file bills of entry, shipping bills and customs documents. Apply online with SignSecure.',
      keywords:
        'dsc for icegate, icegate dsc, digital signature for customs, dsc for import export, dsc for shipping bill',
    },
    badge: 'DSC for ICEGATE',
    title: 'DSC for ICEGATE Customs e-Filing',
    subtitle:
      'Importers, exporters and customs brokers need a Class 3 DSC to register on ICEGATE and digitally sign customs documents.',
    intro: [
      'ICEGATE (Indian Customs Electronic Gateway) is the portal for electronic filing of customs documents such as bills of entry and shipping bills. A Class 3 Digital Signature Certificate is required for IEC holders and Customs House Agents (CHAs) to register and sign these filings.',
      'SignSecure provides Class 3 DSCs accepted on ICEGATE so importers, exporters and customs brokers can clear consignments faster with secure, legally valid digital signatures.',
    ],
    benefits: [
      {
        title: 'File Customs Documents',
        description:
          'Sign bills of entry, shipping bills and other customs documents directly on ICEGATE.',
      },
      {
        title: 'For Importers & Exporters',
        description:
          'IEC holders and Customs House Agents register their DSC to transact on ICEGATE.',
      },
      {
        title: 'Faster Clearance',
        description:
          'Digital signing speeds up customs processing and reduces paperwork and errors.',
      },
      {
        title: 'Secure & Compliant',
        description:
          'Encryption ensures the authenticity and integrity of every customs submission.',
      },
    ],
    requirements: ORGANISATION_REQUIREMENTS,
    steps: STANDARD_STEPS,
    faqs: [
      {
        id: 1,
        question: 'Which DSC is required for ICEGATE?',
        answer:
          'A Class 3 DSC is required to register on ICEGATE and digitally sign customs documents such as bills of entry and shipping bills.',
      },
      {
        id: 2,
        question: 'Who needs a DSC on ICEGATE?',
        answer:
          'Importers and exporters (IEC holders) and Customs House Agents (CHAs) need a Class 3 DSC to file documents on ICEGATE.',
      },
      {
        id: 3,
        question: 'Can the same DSC be used for ICEGATE and DGFT?',
        answer:
          'A Class 3 DSC can be used across customs and trade portals. Many import-export businesses use one DSC for both ICEGATE and DGFT filings.',
      },
    ],
    purchase: CLASS_3_CTA,
  },

  'dsc-for-dgft': {
    slug: 'dsc-for-dgft',
    metadata: {
      title: 'DSC for DGFT — IEC & Foreign Trade Filings | SignSecure',
      description:
        'Get a DGFT Digital Signature Certificate for IEC applications, licensing and foreign trade document filing on the DGFT portal. Apply online with SignSecure.',
      keywords:
        'dsc for dgft, dgft dsc, digital signature for dgft, dsc for iec, dsc for import export code',
    },
    badge: 'DSC for DGFT',
    title: 'DSC for DGFT — IEC & Foreign Trade Filings',
    subtitle:
      'Exporters and importers use a DGFT Digital Signature Certificate to apply for an IEC, file licence applications and sign documents on the DGFT portal.',
    intro: [
      'The Directorate General of Foreign Trade (DGFT) requires businesses engaged in foreign trade to use a Digital Signature Certificate for applying for an Import Export Code (IEC), submitting licence applications and signing documents on the DGFT portal.',
      'SignSecure offers a dedicated DGFT DSC (a Class 3 Organisation certificate) tailored for foreign trade. You can read more and buy it on our DGFT DSC product page.',
    ],
    benefits: [
      {
        title: 'Apply for IEC',
        description:
          'A DSC is required to apply for and modify your Import Export Code on the DGFT portal.',
      },
      {
        title: 'File Licence Applications',
        description:
          'Digitally sign advance authorisation, EPCG and other licence applications.',
      },
      {
        title: 'Secure Trade Documents',
        description:
          'Encryption keeps sensitive foreign-trade documents confidential and tamper-proof.',
      },
      {
        title: 'Government Recognised',
        description:
          'DGFT-accepted digital signatures carry full legal validity for trade submissions.',
      },
    ],
    requirements: ORGANISATION_REQUIREMENTS,
    steps: STANDARD_STEPS,
    faqs: [
      {
        id: 1,
        question: 'Which DSC is required for DGFT?',
        answer:
          'A Class 3 Organisation DSC (commonly referred to as a DGFT DSC) is required for IEC applications and filings on the DGFT portal.',
      },
      {
        id: 2,
        question: 'Where can I buy a DGFT DSC?',
        answer:
          'You can buy a DGFT DSC from SignSecure. Visit our dedicated DGFT DSC page to see pricing and apply online.',
      },
      {
        id: 3,
        question: 'Is a DSC mandatory for IEC?',
        answer:
          'A DSC is required to digitally sign IEC applications and amendments on the DGFT portal, ensuring secure and legally valid submissions.',
      },
    ],
    purchase: DGFT_CTA,
  },

  'dsc-for-trademark': {
    slug: 'dsc-for-trademark',
    metadata: {
      title: 'DSC for Trademark e-Filing | SignSecure',
      description:
        'Get a Class 3 Digital Signature Certificate for trademark e-filing on the IP India portal. Used by applicants, agents and attorneys. Apply online with SignSecure.',
      keywords:
        'dsc for trademark, trademark dsc, digital signature for trademark, dsc for ip india, dsc for tm filing',
    },
    badge: 'DSC for Trademark',
    title: 'DSC for Trademark e-Filing',
    subtitle:
      'Applicants, trademark agents and attorneys use a Class 3 DSC to file trademark applications on the IP India portal.',
    intro: [
      'Trademark applications and related forms filed on the IP India (CGPDTM) portal are digitally signed using a Class 3 Digital Signature Certificate. It is used by applicants filing directly as well as by trademark agents and attorneys filing on behalf of clients.',
      'SignSecure provides Class 3 DSCs accepted for trademark e-filing so you can submit TM-A applications and responses securely and without paperwork.',
    ],
    benefits: [
      {
        title: 'Sign TM Applications',
        description:
          'Digitally sign TM-A and other trademark forms on the IP India portal.',
      },
      {
        title: 'For Agents & Attorneys',
        description:
          'Registered trademark agents and attorneys use a DSC to file on behalf of their clients.',
      },
      {
        title: 'Faster Filing',
        description:
          'E-sign and submit applications instantly, with a lower government fee than physical filing.',
      },
      {
        title: 'Legally Valid',
        description:
          'Digitally signed trademark filings are legally recognised and tamper-proof.',
      },
    ],
    requirements: INDIVIDUAL_REQUIREMENTS,
    steps: STANDARD_STEPS,
    faqs: [
      {
        id: 1,
        question: 'Which DSC is needed for trademark filing?',
        answer:
          'A Class 3 Digital Signature Certificate is used to sign trademark applications and forms on the IP India portal.',
      },
      {
        id: 2,
        question: 'Do trademark agents need their own DSC?',
        answer:
          'Yes. A registered trademark agent or attorney uses their own Class 3 DSC to file applications on behalf of clients.',
      },
      {
        id: 3,
        question: 'Does using a DSC reduce the trademark filing fee?',
        answer:
          'Online (e-filed) trademark applications generally attract a lower government fee than physical filing, and a DSC is used to sign these online submissions.',
      },
    ],
    purchase: CLASS_3_CTA,
  },

  'dsc-for-gem-registration': {
    slug: 'dsc-for-gem-registration',
    metadata: {
      title: 'DSC for GeM Registration & Bidding | SignSecure',
      description:
        'Get a Class 3 Digital Signature Certificate for GeM (Government e-Marketplace) seller registration and bidding. Apply online with SignSecure.',
      keywords:
        'dsc for gem, gem registration dsc, digital signature for gem, dsc for government e marketplace, dsc for gem bidding',
    },
    badge: 'DSC for GeM Registration',
    title: 'DSC for GeM Registration & Bidding',
    subtitle:
      'Sellers and service providers use a Class 3 DSC for vendor assessment and bidding on the Government e-Marketplace (GeM).',
    intro: [
      'The Government e-Marketplace (GeM) is the platform for public procurement in India. A Class 3 Digital Signature Certificate is used by sellers and service providers for secure authentication, vendor assessment and signing bids and contracts on GeM.',
      'SignSecure provides Class 3 DSCs accepted on GeM so businesses can register, participate in bids and accept government orders with confidence.',
    ],
    benefits: [
      {
        title: 'Seller Registration',
        description:
          'A DSC enables secure authentication and verification during GeM seller onboarding.',
      },
      {
        title: 'Bid with Confidence',
        description:
          'Digitally sign bids and contracts so your submissions are authentic and tamper-proof.',
      },
      {
        title: 'Win Government Orders',
        description:
          'Participate in government tenders and accept orders on the GeM marketplace.',
      },
      {
        title: 'Secure Transactions',
        description:
          'Encryption protects sensitive commercial information throughout the procurement process.',
      },
    ],
    requirements: ORGANISATION_REQUIREMENTS,
    steps: STANDARD_STEPS,
    faqs: [
      {
        id: 1,
        question: 'Which DSC is required for GeM?',
        answer:
          'A Class 3 Digital Signature Certificate is used for seller authentication, vendor assessment and bidding on the GeM portal.',
      },
      {
        id: 2,
        question: 'Is a DSC mandatory for GeM bidding?',
        answer:
          'A DSC is used to digitally sign bids and contracts on GeM, ensuring authenticity. It is strongly recommended for sellers participating in bids.',
      },
      {
        id: 3,
        question: 'Can one DSC be used for GeM and other tender portals?',
        answer:
          'Yes. A single Class 3 DSC can be used across GeM and other e-tendering and e-procurement portals.',
      },
    ],
    purchase: CLASS_3_CTA,
  },

  'dsc-for-irctc': {
    slug: 'dsc-for-irctc',
    metadata: {
      title: 'DSC for IRCTC Agent Registration | SignSecure',
      description:
        'Get a Class 3 Digital Signature Certificate for IRCTC authorised e-ticketing agent registration. Apply online with SignSecure.',
      keywords:
        'dsc for irctc, irctc dsc, digital signature for irctc, dsc for irctc agent, dsc for e-ticketing agent',
    },
    badge: 'DSC for IRCTC',
    title: 'DSC for IRCTC Agent Registration',
    subtitle:
      'Authorised IRCTC e-ticketing agents need a Class 3 DSC to register and book tickets through the IRCTC agent system.',
    intro: [
      'To become an authorised IRCTC e-ticketing agent (through an approved Principal Service Provider), a Class 3 Digital Signature Certificate is required for secure registration and authentication on the IRCTC agent platform.',
      'SignSecure provides Class 3 DSCs accepted for IRCTC agent registration so travel agents and service providers can get onboarded quickly and operate securely.',
    ],
    benefits: [
      {
        title: 'Agent Onboarding',
        description:
          'A Class 3 DSC is required to register as an authorised IRCTC e-ticketing agent.',
      },
      {
        title: 'Secure Authentication',
        description:
          'The DSC verifies the agent’s identity for secure access to the IRCTC agent system.',
      },
      {
        title: 'Legally Valid',
        description:
          'Digitally signed registration carries full legal validity and is tamper-proof.',
      },
      {
        title: 'Quick Issuance',
        description:
          'Get your DSC issued fast so you can complete agent registration without delay.',
      },
    ],
    requirements: INDIVIDUAL_REQUIREMENTS,
    steps: STANDARD_STEPS,
    faqs: [
      {
        id: 1,
        question: 'Which DSC is required for IRCTC agent registration?',
        answer:
          'A Class 3 Digital Signature Certificate is required to register as an authorised IRCTC e-ticketing agent.',
      },
      {
        id: 2,
        question: 'Who needs a DSC for IRCTC?',
        answer:
          'Travel agents and service providers who want to become authorised IRCTC e-ticketing agents need a Class 3 DSC for registration.',
      },
      {
        id: 3,
        question: 'How do I become an IRCTC agent?',
        answer:
          'You register through an IRCTC-approved Principal Service Provider and authenticate using a Class 3 DSC. SignSecure can issue the DSC you need to complete the process.',
      },
    ],
    purchase: CLASS_3_CTA,
  },
} satisfies Record<string, UseCaseContent>
