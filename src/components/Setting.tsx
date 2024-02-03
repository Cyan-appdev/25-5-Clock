import { LuPlusCircle, LuMinusCircle } from "react-icons/lu";
import { useDataStore } from "../store/data";

type SettingProps = {
  name: string;
  value: number;
  increment: () => void;
  decrement: () => void;
};

export const Setting = ({
  name,
  value,
  increment,
  decrement,
}: SettingProps) => {
  const id = name.toLowerCase();
  const isPaused = useDataStore().isPaused;

  return (
    <div className="flex items-center justify-between gap-2">
      <h2 id={`${id}-label`} className="text-xl">{`${name} Length`}</h2>
      <div className="flex h-full w-1/3 items-center justify-between">
        <button
          id={`${id}-decrement`}
          className="h-6 rounded-full active:scale-95"
          onClick={decrement}
          disabled={!isPaused}
        >
          <LuMinusCircle className="text-2xl" />
        </button>
        <span id={`${id}-length`} className="text-2xl">
          {value}
        </span>
        <button
          id={`${id}-increment`}
          className="h-6 rounded-full active:scale-95"
          onClick={increment}
          disabled={!isPaused}
        >
          <LuPlusCircle className="text-2xl" />
        </button>
      </div>
    </div>
  );
};
