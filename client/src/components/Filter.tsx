const Filter = () => {
  return (
    <section className="flex max-sm:flex-col gap-8 justify-between my-10">
      <label className="input bg-white shadow-sm text-primary-700 max-sm:w-full">
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
        <input type="search" required placeholder="Search" />
      </label>

      <select
        defaultValue="Pick a language"
        className="select bg-white text-primary-800 shadow-sm sm:w-1/4 w-2/3 cursor-pointer"
      >
        <option disabled={true}>Pick a language</option>
        <option>Asia</option>
        <option>Africa</option>
        <option>America</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </section>
  );
};

export default Filter;
