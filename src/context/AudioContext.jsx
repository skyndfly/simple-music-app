import {createContext, useState} from "react";
import trackList from "../assets/trackList.js";

const AudioContext = createContext({});


const AudioProvider = ({children}) => {
    const [currentTrack, setCurrrentTrack] = useState(trackList[0]);
    const [isPlaying, setPlaing] = useState(false);

    const handleToggleAudio = (track) => {
        console.log('clcik');
    };
    const value = [currentTrack, isPlaying, handleToggleAudio];
    return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
};
export default AudioProvider;