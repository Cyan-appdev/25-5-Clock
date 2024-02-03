import { useEffect, useRef } from "react";
import { useDataStore } from "../store/data";

export const Audio = () => {
  const setRef = useDataStore().setRef;
  const ref = useDataStore().ref;
  const timeLeft = useDataStore().timeLeft;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) setRef(audioRef.current);
  }, [audioRef, setRef, ref]);

  useEffect(() => {
    if (timeLeft === 0) audioRef.current?.play();
  }, [timeLeft]);

  return (
    <audio
      ref={audioRef}
      id="beep"
      src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
      preload="auto"
    ></audio>
  );
};
