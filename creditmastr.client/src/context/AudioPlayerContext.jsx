import { createContext, useState, useContext } from "react";

const AudioPlayerContext = createContext({
    activeAudioCard: null,
    isPlaying: false,
    handlePlayPause: () => { },
    handleOnFinish: () => { }
});

export function AudioPlayerContextProvider({ children }) {
    const [activeAudioCard, setActiveAudioCard] = useState(null);
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

    return (
        <AudioPlayerContext.Provider value={{ activeAudioCard, isPlaying, handlePlayPause, handleOnFinish }}>
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
