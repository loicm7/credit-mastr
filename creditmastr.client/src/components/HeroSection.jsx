import WaitlistButton from "./ui/WaitlistButton";
import CldHeroSectionImage from "./ui/CldHeroSectionImage";
function HeroSection({ heroSectionImage }) {
    return (
        <div className="col-start-1 col-end-17 ">
            <section className="hero  min-h-screen w-full top-0">
                <div className="relative z-[-3] h-full w-full bg-white">
                    <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
                    </div>
                </div>


                <div className="hero-content flex flex-col lg:flex-row-reverse lg:gap-x-20 ">

                    <div className="lg:w-3/5  ">
                        {/* <img
                            src={heroSectionImage}
                            className="md:max-w-xl aspect-square object-cover lg:w-[600px] lg:h-[600px]"
                        /> */}
                        <CldHeroSectionImage imageId={heroSectionImage} className="md:max-w-xl aspect-square object-cover lg:w-[600px] lg:h-[600px]" loading="lazy"/>

                    </div>



                    <div className="lg:w-2/4 ">
                        <h1 className="font-bold text-6xl sm:text-[30px] md:text-[70px] leading-[1.05] lg:w-150 font-poppins text-base-content text-left sm:text-center lg:text-left"> A library of original <span className="text-blue-600">beats</span> and <span className="text-blue-600">sounds</span></h1>
                        <p className="py-6 font-poppins text-base-content text-left sm:text-center lg:text-left  md:text-[20px]">
                            Explore a growing catalog of modern, royalty-free industry-ready instrumentals and sounds, made by talented music producers, musicians and sound engineers.
                        </p>
                        <WaitlistButton />

                        {/*another way to center an element*/}
                        {/* <div className="w-max items-center mx-auto">
                                    <button className="btn btn-primary ">Join the waitlist</button>
                                </div>*/}

                    </div>
                </div>
            </section>
        </div>
    );
}

export default HeroSection;