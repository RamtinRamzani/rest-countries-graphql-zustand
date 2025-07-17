import { useFilterStore } from "../store/useFilterStore";
import { debounce } from "lodash";

interface SearchChangeEvent {
  target: {
    value: string;
  };
}

const Filter = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const { searchQuery, setRegion, setSearchQuery, reset } = useFilterStore();

  const debouncedSearch = debounce((value) => {
    setSearchQuery(value);
  }, 100);

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement> & SearchChangeEvent
  ) => {
    debouncedSearch(e.target.value);
  };

  return (
    <section className="flex max-sm:flex-col gap-8 justify-between my-10">
      <label className="input relative bg-white shadow-sm text-primary-700 max-sm:w-full">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {searchQuery && (
          <button
            onClick={reset}
            className="absolute right-2 text-primary-600"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </label>

      <select
        className="select bg-white text-primary-800 shadow-sm sm:w-1/4 w-2/3 cursor-pointer"
        onChange={(e) => setRegion(e.target.value)}
        // defaultValue="Pick a region"
      >
        <option disabled>Filter by Region</option>
        <option value="">All Regions</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Filter;
