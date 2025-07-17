import { create } from "zustand";

// Type for States
type FilterState = {
  region: string;
  searchQuery: string;
};

// Type for Actions
type FilterActions = {
  setRegion: (region: string) => void;
  setSearchQuery: (searchQuery: string) => void;
  reset: () => void;
};

const useFilterStore = create<FilterState & FilterActions>((set) => ({
  region: "",
  searchQuery: "",
  setRegion: (region) => set({ region }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  reset: () => set({ searchQuery: "" }),
}));

export { useFilterStore };
