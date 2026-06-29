import { fill } from "@cloudinary/url-gen/actions/resize";
import { cld } from "../utils/cloudinaryInstance";

function CTA() {
    const backgroundImage = cld
        .image("pexels-codioful-7135058_ojkyww")
        .format("auto")
        .quality("auto")
        .resize(fill().width(1800).height(720))
        .toURL();

    return (
        <section className="col-start-1 col-end-17 px-4 sm:px-6 lg:px-10 mb-50">
            <div className="relative isolate mx-auto flex min-h-[420px] w-full max-w-[1680px] items-center justify-center overflow-hidden border border-solid border-[#2d2d2d0d] rounded-4xl  px-6 py-20 text-center shadow-2xl shadow-blue-950/10 sm:min-h-[480px] lg:min-h-[560px]">
                <img
                    src={backgroundImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 -z-20 h-full w-full object-cover"
                    loading="lazy"
                />
                <div className="absolute bg-white/10 shadow-2xl  backdrop-blur-2xl inset-0 -z-10 " />

                <div className="mx-auto flex max-w-4xl flex-col items-center">
                    <p className="mb-4 font-poppins text-sm font-semibold uppercase tracking-[0.22em] text-/70">
                        Join us today.
                    </p>
                    <h2 className="font-poppins text-xl font-bold leading-[1.05] text-black sm:text-4xl lg:text-6xl">
                        Ready to join the music creation revolution?
                    </h2>
                    <p className="mt-6 max-w-2xl font-poppins text-base leading-7 text-black/82 sm:text-lg lg:text-xl">
                        Unlock powerful sounds designed for your creative needs and make music faster
                    </p>
                    <button className="btn mt-9 rounded-full border-white bg-white px-7 font-poppins text-base font-semibold text-neutral-950 shadow-xl shadow-neutral-950/20 hover:border-white hover:bg-white/90">
                        Join the waitlist
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CTA;
