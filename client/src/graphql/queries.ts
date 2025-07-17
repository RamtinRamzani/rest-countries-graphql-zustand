import { gql } from "@apollo/client";

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

export type CountryType = {
  name: string;
  code: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  flag: string;
  languages: string[];
  borders: string[];
  currencies: Currency[];
};

export const GET_ALL_CUNTRIES_DATA = gql`
  query allCountries {
    allCountries {
      code
      name
      capital
      region
      subregion
      population
      flag
      languages
      borders
      currencies {
        code
        name
        symbol
      }
    }
  }
`;
