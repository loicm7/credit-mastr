import SoundFeatured from "./SoundFeatured";
import WaitlistButton from "./ui/WaitlistButton";
import { sounds } from "../utils/FeaturedSoundsData";
//import { useState } from "react";
//import { usePlayPause } from "../hooks/usePlayPause";
import { useAudioPlayer } from "../hooks/useAudioPlayer";


/**
 * a component that display a section of audio cards
 * 
 * @returns {JSX.Element} react element section containing a list of audio cards
 */
function FeaturedSounds() {

    const { activeAudioCard, isPlaying, handlePlayPause, handleOnFinish } = useAudioPlayer();


    //const { activeAudioCard, isPlaying, handlePlayPause } = usePlayPause();

    /*const [activeAudioCard, setActiveAudioCard] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = (soundId) => {
        if (activeAudioCard === soundId) {
            setIsPlaying(isPlaying => !isPlaying);

        }
        else {
            setActiveAudioCard(soundId);
            setIsPlaying(true);
        }
    };

    const handleOnFinish = () => {
        setIsPlaying(false);
    };
    */

    return (

        <section className="col-start-2 col-span-14 ">
            <p className="font-poppins font-medium text-2xl text-center text-blue-600 ">Credit Mastr is a</p>
            <h2 className="font-poppins text-5xl md:text-6xl text-center font-bold capitalize mt-5" >Beat & Sample Library</h2>
            <p className="py-6 font-poppins text-base-content text-center md:text-[20px]">
                A new way to access high-quality beats, exclusive instrumentals and sounds all in one place.
            </p>
            <div className="mt-20 mb-20 grid xl:grid-flow-col xl:grid-rows-3 justify-center gap-4">
                {/* add sounds featured component */}
                {sounds?.map((sound) => (

                    <SoundFeatured
                        key={sound.id}
                        sound={sound}
                        onClick={() => handlePlayPause(sound.id)}
                        isActive={activeAudioCard === sound.id}
                        isPlaying={isPlaying}
                        onFinish={handleOnFinish}
                    />
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


    );
}

export default FeaturedSounds;