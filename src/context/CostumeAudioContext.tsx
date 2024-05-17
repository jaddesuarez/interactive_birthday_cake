"use client";
import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface ICostumeAudioContext {
  audioContext: AudioContext | null;
  setAudioContext: Dispatch<SetStateAction<AudioContext | null>>;
}

export const CostumeAudioContext = createContext<ICostumeAudioContext>({
  audioContext: null,
  setAudioContext: () => Promise.resolve(),
});

export const AudioContextProvider = ({ children }: any) => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  return (
    <CostumeAudioContext.Provider value={{ audioContext, setAudioContext }}>
      {children}
    </CostumeAudioContext.Provider>
  );
};

export const useAudioContext = () => {
  return useContext(CostumeAudioContext);
};
