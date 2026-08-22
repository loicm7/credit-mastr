import GenreBeat from "./GenreBeat";
import { coverArtData } from "../utils/coverArtData";
import { useAudioPlayer } from "../hooks/useAudioPlayer";


function MultiGenreBeats() {

    const { activeAudioCard, isPlaying, handlePlayPause, handleOnFinish } = useAudioPlayer();

    return (
        <div className="col-start-1 col-end-17 bg-(--color-light-dark) pb-50 ">
            
            <section className="">
                
                <div className="grid grid-cols-6 gap-x-4 gap-y-4">
                    <div className="col-start-2 col-span-4 text-center">
                        <h2 className="font-poppins text-5xl md:text-6xl text-center text-base-100 font-bold capitalize mt-25" >A Wide selection of music genres</h2>
                        <p className="py-6 font-poppins text-base-100/70 text-center md:text-[20px]">
                            Find the sound that fits your style.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-15">
                            {/* add genre beat cover art audio component*/}
                            {coverArtData.map((cover) => (
                                <GenreBeat
                                    key={cover.id}
                                    cover={cover}
                                    onClick={() => handlePlayPause(cover.id)}
                                    isActive={activeAudioCard === cover.id}
                                    isPlaying={isPlaying}
                                    onFinish={handleOnFinish}
                                />
                            ))}
                        </div>
                       
                        

                        <div className="mt-25">
                            <h2 className="font-poppins text-base-100 mb-5 text-xl md:text-4xl font-semibold">A new way to make music</h2>
                            <p className="font-poppins text-base-100 text-center md:text-[18px]">
                                Sign up for the waitlist to get early access and behind-the-scenes updates.
                            </p>
                            

                            <div className="w-max items-center mx-auto mt-5">
                                <div className="flex justify-start sm:justify-center md:justify-center lg:justify-start">
                                    <button className="btn bg-base-100 text-base-content border-base-100 rounded-full py-6 px-6">Join the waitlist</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


        </div>
    );
}

export default MultiGenreBeats;