import { AdvancedImage } from "@cloudinary/react";
import { dpr} from "@cloudinary/url-gen/actions/delivery";
import { fill, thumbnail} from "@cloudinary/url-gen/actions/resize";
import CldMissionAndVisionVideo from "@/components/ui/CldMissionAndVisionVideo";
import { cld } from "@/utils/cloudinaryInstance";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import CTA from "@/components/CTA.jsx";

const makeMusicImage = cld
    .image("sside-view-man-playing-guitar_jmwp1j")
    .format("auto")
    .quality("auto")
    .delivery(dpr(1.0))
    .resize(fill().width(960).height(620));

const whyWeBuildImage = cld
    .image("about_us_img_kyx2we")
    .format("auto")
    .quality("auto")
    .delivery(dpr(1.0))
    .resize(fill().width(960).height(620));

const accessibleByDesignImage = cld
    .image("Mini-ampli_rétro_et_guitare_floue_sur_bois_sonv4a")
    .format("auto")
    .quality("auto")
    .delivery(dpr(1.0))
    .resize(fill().width(960).height(620));

const founderImage = cld
    .image("Frame_2_cupx2e")
    .format("auto")
    .quality("auto")
    .delivery(dpr(1.0))
    .resize(thumbnail().width(500).height(500).gravity(focusOn(FocusOn.face())));

function About() {
    return (
        <main className=" px-4 py-10 sm:px-6 sm:py-12 lg:px-6 lg:py-16">
            <section
                aria-labelledby="about-mission-heading"
                className="isolate relative z-0 mx-auto min-h-[460px] max-w-[1720px] overflow-hidden rounded-[2rem] bg-[#152126]  sm:min-h-[500px] lg:min-h-[520px] lg:rounded-4xl"
            >
                <div className="absolute inset-0">
                    <CldMissionAndVisionVideo />
                </div>

                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.87)_34%,rgba(0,0,0,0.46)_56%,rgba(0,0,0,0.1)_77%,rgba(0,0,0,0.22)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.77)_48%,rgba(0,0,0,0.36)_100%)]" />

                <div className="relative z-10 flex min-h-[460px] items-center px-7 py-12 sm:min-h-[500px] sm:px-12 lg:min-h-[520px] lg:w-[58%] lg:px-20 xl:px-28">
                    <div className="max-w-2xl">
                        <h1
                            id="about-mission-heading"
                            className="font-poppins text-4xl font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl "
                        >
                            Every great track starts with the right sounds.
                        </h1>
                        <p className="mt-7 max-w-xl font-poppins text-base font-normal leading-7 text-white/72 sm:text-lg sm:leading-8 lg:mt-8 lg:text-xl lg:leading-9">
                            We exist to reimagine how music creators get the sounds they need. Our ambition is to equip the global community of music creators with the instrumentals, samples, or drum kits that truly matter to them.
                        </p>
                    </div>
                </div>
            </section>

            <section
                aria-labelledby="make-music-heading"
                className="mx-auto mt-10 grid max-w-[1720px] gap-5 sm:mt-14 lg:mt-16 lg:grid-cols-2 lg:gap-10"
            >
                <div className="min-h-[360px] overflow-hidden rounded-[2rem] bg-neutral-900 sm:min-h-[440px] lg:min-h-[560px] lg:rounded-4xl">
                    <AdvancedImage
                        cldImg={makeMusicImage}
                        alt="Black electric guitar beside a speaker on a wooden table"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex min-h-[360px] items-center rounded-[2rem] bg-[#0E3995] px-7 py-14 sm:min-h-[440px] sm:px-12 sm:py-16 lg:min-h-[560px] lg:rounded-4xl lg:px-16 xl:px-24">
                    <div className="max-w-xl">
                        <h2
                            id="make-music-heading"
                            className="font-poppins text-4xl font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl xl:text-6xl"
                        >
                            Make music on your own terms
                        </h2>
                        <p className="mt-7 font-poppins text-base leading-7 text-white/78 sm:text-lg sm:leading-8 lg:mt-9 lg:text-xl lg:leading-9">
                            We believe there’s a more empowering way to make music. CreditMastr is a subscription library of instrumentals, sample packs, drum kits and sound effects for music creators.
                        </p>
                    </div>
                </div>
            </section>

            <section
                aria-labelledby="make-music-heading"
                className="mx-auto mt-10 grid max-w-[1720px] gap-5 sm:mt-14 lg:mt-16 lg:grid-cols-2 lg:gap-10"
            >
               

                <div className="flex min-h-[360px] items-center rounded-[2rem] bg-[#E8EEFD] px-7 py-14 sm:min-h-[440px] sm:px-12 sm:py-16 lg:min-h-[560px] lg:rounded-4xl lg:px-16 xl:px-24">
                    <div className="max-w-xl">
                        <h2
                            id="make-music-heading"
                            className="font-poppins text-4xl font-bold leading-[0.98] tracking-[-0.05em] text-[#172d69] sm:text-5xl lg:text-6xl xl:text-6xl"
                        >
                            Why we built CreditMastr
                        </h2>
                        <p className="mt-7 font-poppins text-base leading-7 text-[#0f2657]/78 sm:text-lg sm:leading-8 lg:mt-9 lg:text-xl lg:leading-9">
                            We started CreditMastr because we realize every music producer prices differently, and credits for downloading sounds in some music creation platform are tied to a subscription instead of to the person.

                        </p>
                    </div>
                </div>

                <div className="min-h-[360px] overflow-hidden rounded-[2rem] bg-neutral-900 sm:min-h-[440px] lg:min-h-[560px] lg:rounded-4xl">
                    <AdvancedImage
                        cldImg={whyWeBuildImage}
                        alt="Black electric guitar beside a speaker on a wooden table"
                        className="h-full w-full object-cover"
                    />
                </div>
            </section>

            <section
                aria-labelledby="make-music-heading"
                className="mx-auto mt-10 grid max-w-[1720px] gap-5 sm:mt-14 lg:mt-16 lg:grid-cols-2 lg:gap-10"
            >
                <div className="min-h-[360px] overflow-hidden rounded-[2rem] bg-neutral-900 sm:min-h-[440px] lg:min-h-[560px] lg:rounded-4xl">
                    <AdvancedImage
                        cldImg={accessibleByDesignImage}
                        alt="Black electric guitar beside a speaker on a wooden table"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex min-h-[360px] items-center rounded-[2rem] bg-[#0E3995] px-7 py-14 sm:min-h-[440px] sm:px-12 sm:py-16 lg:min-h-[560px] lg:rounded-4xl lg:px-16 xl:px-24">
                    <div className="max-w-xl">
                        <h2
                            id="make-music-heading"
                            className="font-poppins text-4xl font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl xl:text-6xl"
                        >
                            Accessible by design
                        </h2>
                        <p className="mt-7 font-poppins text-base leading-7 text-white/78 sm:text-lg sm:leading-8 lg:mt-9 lg:text-xl lg:leading-9">
                            We are aware that budget constraints can make it harder for many creators to bring their musical projects to life. That is why we built the platform we wanted to use and we are committed to offering products and services at accessible pricing.
                        </p>
                    </div>
                </div>
            </section>

            <section
                aria-labelledby="make-music-heading"
                className="mx-auto mt-10 mb-30 grid max-w-[1720px] gap-5 sm:mt-14 lg:mt-16 lg:grid-cols-2 lg:gap-10"
            >


                <div className="flex min-h-[360px] items-center rounded-[2rem]  px-7 py-14 sm:min-h-[440px] sm:px-12 sm:py-16 lg:min-h-[560px] lg:rounded-4xl lg:px-16 xl:px-24">
                    <div className="max-w-xl">
                        <h2
                            id="make-music-heading"
                            className="font-poppins text-4xl font-bold leading-[0.98] tracking-[-0.05em] text-[#172d69] sm:text-5xl lg:text-6xl xl:text-6xl"
                        >
                            Meet the founder
                        </h2>
                        <p className="mt-7 font-poppins text-base leading-7 text-[#0f2657]/78 sm:text-lg sm:leading-8 lg:mt-9 lg:text-xl lg:leading-9">
                            CreditMastr was founded in 2025 by Loïck Mboutou, who has more than a decade of experience in music production. He is working to give music creators a simple place to find instrumentals and sounds they can use with confidence.

                        </p>
                    </div>
                </div>

               
                    <AdvancedImage
                        cldImg={founderImage}
                        alt="Black electric guitar beside a speaker on a wooden table"
                        className=" rounded-4xl object-cover mx-auto grayscale-95"
                        
                    />
                
            </section>
            <CTA/>
        </main>
    );
}

export default About;
