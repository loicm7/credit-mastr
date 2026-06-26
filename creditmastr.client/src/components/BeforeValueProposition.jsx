
import CldHeroSectionImage from "./ui/CldHeroSectionImage";
import CldBeforeValuePropositionImg from "@/components/ui/CldBeforeValuePropositionImg.jsx";
function BeforeValueProposition() {
    return (
        <div className="col-start-2 col-span-14 md:col-start-4 md:col-span-10 mb-15">
            <section className="relative overflow-hidden rounded-2xl shadow-md border border-solid border-[#2d2d2d0d]  mb-15">

                <div className="relative p-5 md:p-8 xl:pr-3">
                    <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12">
                        <div className=" bg-[#dbeafe] p-5 md:p-10 rounded-lg md:rounded-2xl">
                            <h2 className="font-poppins text-2xl md:text-5xl  font-bold text-[#565656] leading-tight">
                                Create professional music{" "}
                                <span className=" text-[#2563eb]">faster</span>
                            </h2>
                            <p className="font-poppins text-[14px] md:text-[16px]  text-[#565656] mt-4 leading-relaxed">
                                with unlimited access to premium, royalty-free instrumentals and sounds—all under one subscription.
                            </p>
                        </div>
                        <div className=" lg:right-0 md:translate-x-1/6 md:translate-y-1/8">
                            <CldBeforeValuePropositionImg
                                imageId="cm_desktop_coxq9o"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden rounded-2xl   mb-15">

                <div className="relative p-5 xl:p-8 xl:pr-3">
                    <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12">
                        <div className=" flex-none md:flex-none lg:flex-1 p-5 md:p-10  xl:p-20 bg-base-200/30 border border-solid border-[#2d2d2d0d] rounded-2xl">
                            <h2 className="font-poppins text-2xl md:text-5xl  font-bold text-[#2563eb] leading-tight">
                                Release more music
                            </h2>
                            <p className="font-poppins text-[14px] md:text-[16px]  text-[#565656] mt-4 leading-relaxed">
                                Grow your audience with studio-quality sounds ready for commercial use.
                                Stop buying beats one at a time. Get instant access to a growing library of professional instrumentals, samples, and loops.
                                
                            </p>
                        </div>
                        <div className=" flex-none md:flex-none lg:flex-1 ">
                            <CldBeforeValuePropositionImg
                                imageId="image_vp_kecjke"
                                className="w-full h-auto rounded-xl max-w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BeforeValueProposition;