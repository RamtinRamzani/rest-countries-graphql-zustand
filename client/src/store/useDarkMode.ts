import { create } from "zustand";

type DarkModeStateAction = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const getInitialDarkMode = () => localStorage.getItem("darkMode") === "true";

export const useDarkMode = create<DarkModeStateAction>((set) => ({
  isDarkMode: getInitialDarkMode(),
  toggleDarkMode: () =>
    set((state) => {
      const newDarkMode = !state.isDarkMode;
      localStorage.setItem("darkMode", newDarkMode.toString());

      document.documentElement.classList.toggle("dark", newDarkMode);
      return { isDarkMode: newDarkMode };
    }),
}));
