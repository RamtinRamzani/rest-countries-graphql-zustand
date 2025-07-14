import MainContainer from "../ui/MainContainer";

const Filter = () => {
  return (
    <MainContainer>
      <section className="flex justify-between my-10">
        <label className="input bg-white shadow-sm text-primary-700">
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
          name="s"
          id="s"
          className="cursor-pointer shadow-sm px-4 rounded-sm text-primary-800"
        >
          <option value="s">Africa</option>
          <option value="s">Asia</option>
          <option value="s">America</option>
          <option value="s">Europe</option>
          <option value="s">Oceania</option>
        </select>
      </section>
    </MainContainer>
  );
};

export default Filter;
