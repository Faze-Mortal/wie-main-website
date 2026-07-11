import { create } from 'zustand';

export const useScrollStore = create((set) => ({
  currentPhase: 0,
  phaseProgress: 0,
  setCurrentPhase: (phase) => set({ currentPhase: phase }),
  setPhaseProgress: (progress) => set({ phaseProgress: progress }),
  isScrollLocked: false,
  setScrollLocked: (locked) => set({ isScrollLocked: locked }),
}));
