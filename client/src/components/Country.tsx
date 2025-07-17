import { useQuery } from "@apollo/client";
import MainContainer from "../ui/MainContainer";
import Filter from "./Filter";
import { CountryType, GET_ALL_CUNTRIES_DATA } from "../graphql/queries";
import { useNavigate } from "react-router-dom";
import { useFilterStore } from "../store/useFilterStore";
import SkeletonCard from "./SkeletonCard";
import { useEffect, useState } from "react";

const Country = () => {
  const { data, loading, error } = useQuery(GET_ALL_CUNTRIES_DATA);
  const { region, searchQuery } = useFilterStore();
  const navigate = useNavigate();

  const [isDelayedLoading, setIsDelayedLoading] = useState(true);
  const [isFilterLoading, setIsFilterLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setIsDelayedLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    if (!loading && (region || searchQuery)) {
      setIsFilterLoading(true);
      const timer = setTimeout(() => {
        setIsFilterLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [region, searchQuery, loading]);

  if (isDelayedLoading || loading || isFilterLoading) {
    return (
      <MainContainer className="mb-10">
        <Filter />
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 xl:gap-20 md:gap-14 max-sm:mx-4">
          {[...Array(8)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </MainContainer>
    );
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  if (!data?.allCountries) {
    return <h2>No countries found</h2>;
  }

  const filteredCountries = data.allCountries.filter((country: CountryType) => {
    const matchesRegion = region ? country.region === region : true;
    const matchesSearch = searchQuery
      ? country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (country.capital &&
          country.capital.toLowerCase().includes(searchQuery.toLowerCase())) ||
        country.region.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesRegion && matchesSearch;
  });

  return (
    <MainContainer className="mb-10">
      <Filter />

      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 xl:gap-20 md:gap-14 max-sm:mx-4">
        {filteredCountries.map((country: CountryType) => (
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
              <div className="mb-8">
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
