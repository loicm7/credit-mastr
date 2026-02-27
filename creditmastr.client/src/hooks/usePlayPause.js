import { useState } from "react";

/**
 * 
 * @param {boolean} initialValue
 * @returns
 */
export function usePlayPause(initialValue = false) {

    const [activeAudioCard, setActiveAudioCard] = useState(null);
    const [isPlaying, setIsPlaying] = useState(initialValue);

    const handlePlayPause = (soundId) => {
        if (activeAudioCard === soundId)
        {
            setIsPlaying(isPlaying => !isPlaying);
           
        }
        else {
            setActiveAudioCard(soundId);
            setIsPlaying(true);
        }
    }

    return {
        activeAudioCard,
        isPlaying,
        handlePlayPause,
    }
}