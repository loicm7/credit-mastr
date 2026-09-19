import { Check, X} from 'lucide-react';
import FAQs from "@/components/FAQs.jsx";
import CTA from "@/components/CTA.jsx";
import {Link} from "react-router";
const CheckIcon = () => (
  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 shrink-0">
    <Check className="w-3 h-3 text-white" aria-hidden="true"  strokeWidth={4}
    />
    
  </span>
);

const CrossIcon = () => (
  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-300 shrink-0">
    
    <X className="w-3 h-3 text-white" aria-hidden="true"  strokeWidth={4} />
  </span>
);

const FeatureItem = ({ included, label }) => (
  <li className="flex items-center gap-3">
    {included ? <CheckIcon /> : <CrossIcon />}
    <span
      className={
        included
          ? "text-sm text-base-content"
          : "text-sm text-base-content/40 line-through"
      }
    >
      {label}
    </span>
  </li>
);

const plans = [
  {
    id: "Creator",
    name: "Creator",
    credits: 100,
    featured: false,
    features: [
      { label: "100 credits", included: true },
      {
        label: "Download instrumentals, stems, samples, one shots",
        included: true,
      },
      { label: "AI-powered search and discovery", included: false },
      { label: "Advanced sound filters", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    credits: 200,
    featured: true,
    features: [
      { label: "200 credits", included: true },
      {
        label: "Download instrumentals, stems, samples, one shots",
        included: true,
      },
      { label: "AI-powered search and discovery", included: true },
      { label: "Advanced sound filters", included: true },
    ],
  },
  {
    id: "pro-plus",
    name: "Pro+",
    credits: 400,
    featured: false,
    features: [
      { label: "400 credits", included: true },
      {
        label: "Download instrumentals, stems, samples, one shots",
        included: true,
      },
      { label: "AI-powered search and discovery", included: true },
      { label: "Advanced sound filters", included: true },
    ],
  },
];

export function Pricing() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <header className="text-center mb-16 mt-15">
        <h1 className="font-poppins font-bold text-5xl md:text-6xl text-base-content tracking-tight">
          Pricing Plans
        </h1>
        <p className="mt-4 font-poppins text-base md:text-lg text-base-content/60 max-w-lg mx-auto">
          Choose the plan that fits your needs and start making amazing music.
        </p>
      </header>

      <section
        aria-label="Pricing plans"
        className="flex flex-col lg:flex-row items-stretch justify-center gap-6 max-w-5xl mx-auto mb-50"
      >
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={[
              "relative flex flex-col bg-gray-50/75 rounded-3xl p-8 w-full lg:w-80 ",
              plan.featured
                ? "ring-2 ring-primary shadow-xl lg:-translate-y-3"
                : "border border-gray-200 shadow-md ",
            ].join(" ")}
          >
            {plan.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-content text-xs font-semibold px-4 py-1 rounded-full tracking-wide">
                Recommended
              </span>
            )}

            <div className="mb-6">
              <h2 className="font-poppins font-semibold text-2xl text-base-content">
                {plan.name}
              </h2>
              <div className="mt-4 flex items-end gap-1">
                <span className="font-poppins font-bold text-5xl text-base-content leading-none">
                  {plan.credits}
                </span>
                <span className="text-sm text-base-content/50 mb-1 leading-snug">
                  credits
                  <br />
                  /mo
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-3.5 mb-8 flex-1">
              {plan.features.map((feature) => (
                <FeatureItem
                  key={feature.label}
                  included={feature.included}
                  label={feature.label}
                />
              ))}
            </ul>

            <div className="mt-auto">
              <Link to="/join-waitlist"
                className={[
                  "btn rounded-full w-full font-semibold",
                  plan.featured
                    ? "btn-primary"
                    : "btn-outline border-base-content/30 text-base-content hover:bg-base-content hover:text-base-100",
                ].join(" ")}
                aria-label={`Notify me with ${plan.name}`}
              >
                Notify me
              </Link>
            </div>
          </div>
        ))}
      </section>
      <FAQs />
      <CTA />
    </div>
  );
}

export default Pricing;