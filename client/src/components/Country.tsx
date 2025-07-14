import { gql, useQuery } from "@apollo/client";
import MainContainer from "../ui/MainContainer";
import Filter from "./Filter";

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

const GET_ALL_COUNTRY = gql`
  query allCountries {
    allCountries {
      name
      capital
      flag
      capital
      region
      population
      flag
      languages
    }
  }
`;

const Country = () => {
  const { data, loading } = useQuery(GET_ALL_COUNTRY);
  console.log(data);

  if (loading) {
    return <h2>DATA IS LOADING ...</h2>;
  }
  return (
    <MainContainer>
      <Filter />

      <div className="grid grid-cols-4 gap-20">
        {/* <div className="rounded-sm shadow-sm">Helloo</div> */}

        {data.allCountries.map((country: Country) => (
          <div
            className="rounded-sm shadow-sm text-primary-900"
            key={country.code}
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
              <div className="pb-12">
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
