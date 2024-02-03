import { Setting } from "./Setting";
import { useDataStore } from "../store/data";
import { StartStopBtn } from "./StartStopBtn";
import { ResetBtn } from "./ResetBtn";

export const ControlPanel = () => {
  const {
    breakLength,
    sessionLength,
    incrementBreak,
    incrementSession,
    decrementBreak,
    decrementSession,
  } = useDataStore();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 border-b-2 border-gray-600 pb-6">
        <Setting
          name="Break"
          value={breakLength}
          increment={() => incrementBreak(breakLength)}
          decrement={() => decrementBreak(breakLength)}
        />
        <Setting
          name="Session"
          value={sessionLength}
          increment={() => incrementSession(sessionLength)}
          decrement={() => decrementSession(sessionLength)}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <ResetBtn />
        <StartStopBtn />
      </div>
    </div>
  );
};
