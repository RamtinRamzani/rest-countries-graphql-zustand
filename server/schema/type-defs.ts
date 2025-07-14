import { gql } from "apollo-server";

const typeDefs = gql`
  type Currency {
    code: String
    name: String
    symbol: String
  }

  type Country {
    name: String!
    code: String!
    capital: String!
    region: String!
    subregion: String!
    population: Int!
    flag: String!
    languages: [String!]!
    borders: [String]
    currencies: [Currency]
  }

  type Query {
    allCountries: [Country]
    country(code: String!): Country
  }
`;

module.exports = { typeDefs };
