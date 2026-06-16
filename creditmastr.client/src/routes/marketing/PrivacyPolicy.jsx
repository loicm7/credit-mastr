const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    body: [
      "Welcome to Credit Mastr (\"we,\" \"us,\" or \"our\"). Credit Mastr is a subscription-based platform that provides access to royalty-free instrumentals, sample packs, drum kits, sound effects, and related music services. We are committed to protecting your personal information and your right to privacy.",
      "This Privacy Policy explains what information we collect, how we use it, with whom we share it, and what rights you have regarding your personal data. It applies to all users who access or use our website, mobile application, and services (collectively, the \"Platform\").",
      "By creating an account or using our services, you agree to the terms of this Privacy Policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    body: ["We collect information in the following ways:"],
    groups: [
      {
        title: "Information you provide directly",
        items: [
          "Full name and username",
          "Email address",
          "Password, stored in encrypted form",
          "Billing information, including credit card details and billing address, processed securely through our third-party payment provider",
          "Country of residence",
          "Any communications you send us, including support requests and feedback",
        ],
      },
      {
        title: "Information collected automatically",
        items: [
          "Device information, including device type, operating system, and browser type",
          "IP address and approximate location",
          "Log data, including pages visited, features used, and date and time of access",
          "Credit usage activity, including downloads, content accessed, and playlist activity",
          "Cookies and similar tracking technologies, as described in Section 9",
        ],
      },
      {
        title: "Information from third parties",
        body: "If you choose to register or log in using a third-party service, such as Google or Apple, we may receive basic profile information from that service in accordance with their privacy policies.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "3. How We Use Your Information",
    body: ["We use your personal information to:"],
    list: [
      "Create and manage your account",
      "Process subscription payments and manage billing cycles",
      "Deliver and improve our services, including the credit system and content library",
      "Provide personalized content recommendations and intelligent beat suggestions",
      "Send transactional emails, including receipts, subscription confirmations, and download confirmations",
      "Send product updates, newsletters, and promotional communications, which you may opt out of at any time",
      "Respond to your support requests and inquiries",
      "Detect, prevent, and address fraud, abuse, or security incidents",
      "Comply with applicable legal obligations",
      "Analyze usage trends to improve the Platform",
    ],
    closing: [
      "We rely on the following legal bases to process your data, where applicable under GDPR or similar laws: performance of a contract, your consent, our legitimate interests, and compliance with legal obligations.",
    ],
  },
  {
    id: "sharing-information",
    title: "4. How We Share Your Information",
    body: ["We do not sell your personal information. We may share it with:"],
    groups: [
      {
        title: "Service providers",
        body: "Third-party companies that help us operate the Platform, including payment processors, cloud hosting providers, email delivery services, and analytics tools. These parties are bound by confidentiality agreements and may only use your data as instructed by us.",
      },
      {
        title: "Business partners",
        body: "With your consent, we may share relevant data with partners such as recording studios, beatmakers, or collaborators for the purpose of delivering specific services.",
      },
      {
        title: "Legal and regulatory authorities",
        body: "When required by law, court order, or governmental authority, or to protect the rights, property, or safety of Credit Mastr, our users, or others.",
      },
      {
        title: "Business transfers",
        body: "In the event of a merger, acquisition, or sale of all or part of our assets, your information may be transferred to the acquiring entity, subject to the same privacy protections described in this policy.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    body: [
      "We retain your personal information for as long as your account is active or as needed to provide you with services. If you delete your account, we will delete or anonymize your data within a reasonable period, except where we are required to retain it for legal or regulatory purposes, such as billing records or tax obligations.",
    ],
  },
  {
    id: "international-transfers",
    title: "6. International Data Transfers",
    body: [
      "Credit Mastr serves users in multiple countries including the United States, France, Canada, the United Kingdom, Belgium, Germany, Nigeria, Ivory Coast, South Africa, Kenya, and Japan. Your data may be transferred to and processed in countries other than your own. Where such transfers occur, we take appropriate steps to ensure your data is protected in accordance with applicable law, including the use of standard contractual clauses where required.",
    ],
  },
  {
    id: "privacy-rights",
    title: "7. Your Privacy Rights",
    body: ["Depending on where you live, you may have the following rights regarding your personal data:"],
    list: [
      "Access: Request a copy of the personal data we hold about you",
      "Correction: Request that we correct inaccurate or incomplete data",
      "Deletion: Request that we delete your personal data, also known as the right to be forgotten",
      "Portability: Request that we transfer your data to another service provider",
      "Objection / Restriction: Object to or request that we limit the processing of your data",
      "Withdrawal of consent: Withdraw consent at any time where processing is based on consent",
    ],
    closing: [
      "European Union / EEA users (GDPR): You have the rights listed above and may lodge a complaint with your local data protection authority.",
      "California residents (CCPA): You have the right to know what personal information we collect, to request deletion, and to opt out of any sale of your information. We do not sell personal information.",
      "To exercise any of these rights, contact us at privacy@creditmastr.com. We will respond to your request within 30 days.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "8. Children's Privacy",
    body: [
      "Our Platform is intended for users who are at least 15 years of age. We do not knowingly collect personal information from children under 15. If you believe a minor under this age has provided us with personal information without parental consent, please contact us immediately and we will take steps to delete such information.",
    ],
  },
  {
    id: "cookies",
    title: "9. Cookies and Tracking Technologies",
    body: ["We use cookies and similar technologies to operate and improve our Platform. These include:"],
    list: [
      "Essential cookies: Required for the Platform to function, including authentication and session management",
      "Analytical cookies: Help us understand how users interact with our Platform",
      "Preference cookies: Remember your settings and preferences",
      "Marketing cookies: Used to deliver relevant promotional content, only with your consent",
    ],
    closing: [
      "You can manage your cookie preferences through your browser settings. Note that disabling certain cookies may affect the functionality of the Platform.",
    ],
  },
  {
    id: "security",
    title: "10. Security",
    body: [
      "We implement industry-standard technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include data encryption, secure payment processing, and access controls. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "third-party-links",
    title: "11. Third-Party Links",
    body: [
      "Our Platform may contain links to third-party websites, such as Digital Audio Workstations or partner studios. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before providing any personal information.",
    ],
  },
  {
    id: "changes",
    title: "12. Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we make material changes, we will notify you by email or by posting a prominent notice on the Platform. The \"Last Updated\" date at the top of this page will always reflect the most recent revision. Your continued use of the Platform after any changes constitutes your acceptance of the updated policy.",
    ],
  },
  {
    id: "contact",
    title: "13. Contact Us",
    body: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact Credit Mastr using the channels below.",
    ],
  },
];

const contacts = [
  { label: "Email", value: "support@creditmastr.com", href: "mailto:support@creditmastr.com" },
  { label: "Website", value: "www.creditmastr.com", href: "https://www.creditmastr.com" },
];

function PrivacyPolicy() {
  return (
    <main className="bg-white text-neutral">
      <section className="border-b border-base-300 bg-base-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">Creditmastr privacy</p>
            <h1 className="text-4xl font-bold text-neutral sm:text-5xl lg:text-6xl">Privacy Policy</h1>
            <p className="mt-5 text-lg leading-8 text-neutral/70">
              This Privacy Policy explains what information Credit Mastr collects, how we use it, when we share it,
              and what choices and rights you have regarding your personal data.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-neutral/70 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-base-300 bg-white p-4">
              <span className="block font-semibold text-neutral">Effective Date</span>
              <span>June 12, 2026</span>
            </div>
            <div className="rounded-lg border border-base-300 bg-white p-4">
              <span className="block font-semibold text-neutral">Last Updated</span>
              <span>June 15, 2026</span>
            </div>
            <div className="rounded-lg border border-base-300 bg-white p-4 sm:col-span-2 lg:col-span-1">
              <span className="block font-semibold text-neutral">Version</span>
              <span>1.0</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-10 lg:py-16">
        <aside className="lg:sticky lg:top-8 lg:h-fit">
          <div className="rounded-lg border border-base-300 bg-base-100 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral/60">Contents</h2>
            <nav className="mt-4 grid gap-2">
              {sections.map((section) => (
                <a
                  className="rounded-md px-3 py-2 text-sm font-medium text-neutral/70 transition hover:bg-base-200 hover:text-primary"
                  href={`#${section.id}`}
                  key={section.id}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="min-w-0">
          

          <div className="space-y-10">
            {sections.map((section) => (
              <article className="scroll-mt-10 border-b border-base-300 pb-10 last:border-b-0" id={section.id} key={section.id}>
                <h2 className="text-2xl font-bold text-neutral sm:text-3xl">{section.title}</h2>
                {section.body?.map((paragraph) => (
                  <p className="mt-4 text-base leading-8 text-neutral/75" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 grid gap-3 text-base leading-7 text-neutral/75">
                    {section.list.map((item) => (
                      <li className="rounded-lg border border-base-300 bg-base-100 px-4 py-3" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.groups?.map((group) => (
                  <section className="mt-6" key={group.title}>
                    <h3 className="text-lg font-semibold text-neutral">{group.title}</h3>
                    {group.body && <p className="mt-3 text-base leading-8 text-neutral/75">{group.body}</p>}
                    {group.items && (
                      <ul className="mt-3 grid gap-2 text-base leading-7 text-neutral/75">
                        {group.items.map((item) => (
                          <li className="rounded-lg border border-base-300 bg-base-100 px-4 py-3" key={item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
                {section.closing?.map((paragraph) => (
                  <p className="mt-4 text-base leading-8 text-neutral/75" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-base-300 bg-base-200 p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-neutral">Contact Credit Mastr</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {contacts.map((contact) => (
                <a
                  className="rounded-lg border border-base-300 bg-white p-4 text-sm transition hover:border-primary hover:text-primary"
                  href={contact.href}
                  key={contact.label}
                >
                  <span className="block font-semibold text-neutral">{contact.label}</span>
                  <span className="mt-1 block text-neutral/70">{contact.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
