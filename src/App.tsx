import { ControlPanel } from "./components/ControlPanel";
import { Display } from "./components/Display";
import { Audio } from "./components/Audio";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-gray-950 text-white">
      <div className="flex w-[375px] flex-col gap-5 rounded-[60px] p-6 pt-8 outline outline-gray-700">
        <Display />
        <ControlPanel />
        <Audio />
      </div>
      <p className="text-sm text-cyan-400">Designed and coded by CyanDev</p>
    </div>
  );
}

export default App;
