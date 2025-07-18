import { create } from "zustand";

type DarkModeState = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkModeFromStorage: () => void;
};

export const useDarkMode = create<DarkModeState>((set) => ({
  isDarkMode: false,

  toggleDarkMode: () =>
    set((state) => {
      const newDarkMode = !state.isDarkMode;
      localStorage.setItem("darkMode", newDarkMode.toString());
      document.documentElement.classList.toggle("dark", newDarkMode);
      return { isDarkMode: newDarkMode };
    }),

  setDarkModeFromStorage: () =>
    set(() => {
      const isDark = localStorage.getItem("darkMode") === "true";
      document.documentElement.classList.toggle("dark", isDark);
      return { isDarkMode: isDark };
    }),
}));
