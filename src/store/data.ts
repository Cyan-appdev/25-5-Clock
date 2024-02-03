import { create } from "zustand";

type DataType = {
  ref: HTMLAudioElement | null;
  breakLength: number;
  sessionLength: number;
  timeLeft: number;
  isSession: boolean;
  isPaused: boolean;
  hasEnded: boolean;
  setRef: (value: HTMLAudioElement | null) => void;
  setIsSession: (value: boolean) => void;
  setIsPaused: (value: boolean) => void;
  setHasEnded: (value: boolean) => void;
  setTimeLeft: (value: number) => void;
  incrementBreak: (value: number) => void;
  decrementBreak: (value: number) => void;
  incrementSession: (value: number) => void;
  decrementSession: (value: number) => void;
  decrementTime: (value: number) => void;
  resetAll: () => void;
};

export const useDataStore = create<DataType>()((set) => ({
  ref: null,
  breakLength: 5,
  sessionLength: 25,
  timeLeft: 1500,
  isSession: true,
  isPaused: true,
  hasEnded: false,

  setRef: (value) => set({ ref: value }),
  setIsSession: (value) => set({ isSession: value }),
  setHasEnded: (value) => set({ hasEnded: value }),
  setIsPaused: (value) => set({ isPaused: value }),
  setTimeLeft: (value) => set({ timeLeft: value }),

  incrementBreak: (value) => {
    if (value === 60) return;
    set((state) => ({ breakLength: state.breakLength + 1 }));
  },
  decrementBreak: (value) => {
    if (value <= 1) return;
    set((state) => ({ breakLength: state.breakLength - 1 }));
  },
  incrementSession: (value) => {
    if (value === 60) return;
    set((state) => ({
      sessionLength: state.sessionLength + 1,
      timeLeft: (state.sessionLength + 1) * 60,
    }));
  },
  decrementSession: (value) => {
    if (value <= 1) return;
    set((state) => ({
      sessionLength: state.sessionLength - 1,
      timeLeft: (state.sessionLength - 1) * 60,
    }));
  },
  decrementTime: (value) => {
    if (value === 0) return;
    set((state) => ({ timeLeft: state.timeLeft - 1 }));
  },
  resetAll: () =>
    set({
      ref: null,
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 1500,
      isSession: true,
      isPaused: true,
      hasEnded: false,
    }),
}));
