import { useDataStore } from "../store/data";
import { timeFormatter } from "../lib/utils";

export const Display = () => {
  const timeLeft = useDataStore().timeLeft;
  const isSession = useDataStore().isSession;
  const hasEnded = useDataStore().hasEnded;

  const time = timeFormatter(timeLeft);
  const label = isSession ? "Session" : "Break";
  const textColor = timeLeft < 60 && !hasEnded ? "text-red-600" : "text-white";

  return (
    <div className="h-full w-full">
      <h2 id="timer-label" className="mb-6 text-center text-3xl font-semibold">
        {label}
      </h2>
      <p
        id="time-left"
        className={`border-b-2 border-gray-600 pb-10 text-center text-8xl font-bold outline-2 outline-gray-600 ${textColor}`}
      >
        {time}
      </p>
    </div>
  );
};
