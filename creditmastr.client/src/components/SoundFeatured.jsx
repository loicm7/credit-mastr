import { Play, Pause } from "lucide-react";
import CldImage from "./ui/CldImage";
import { useRef, useEffect } from "react";
import WavesurferPlayer from "@wavesurfer/react";

/**
* @description component for the sound card in the featured section, 
  it displays the sound title, genre and a play/pause button. 
  It also contains a placeholder for the sound waveform.
*/


export default function SoundFeatured({ sound, onClick, isActive, isPlaying, onFinish }) {

    const wavesurferRef = useRef(null);
    console.log("sound.id", sound.id);

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

    

    /*useEffect(() => {
        const wavesurfer = wavesurferRef.current;
        if (!wavesurfer) {
            console.warn("Wavesurfer instance is not ready yet.");
            return;
        };

        if (!isActive)
            wavesurfer.stop();
    }, [isActive]);*/

    
    return (
        <>
            <div className=" w-full max-w-md md:max-w-xl  mx-auto  bg-base-200 rounded-lg 
                flex items-center justify-start gap-x-8 shadow-md p-4"
            >
                <div className="w-[72px] h-[72px] shrink-0 ">
                    {/*<img className=" aspect-square rounded-lg object-cover" src={sound.imageId} loading="lazy" alt="Sound Thumbnail" /> */}
                    <CldImage imageId={sound.imageId} className="aspect-square rounded-lg object-cover"
                        loading="lazy" alt="Sound Thumbnail" sizes="75px"
                    />
                </div>
                {/* play/pause button for the sound card */}
                <button className="btn btn-circle w-[50px] h-[50px]" onClick={onClick}
                    aria-label={isActive && isPlaying ? "Pause audio" : "Play audio"}
                    aria-pressed={isActive && isPlaying}
                >
                    {isActive && isPlaying ? <Pause size={24} fill="black" /> : <Play size={24} fill="black" />}
                </button>

                <div className="flex flex-col overflow-hidden">
                    <h1 className="font-semibold text-sm md:text-base lg:text-lg ">{sound.title}</h1>

                    <div className="flex flex-row gap-x-1">
                        {sound?.genre?.map((genre) => (
                            <p key={genre} className="badge badge-neutral">{genre}</p>
                        ))}
                    </div>



                    {/* div for sound waveform placeholder   aspect-12/1 scale-y-[.4]*/}
                    <div className="h-full w-full mt-3  aspect-12/1 scale-y-[.4]">
                        <WavesurferPlayer
                            height={98}
                            width={350}
                            fillParent={true}
                            waveColor={"rgb(160, 160, 160)"}
                            progressColor={"rgb(21, 93, 252)"}
                            url={sound && sound.audioUrl}
                            onReady={onReady}
                            onFinish={onFinish}
                            normalize={true}
                            barWidth={2}
                            barHeight={1}
                            cursorWidth={0}
                            
                           

                        />
                    </div>
                </div>
            </div>
        </>
    );

}

