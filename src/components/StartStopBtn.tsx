import { Button } from "./Button";
import { useDataStore } from "../store/data";
import { useInterval } from "../hooks/useInterval";

export const StartStopBtn = () => {
  const {
    breakLength,
    sessionLength,
    timeLeft,
    isSession,
    isPaused,
    hasEnded,
    setIsPaused,
    setIsSession,
    setTimeLeft,
    setHasEnded,
    decrementTime,
  } = useDataStore();

  const handleClick = () => {
    setIsPaused(!isPaused);
  };

  useInterval(() => {
    if (isPaused) return;
    if (timeLeft === 0) {
      if (!hasEnded) {
        setHasEnded(true);
        setTimeout(() => {
          isSession
            ? setTimeLeft(breakLength * 60)
            : setTimeLeft(sessionLength * 60);
          setIsSession(!isSession);
          setHasEnded(false);
        }, 1000);
      }
      return;
    }
    decrementTime(timeLeft);
  }, 1000);

  return (
    <Button
      id="start_stop"
      className={
        isPaused
          ? "bg-green-500 text-green-600 outline-green-600"
          : "bg-red-500 text-red-600 outline-red-600"
      }
      onClick={handleClick}
    >
      {isPaused ? "Start" : "Stop"}
    </Button>
  );
};
