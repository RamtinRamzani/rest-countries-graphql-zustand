import { useQuery } from "@apollo/client";
import MainContainer from "../ui/MainContainer";
import Filter from "./Filter";
import { GET_ALL_CUNTRIES_DATA } from "../graphql/queries";
import { useNavigate } from "react-router-dom";

type Country = {
  name: string;
  code: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
  languages: [string];
  borders: [string];
};

const Country = () => {
  const { data, loading } = useQuery(GET_ALL_CUNTRIES_DATA);
  const navigate = useNavigate();

  if (loading) {
    return <h2>DATA IS LOADING ...</h2>;
  }
  return (
    <MainContainer className="mb-10">
      <Filter />

      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 xl:gap-20 md:gap-14 max-sm:mx-4">
        {data.allCountries.map((country: Country) => (
          <div
            className="rounded-sm shadow-sm text-primary-900 cursor-pointer"
            key={country.code}
            onClick={() => {
              navigate(`/country/${country.code}`);
            }}
          >
            <img
              src={country.flag}
              className="rounded-t-sm h-32 w-full"
              alt={country.name}
            />
            <div className="px-4 pt-4 flex flex-col gap-2">
              <h2 className="font-bold text-lg mb-4">{country.name}</h2>
              <div>
                <span className="font-semibold text-primary-800">
                  Population:{" "}
                </span>
                {country.population.toLocaleString("en-US")}
              </div>
              <div>
                <span className="font-semibold">Region: </span>
                {country.region}
              </div>
              <div className="pb-8">
                <span className="font-semibold text-primary-800">
                  Capital:{" "}
                </span>
                {country.capital}
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainContainer>
  );
};

export default Country;
