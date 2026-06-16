const sections = [
  {
    id: "definitions",
    title: "1. Definitions",
    body: [
      "Throughout these Terms, the following definitions apply:",
      "\"Creditmastr\", \"we\", \"us\", or \"our\" refers to Credit Mastr Inc., the company operating the platform.",
      "\"Platform\" means the Creditmastr website, mobile application, and any related services.",
      "\"User\" or \"you\" means any individual or entity who accesses or uses the Platform.",
      "\"Content\" means any instrumental, sample pack, drum kit, sound effect, AI-generated music, or other audio material available on the Platform.",
      "\"Credits\" means the digital units included with each subscription plan, redeemable to download or access Content.",
      "\"Subscription\" means a paid or free recurring membership plan granting access to Platform features.",
      "\"License\" means the limited right granted to you to use downloaded Content under the conditions described in Section 7.",
    ],
  },
  {
    id: "acceptance",
    title: "2. Acceptance of Terms",
    body: [
      "By registering for an account or using any portion of the Platform, you confirm that: (i) you are at least 15 years of age; (ii) you have the legal capacity to enter into a binding agreement; and (iii) you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are using the Platform on behalf of an organization, you represent that you have authority to bind that organization to these Terms.",
    ],
  },
  {
    id: "account-registration",
    title: "3. Account Registration",
    groups: [
      {
        title: "3.1 Creating an Account",
        body: "To access most features of the Platform, you must create an account by providing accurate, current, and complete information. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.",
      },
      {
        title: "3.2 Account Security",
        body: "You agree to notify us immediately at support@creditmastr.com if you suspect unauthorized access to your account. Creditmastr will not be liable for losses resulting from unauthorized use of your account where you have failed to safeguard your credentials.",
      },
      {
        title: "3.3 One Account per User",
        body: "Each user may maintain only one active account. Creating multiple accounts to circumvent plan limits, credit restrictions, or suspensions is strictly prohibited.",
      },
    ],
  },
  {
    id: "subscriptions",
    title: "4. Subscription Plans & Credits",
    groups: [
      {
        title: "4.1 Available Plans",
        body: "Creditmastr currently offers the following subscription: Free, Standard and Pro. Plan pricing, credit" +
            " allocations, and features are subject to change. We will provide at least 30 days' notice of material changes to existing subscribers.",
      },
      {
        title: "4.2 Credits",
        body: "Credits are the in-platform currency used to download or access Content. Credits are allocated on a monthly basis and, unless otherwise stated, do not roll over to the following billing cycle. Unused credits expire at the end of each billing period. Credits have no monetary value and cannot be redeemed for cash, transferred to other accounts, or exchanged outside the Platform.",
      },
      {
        title: "4.3 Free Plan Limitations",
        body: "The Free plan provides 50 credits per month for non-commercial use only. Free plan users may not use downloaded Content for commercial purposes, including but not limited to music releases distributed for profit, advertisements, or content monetized through streaming platforms. Upgrading to a paid plan unlocks commercial licensing rights.",
      },
      {
        title: "4.4 Pro Plan Benefits",
        body: "Pro plan subscribers also receive access to bonus content, including exclusive sample packs, drum kits, educational resources, and early access to new features as made available by Creditmastr from time to time.",
      },
    ],
  },
  {
    id: "billing",
    title: "5. Billing & Payment",
    groups: [
      {
        title: "5.1 Subscription Billing",
        body: "Paid subscriptions are billed on a recurring monthly basis starting on the date you subscribe. All prices are listed in US dollars (USD) unless otherwise specified. Applicable taxes may be added depending on your jurisdiction.",
      },
      {
        title: "5.2 Payment Methods",
        body: "We accept major credit cards, debit cards, and other payment methods as indicated on the Platform. By providing payment information, you authorize Creditmastr to charge the applicable subscription fees on a recurring basis.",
      },
      {
        title: "5.3 Failed Payments",
        body: "If a payment fails, we will attempt to process it up to three times over a 7-day period. If payment cannot be processed, your account may be downgraded to the Free plan and access to paid Content may be suspended until payment is resolved.",
      },
      {
        title: "5.4 Refund Policy",
        body: "Subscription fees are generally non-refundable. However, if you experience a technical error caused by Creditmastr that prevents access to the Platform for more than 48 consecutive hours, you may contact us at billing@creditmastr.com to request a pro-rated credit or refund at our sole discretion.",
      },
      {
        title: "5.5 Cancellation",
        body: "You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of the current billing period; you will retain access to paid features and your remaining credits until that date. No partial refunds are issued for unused time.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property",
    groups: [
      {
        title: "6.1 Platform Ownership",
        body: "The Creditmastr name, logo, platform design, software, features, and all non-user Content are owned by or licensed to Creditmastr and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works from the Platform itself without our express written consent.",
      },
      {
        title: "6.2 Content Ownership",
        body: "All instrumentals, sample packs, drum kits, sound effects, and other audio content available on the Platform are either: (i) original works created by Creditmastr or its contracted musicians and producers under Work-for-Hire agreements, or (ii) licensed from third-party rights holders. Creditmastr retains ownership or holds appropriate licenses for all Content on the Platform.",
      },
      {
        title: "6.3 AI-Generated Content",
        body: "Content generated through Creditmastr's AI music generation feature is produced using proprietary models. By generating AI Content through the Platform, you receive a license to use that output subject to the terms of your subscription plan. Creditmastr retains the right to use anonymized, aggregated generation data to improve its AI systems.",
      },
    ],
  },
  {
    id: "license",
    title: "7. License Terms & Permitted Uses",
    groups: [
      {
        title: "7.1 Grant of License",
        body: "Subject to your compliance with these Terms and the maintenance of an active subscription, Creditmastr grants you a limited, non-exclusive, non-transferable, royalty-free license to use downloaded Content for the purposes permitted under your plan.",
      },
      {
        title: "7.2 Permitted Uses by Plan",
        body: "Free Plan users may use Content for personal music projects not distributed for profit, non-monetized social media content, educational use, and private use. Standard and Pro plan subscribers may use Content for music releases on streaming platforms, monetized YouTube or social media content, advertising, promotional material, film, television, podcast, video game synchronization, and corporate or business presentations.",
      },
      {
        title: "7.3 Restrictions (All Plans)",
        body: "Regardless of your plan, you may not re-sell, sub-license, or redistribute Content as standalone audio files; claim authorship or ownership of the underlying instrumental or sample; use Content in a way that violates third-party rights; use Content to create NFTs, blockchain-based assets, or similar products without our prior written consent; or share your account credentials to allow others to download Content.",
      },
      {
        title: "7.4 Stems",
        body: "Access to individual stems, or separated track layers, for instrumentals may be available on select Pro plan content where indicated. Stems are subject to the same licensing terms as the full instrumental.",
      },
    ],
  },
  {
    id: "third-party",
    title: "8. DAW & Third-Party Integration",
    body: [
      "Creditmastr may offer integration with digital audio workstations (DAWs) such as FL Studio, Ableton Live, and Logic Pro. Such integrations are provided for your convenience. Creditmastr is not affiliated with, endorsed by, or responsible for third-party software. Use of third-party tools is governed by their respective terms of service.",
    ],
  },
  {
    id: "prohibited-conduct",
    title: "9. Prohibited Conduct",
    body: [
      "You agree not to use the Platform to violate any applicable law or regulation; infringe intellectual property rights; upload, transmit, or distribute harmful code; scrape or systematically extract Platform data without authorization; circumvent technical protection measures; engage in fraudulent activity; harass, abuse, or harm any other user or Creditmastr employee; or generate, store, or distribute content that is illegal, hateful, or pornographic.",
      "Violation of these restrictions may result in immediate suspension or termination of your account, at our sole discretion, without refund.",
    ],
  },
  {
    id: "privacy",
    title: "10. Privacy & Data Protection",
    body: [
      "Your use of the Platform is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Platform, you consent to the collection, use, and processing of your personal information as described in the Privacy Policy.",
      "Creditmastr collects information such as your name, email address, payment information, and usage data to operate the Platform, process transactions, and improve our services. We do not sell your personal data to third parties. We comply with applicable data protection regulations, including GDPR for users in the European Union and PIPEDA for users in Canada.",
    ],
  },
  {
    id: "termination",
    title: "11. Termination",
    groups: [
      {
        title: "11.1 Termination by You",
        body: "You may terminate your account at any time by contacting us at support@creditmastr.com or through your account settings. Upon termination, your license to use any downloaded Content for permitted commercial purposes under paid plans continues in perpetuity, subject to the restrictions in Section 7.",
      },
      {
        title: "11.2 Termination by Creditmastr",
        body: "We reserve the right to suspend or terminate your account, with or without notice, if: (i) you breach these Terms; (ii) we are required to do so by law; or (iii) we reasonably believe your use of the Platform poses a risk to the security or integrity of the Platform or other users.",
      },
      {
        title: "11.3 Effect of Termination",
        body: "Upon termination, your right to access the Platform and your unused Credits will be forfeited. Downloaded Content licenses that were validly granted prior to termination remain in effect unless the termination was due to a breach of these Terms, in which case all licenses are immediately revoked.",
      },
    ],
  },
  {
    id: "disclaimers",
    title: "12. Disclaimers",
    body: [
      "THE PLATFORM AND ALL CONTENT ARE PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS, WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. CREDITMASTR DOES NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS.",
      "Creditmastr does not guarantee that any specific Content will remain available on the Platform. We reserve the right to add, modify, or remove Content at any time.",
    ],
  },
  {
    id: "liability",
    title: "13. Limitation of Liability",
    body: [
      "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CREDITMASTR AND ITS AFFILIATES, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE PLATFORM OR ANY CONTENT.",
      "OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE GREATER OF: (A) THE AMOUNT YOU PAID TO CREDITMASTR IN THE THREE MONTHS PRECEDING THE CLAIM, OR (B) USD $50.00.",
    ],
  },
  {
    id: "indemnification",
    title: "14. Indemnification",
    body: [
      "You agree to indemnify, defend, and hold harmless Creditmastr and its affiliates, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with: (i) your use of the Platform or Content; (ii) your violation of these Terms; (iii) your violation of any third-party rights; or (iv) any content you submit to or through the Platform.",
    ],
  },
  {
    id: "governing-law",
    title: "15. Governing Law & Dispute Resolution",
    groups: [
      {
        title: "15.1 Governing Law",
        body: "These Terms shall be governed by and construed in accordance with the laws of the Province of Quebec, Canada, and the federal laws of Canada applicable therein, without regard to its conflict of law provisions.",
      },
      {
        title: "15.2 Dispute Resolution",
        body: "In the event of a dispute, we encourage you to contact us first at legal@creditmastr.com to resolve the matter informally. If the dispute cannot be resolved within 30 days, either party may bring the matter before the competent courts of Quebec, Canada, to which both parties hereby irrevocably submit.",
      },
      {
        title: "15.3 Class Action Waiver",
        body: "To the fullest extent permitted by law, you waive any right to bring claims against Creditmastr as a plaintiff or class member in any purported class or representative action.",
      },
    ],
  },
  {
    id: "changes",
    title: "16. Changes to These Terms",
    body: [
      "Creditmastr reserves the right to modify these Terms at any time. When we make material changes, we will notify you via email or a prominent notice on the Platform at least 14 days before the changes take effect. Your continued use of the Platform after the effective date constitutes your acceptance of the updated Terms. If you do not agree to the updated Terms, you must cancel your account before the effective date.",
    ],
  },
  {
    id: "miscellaneous",
    title: "17. Miscellaneous",
    groups: [
      {
        title: "17.1 Entire Agreement",
        body: "These Terms, together with our Privacy Policy and any additional terms applicable to specific features, constitute the entire agreement between you and Creditmastr regarding your use of the Platform.",
      },
      {
        title: "17.2 Severability",
        body: "If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will continue in full force and effect.",
      },
      {
        title: "17.3 No Waiver",
        body: "Creditmastr's failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision.",
      },
      {
        title: "17.4 Assignment",
        body: "You may not assign or transfer your rights or obligations under these Terms without our prior written consent. Creditmastr may freely assign these Terms in connection with a merger, acquisition, or sale of assets.",
      },
      {
        title: "17.5 Language",
        body: "These Terms are drafted in English. Where Creditmastr provides a translation for convenience, the English version shall prevail in the event of any conflict.",
      },
    ],
  },
  {
    id: "contact",
    title: "18. Contact Us",
    body: [
      "If you have any questions about these Terms, please contact us using the channels below.",
      "By using Creditmastr, you acknowledge that you have read, understood, and agreed to these Terms of Use.",
    ],
  },
];

const plans = [
  { name: "Free", price: "$0.00 / month", credits: "50 credits", use: "Non-commercial use" },
  { name: "Standard", price: "$14.99 / month", credits: "200 credits", use: "Commercial use" },
  { name: "Pro", price: "$39.99 / month", credits: "500 credits", use: "Bonus content included" },
];

const contacts = [
  { label: "General Support", value: "support@creditmastr.com", href: "mailto:support@creditmastr.com" },
  { label: "Billing", value: "billing@creditmastr.com", href: "mailto:billing@creditmastr.com" },
  { label: "Legal", value: "legal@creditmastr.com", href: "mailto:legal@creditmastr.com" },
  { label: "Website", value: "www.creditmastr.com", href: "https://www.creditmastr.com" },
];

function TermsOfUse() {
  return (
    <main className="bg-white text-neutral">
      <section className="border-b border-base-300 bg-base-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">Creditmastr legal</p>
            <h1 className="text-4xl font-bold text-neutral sm:text-5xl lg:text-6xl">Terms of Use</h1>
            <p className="mt-5 text-lg leading-8 text-neutral/70">
              Please read these Terms carefully before accessing or using Creditmastr. By creating an account,
              subscribing to any plan, or otherwise using our services, you agree to be legally bound by these Terms.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-neutral/70 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-base-300 bg-white p-4">
              <span className="block font-semibold text-neutral">Effective Date</span>
              <span>June 12, 2026</span>
            </div>
            <div className="rounded-lg border border-base-300 bg-white p-4">
              <span className="block font-semibold text-neutral">Version</span>
              <span>1.0</span>
            </div>
            <div className="rounded-lg border border-base-300 bg-white p-4 sm:col-span-2 lg:col-span-1">
              <span className="block font-semibold text-neutral">Last Updated</span>
              <span>June 15, 2026</span>
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
          <div className="mb-10 rounded-lg border border-base-300 bg-base-100 p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-neutral">Subscription Plans</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {plans.map((plan) => (
                <div className="rounded-lg border border-base-300 bg-white p-4" key={plan.name}>
                  <h3 className="font-semibold text-neutral">{plan.name}</h3>
                  <p className="mt-2 text-sm text-neutral/70">{plan.price}</p>
                  <p className="mt-3 text-sm font-medium text-neutral">{plan.credits}</p>
                  <p className="mt-1 text-sm text-neutral/70">{plan.use}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <article className="scroll-mt-10 border-b border-base-300 pb-10 last:border-b-0" id={section.id} key={section.id}>
                <h2 className="text-2xl font-bold text-neutral sm:text-3xl">{section.title}</h2>
                {section.body?.map((paragraph) => (
                  <p className="mt-4 text-base leading-8 text-neutral/75" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                {section.groups?.map((group) => (
                  <section className="mt-6" key={group.title}>
                    <h3 className="text-lg font-semibold text-neutral">{group.title}</h3>
                    <p className="mt-3 text-base leading-8 text-neutral/75">{group.body}</p>
                  </section>
                ))}
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-base-300 bg-base-200 p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-neutral">Contact Creditmastr</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {contacts.map((contact) => (
                <a
                  className="rounded-lg border border-base-300 bg-white p-4 text-sm transition hover:border-blue-600 "
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

export default TermsOfUse;
