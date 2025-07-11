/* 
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
*/

/* 
const { data, loading } = useQuery(GET_ALL_COUNTRY);
console.log(data);

if (loading) {
  return <h1>DATA IS LOADING ...</h1>;

} */

/* {data.allCountries.map((country: Country) => (
        <div
          className="flex items-center gap-10 border mb-5"
          key={country.code}
        >
          <div>{country.name}</div>
          <div>{country.capital}</div>
          <img src={country.flag} className="w-20 h-20" alt="" />
        </div>
      ))} */
