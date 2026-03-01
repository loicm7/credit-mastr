import { Play, Pause } from "lucide-react";
//import { coverArtData } from "../utils/coverArtData";
import CldGenreBeatImage from "./ui/CldGenreBeatImage";
import { useRef, useEffect } from "react";
import WavesurferPlayer from "@wavesurfer/react";
function GenreBeat({ cover, onClick, isActive, isPlaying, onFinish }) {

    const wavesurferRef = useRef(null);
    console.log("cover.id", cover.id);
    // fonction qui set l'instance wavesurfer when it's ready
    const onReady = (ws) => {
        wavesurferRef.current = ws;
    };


    useEffect(() => {

        // if the wavesurfer instance is ready,
        //play or pause the audio based on the isActive and isPlaying state
        const wavesurfer = wavesurferRef.current;
        if (!wavesurfer) {
            console.warn("Wavesurfer instance is not ready yet.");
            return;
        };

        if (isActive && isPlaying) {
            wavesurfer.play();
        }
        else {
            wavesurfer.pause();
        }

        if (!isActive)
            wavesurfer.stop();


    }, [isActive, isPlaying]);


    return (

        <>

            <div>
                <button className="relative group rounded-lg overflow-hidden bg-neutral-900" onClick={onClick}>
                    <div className="flex items-center justify-center w-full h-full aspect-square">
                        {/* <img src={cover.imageId} alt={cover.title} className="w-full h-full object-cover" /> */}

                        <CldGenreBeatImage imageId={cover.imageId} alt={cover.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">

                        <div className="h-14 w-14 rounded-full bg-black/80 flex items-center justify-center">
                            
                            {isActive && isPlaying ? <Pause className="text-white w-6 h-6 ml-0.5" fill="white" /> : <Play className="text-white w-6 h-6 ml-0.5" fill="white" />}
                        </div>

                    </div>

                </button>

                
                <div id="waveform-container" className="hidden-waveform">
                    <WavesurferPlayer
                        url={cover && cover.audioUrl}
                        onReady={onReady}
                        onFinish={onFinish}
                    // height={0} // hide the waveform

                    />
                </div>

                

                
                
                <h2 className="text-sm md:text-md lg:text-lg font-poppins font-medium text-base-100 truncate">
                    {cover.title}
                </h2>
            </div>


            


        </>

    );
}

export default GenreBeat;