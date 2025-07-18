import countriesData from "../countries.json";

const resolvers = {
  Query: {
    allCountries: () => {
      return countriesData.map((country) => ({
        name: country.name.common,
        code: country.cca2,
        capital: country.capital ? country.capital[0] : "❌CAPITAL❌",
        region: country.region,
        subregion: country.subregion,
        population: country.population,
        flag: country.flags.png,
        languages: country.languages
          ? Object.values(country.languages)
          : ["Unknown"],
        borders: country.borders || [],
        currencies: country.currencies
          ? Object.entries(country.currencies).map(
              ([code, data]: [string, any]) => ({
                code,
                name: data.name,
                symbol: data.symbol,
              })
            )
          : [],
      }));
    },

    country: (_: any, args: { code: string }): any => {
      const match = countriesData.find(
        (country) => country.cca2.toLowerCase() === args.code.toLowerCase()
      );
      if (!match) return null;

      return {
        name: match.name.common,
        code: match.cca2,
        capital: match.capital ? match.capital[0] : "Unknown",
        region: match.region,
        subregion: match.subregion,
        population: match.population,
        flag: match.flags.png,
        languages: match.languages
          ? Object.values(match.languages)
          : ["Unknown"],
        borders: match.borders || [],
        currencies: match.currencies
          ? Object.entries(match.currencies).map(
              ([code, data]: [string, any]) => ({
                code,
                name: data.name,
                symbol: data.symbol,
              })
            )
          : [],
      };
    },
  },
};

export default resolvers;
