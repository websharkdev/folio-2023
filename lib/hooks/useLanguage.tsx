import { create } from "zustand";

interface useLanguageProps {
  languages: string[];
  currentLanguage: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggleLanguage: (language: string) => void;
}

export const useLanguage = create<useLanguageProps>((set) => ({
  languages: ["en", "es", "ua"],
  currentLanguage: "en",
  toggleLanguage: (language) => set({ currentLanguage: language }),
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
