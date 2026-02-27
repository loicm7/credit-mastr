import { Play } from "lucide-react";
//import { coverArtData } from "../utils/coverArtData";
import CldGenreBeatImage from "./ui/CldGenreBeatImage";
function GenreBeat({ cover }) {


    return (

        <>

            <div>
                <button className="relative group rounded-lg overflow-hidden bg-neutral-900">
                    <div className="flex items-center justify-center w-full h-full aspect-square">
                        {/* <img src={cover.imageId} alt={cover.title} className="w-full h-full object-cover" /> */}

                        <CldGenreBeatImage imageId={cover.imageId} alt={cover.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">

                        <div className="h-14 w-14 rounded-full bg-black/80 flex items-center justify-center">
                            <Play className="text-white w-6 h-6 ml-0.5" fill="white" />
                        </div>

                    </div>

                </button>
                <h2 className="text-sm md:text-md lg:text-lg font-poppins font-medium text-base-100 truncate">
                    {cover.title}
                </h2>
            </div>


            


        </>

    );
}

export default GenreBeat;