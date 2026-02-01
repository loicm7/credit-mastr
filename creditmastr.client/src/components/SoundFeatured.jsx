import { Play } from "lucide-react";
import { Pause } from "lucide-react";
//import { sounds } from "../utils/FeaturedSoundsData";
import { useState } from "react";
import CldImage from "./ui/CldImage";


export default function SoundFeatured({sound}) {

    const onClickPlayPauseButton = () => {
        setIsPlaying(isPlaying => !isPlaying)

    }
    //const [activeTrack, setActiveTrack] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
   


    return (
        <>
            <div className=" w-full max-w-md md:max-w-xl  mx-auto  bg-base-200 rounded-lg flex items-center justify-start gap-x-8 shadow-md p-4">
                <div className="w-[72px] h-[72px] shrink-0 ">
                    {/*<img className=" aspect-square rounded-lg object-cover" src={sound.imageId} loading="lazy" alt="Sound Thumbnail" /> */}
                    <CldImage imageId={sound.imageId} className="aspect-square rounded-lg object-cover" loading="lazy" alt="Sound Thumbnail" sizes="75px" />
                </div>

                <button className="btn btn-circle w-[50px] h-[50px]" onClick={onClickPlayPauseButton} >
                    {isPlaying ? <Pause size={24} fill="black" /> : <Play size={24} fill="black" />}
                </button>

                <div className="flex flex-col overflow-hidden">
                    <h1 className="font-semibold text-sm md:text-base lg:text-lg ">{sound.title}</h1>

                    <div className="flex flex-row gap-x-1">
                        {sound.genre.map((genre) => (
                            <p key={genre} className="badge badge-neutral">{genre}</p>
                        ))}
                    </div>



                    {/* div for sound waveform placeholder*/}
                    <div className="h-full w-full">
                        <div className="mt-3  md:h-full md:w-full flex items-end gap-[1px] md:gap-0.5">
                            {Array.from({ length: 90 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="w-1 bg-neutral-600 rounded "
                                    style={{ height: `${Math.random() * 30 + 5}px` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

