import SoundFeatured from "./SoundFeatured";
import WaitlistButton from "./ui/WaitlistButton";
import { sounds } from "../utils/FeaturedSoundsData";
//import { useState } from "react";


function FeaturedSounds() {

    //const [isPlayPause, setIsPlayPause] = useState(false);


    return (
        <div className="col-start-2 col-span-4 ">
            <section className="mx-auto ">
                <p className="font-poppins font-medium text-2xl text-center text-blue-600 ">Credit Mastr is a</p>
                <h2 className="font-poppins text-5xl md:text-6xl text-center font-bold capitalize mt-5" >Beat & Sample Library</h2>
                <p className="py-6 font-poppins text-base-content text-center md:text-[20px]">
                    A new way to access high-quality beats, exclusive instrumentals and sounds all in one place.
                </p>
                <div className="mt-20 mb-20 grid xl:grid-flow-col xl:grid-rows-3 justify-center gap-4">
                    {/* add sounds featured component */}
                    {sounds.map((sound) => (

                        <SoundFeatured key={sound.id} sound={sound} />
                    ))}
                    
                </div>
                <div>
                    <p className="font-poppins text-base-content text-center md:text-[18px]">
                        <span className="font-bold">Join the waitlist</span> to receive early access, free credit and behind-the-scenes updates.
                    </p>
                    <p className="mb-5 font-poppins text-base-content text-center md:text-[18px]">
                        Use your <span className="font-bold">free credit</span> to download our exclusive beats, sounds and samples at launch.
                    </p>

                    <div className="w-max items-center mx-auto ">
                        <WaitlistButton />
                    </div>
                    
                </div>
            </section>
        </div>

    );
}

export default FeaturedSounds;