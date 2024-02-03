import { Button } from "./Button";
import { useDataStore } from "../store/data";

export const ResetBtn = () => {
  const resetAll = useDataStore().resetAll;
  const audioRef = useDataStore().ref;

  const handleReset = () => {
    resetAll();
    if (audioRef) {
      audioRef.pause();
      audioRef.currentTime = 0;
    }
  };

  return (
    <Button
      id="reset"
      className="bg-gray-200 outline-gray-500 "
      onClick={handleReset}
    >
      Reset
    </Button>
  );
};
