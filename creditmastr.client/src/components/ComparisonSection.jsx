import { Check, X } from "lucide-react";
import creditmastrLogo from "@/assets/creditMastrLogoBlack.svg";

const comparisonRows = [
    { feature: "Digital Downloads", creditmastr: true, competitors: true },
    { feature: "Instrumental and Sounds catalog in one place", creditmastr: true, competitors: false },
    { feature: "Keep credits after cancellation", creditmastr: true, competitors: false },
    { feature: "No hidden fees", creditmastr: true, competitors: false },
    { feature: "AI search and discovery", creditmastr: true, competitors: false },
    { feature: "Upload audio reference", creditmastr: true, competitors: false },
];

function FeatureStatus({ included, featured = false }) {
    const Icon = included ? Check : X;
    const label = included ? "Included" : "Not included";
    const statusClass = featured || included
        ? "bg-[#17202a] text-white"
        : "bg-[#e5e7eb] text-[#17202a]";

    return (
        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${statusClass}`}>
            <Icon aria-hidden="true" className="h-5 w-5 stroke-[2.75]" />
            <span className="sr-only">{label}</span>
        </span>
    );
}

export default function ComparisonSection() {
    return (
        <section className="col-start-2 col-span-14 py-8 md:col-start-4 md:col-span-10 md:py-14" aria-labelledby="comparison-heading">
            <div className="mx-auto max-w-5xl">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 id="comparison-heading" className="mt-4 font-poppins text-3xl font-bold leading-tight text-black md:text-5xl">
                        How Does Credit Mastr compare to the competition
                    </h2>
                    <p className="mt-5 font-poppins text-base leading-relaxed text-[#565656] md:text-lg">
                        We built the platform we wished existed when we were starting out.
                    </p>
                </div>

                <div className="mt-12 overflow-x-auto px-3 pb-4 pt-4 [-webkit-overflow-scrolling:touch]" aria-label="Creditmastr feature comparison table">
                    <table className="w-full min-w-[720px] border-separate border-spacing-0 font-poppins">
                        <caption className="sr-only">
                            Feature comparison between Creditmastr and competing music platforms
                        </caption>
                        <thead>
                            <tr>
                                <th scope="col" className="w-[48%] border border-t-0 border-l-0 border-r-0  bg-white px-6 py-7 text-left text-sm font-semibold uppercase tracking-[0.14em] text-[#565656] md:px-8 border-black/30">
                                    
                                </th>
                                <th scope="col" className="relative w-[26%] rounded-t-2xl border shadow-[0_-4px_4px_-4px_rgba(0,0,0,0.12),4px_0_4px_-4px_rgba(0,0,0,0.12),-4px_0_4px_-4px_rgba(0,0,0,0.12)]  border-[#BCD1FF] bg-[#ecf2ff] px-6 py-6 ">
                                    <img src={creditmastrLogo} alt="Creditmastr" className="mx-auto h-auto w-full max-w-[168px]" />
                                </th>
                                <th scope="col" className="w-[26%] border border-t-0 border-l-0 border-r-0  bg-white px-6 py-7 text-center text-base font-normal text-black md:text-md border-black/25">
                                    Competitors
                                </th>
                            </tr>
                        </thead>
                        <tbody >
                            {comparisonRows.map(({ feature, creditmastr, competitors }) => {
                                return (
                                    <tr key={feature}>
                                        <th scope="row" className=" border-b px-6 py-6 text-left text-base font-medium leading-snug text-[#17202a] md:px-8 md:py-7 md:text-lg  border-black/25">
                                            {feature}
                                        </th>
                                        <td className="border-x border-b border-[#BCD1FF] bg-[#ecf2ff] px-6 py-6 text-center md:py-7 shadow-[4px_0_4px_-4px_rgba(0,0,0,0.12),-4px_0_4px_-4px_rgba(0,0,0,0.12)]">
                                            <FeatureStatus included={creditmastr} featured />
                                        </td>
                                        <td className=" border-b   px-6 py-6 text-center md:py-7 border-black/25">
                                            <FeatureStatus included={competitors} />
                                        </td>
                                    </tr>
                                );
                            })}
                        <tr>
                            <th scope="row" className=" px-6 py-6 text-left text-base font-medium leading-snug text-[#17202a] md:px-8 md:py-7 md:text-lg  border-black/30">
                            </th>
                            <td className="border-x border-b border-[#BCD1FF] bg-[#ecf2ff] px-6 py-6 text-center md:py-7 shadow-[4px_0_4px_-4px_rgba(0,0,0,0.12),-4px_0_4px_-4px_rgba(0,0,0,0.12),0_4px_4px_-4px_rgba(0,0,0,0.12)] rounded-b-2xl">
                            </td>
                            <td className=" px-6 py-6 text-center md:py-7 border-black/25">
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
