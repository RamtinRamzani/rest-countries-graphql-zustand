import { gql } from "@apollo/client";

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
