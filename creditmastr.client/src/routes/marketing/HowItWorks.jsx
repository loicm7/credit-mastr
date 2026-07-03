import { AdvancedImage } from "@cloudinary/react";
import { dpr } from "@cloudinary/url-gen/actions/delivery";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { cld } from "@/utils/cloudinaryInstance";
import CTA from "@/components/CTA.jsx";

const steps = [
    {
        number: "01",
        eyebrow: "Credits",
        title: "Credits",
        imageId: "pic_credit_mgnuu8",
        imageAlt: "Credit Mastr credits subscription preview",
        body: "Our subscription model is based on credits. Subscribe to Standard or Pro to receive credits and enjoy access to our extensive library.",
    },
    {
        number: "02",
        eyebrow: "Sounds",
        title: "Downloading Sounds",
        imageId: "pic_download_gr4pfe",
        imageAlt: "Credit Mastr sound download preview",
        body: "With your credit subscription, you can easily browse our collection and use your credits to download instrumental, stems, loops or sounds you love.",
    },
    {
        number: "03",
        eyebrow: "Royalty-Free",
        title: "Licensing and Royalty-Free Usage",
        imageId: "pic_licensing_blue_d7yafi",
        imageAlt: "Credit Mastr licensing and royalty-free usage preview",
        body: "All downloads come with a royalty-free license. This means you can use the instrumental or sound in your projects without worrying about additional fees or royalties.",
    },
];

function StepImage({ imageId, alt, reverse }) {
    const image = cld
        .image(imageId)
        .format("auto")
        .quality("auto")
        .delivery(dpr(1.0))
        .resize(fill().width(623).height(485));

    return (
        <div className={`relative mx-auto w-full max-w-[623px] ${reverse ? "lg:mr-auto" : "lg:ml-auto"}`}>
            <div className="absolute -left-5 top-8 h-28 w-28 border border-black/10 rounded-md bg-white shadow-[0_24px_60px_rgba(0,0,0,0.08)] md:-left-10 md:h-36 md:w-36" />
            
            <div className="relative overflow-hidden rounded-md w-[364px] h-[283px] md:w-[560px] md:h-[402px]">
                <AdvancedImage
                    cldImg={image}
                    alt={alt}
                    className="aspect-[39/28] h-full w-full object-contain"
                />
            </div>
        </div>
    );
}

function HowItWorks() {
    return (
        <main className="bg-white text-neutral-950 mt-30">
            <section className="mx-auto mb-20 grid max-w-7xl gap-16 px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
                <div>
                    <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                        How it works
                    </p>
                    <h1 className="mt-5 max-w-3xl font-poppins text-4xl font-bold leading-[0.98] text-neutral-950 md:text-6xl">
                        Create music in a different way.
                    </h1>
                </div>
                <p className="max-w-xl font-poppins text-base leading-8 text-neutral-700 md:text-lg">
                    Credit Mastr give you access to a huge catalog of instrumental and sounds allowing you to create music in a different way. With your subscription you will get:
                </p>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
                <div className="space-y-28 md:space-y-36">
                    {steps.map((step, index) => {
                        const reverse = index % 2 === 1;

                        return (
                            <article
                                key={step.number}
                                className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20"
                            >
                                <div className={reverse ? "lg:order-2" : undefined}>
                                    <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                                        {step.eyebrow}
                                    </p>
                                    <div className="mt-5 flex items-start gap-6">
                                        <span className="font-poppins text-sm font-semibold text-neutral-400">
                                            {step.number}
                                        </span>
                                        <div>
                                            <h2 className="font-poppins text-3xl font-bold leading-tight text-neutral-950 md:text-4xl">
                                                {step.title}
                                            </h2>
                                            <p className="mt-5 max-w-xl font-poppins text-base leading-8 text-neutral-700 md:text-lg">
                                                {step.body}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <StepImage imageId={step.imageId} alt={step.imageAlt} reverse={reverse} />
                            </article>
                        );
                    })}
                </div>
            </section>
            
            <CTA />
        </main>
    );
}

export default HowItWorks;