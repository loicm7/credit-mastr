import { createContext, useState, useContext } from "react";
import { categories} from "../utils/FeaturedSoundsData";

const AudioPlayerContext = createContext({
    activeAudioCard: null,
    isPlaying: false,
    activeTab: categories[0].id,
    handlePlayPause: () => { },
    handleOnFinish: () => { },
    changeAudioTab: () => { }
});

export function AudioPlayerContextProvider({ children }) {
    const [activeAudioCard, setActiveAudioCard] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeTab, setActiveTab] = useState(categories[0].id); // for active tab for audio card (beat, loops, drums)

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

    const changeAudioTab = (id) => {
        setActiveTab(id);
        setIsPlaying(false);
    }

    return (
        <AudioPlayerContext.Provider value={{ activeTab, activeAudioCard, isPlaying, handlePlayPause, handleOnFinish, changeAudioTab}}>
            {children}
        </AudioPlayerContext.Provider>
    );

}


export function useAudioPlayer() {
    const context = useContext(AudioPlayerContext);
    if (!context) {
        throw new Error("useAudioPlayer must be used within an AudioPlayerContextProvider");
    }
    return context;
}
