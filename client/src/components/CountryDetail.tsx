import { useQuery } from "@apollo/client";
import Back from "../ui/Back";
import MainContainer from "../ui/MainContainer";
import { CountryType, GET_ALL_CUNTRIES_DATA } from "../graphql/queries";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SkeletonDetail from "./SkeletonDetail";

const CountryDetail = () => {
  const { data, loading, error } = useQuery(GET_ALL_CUNTRIES_DATA);
  const { code } = useParams();
  const [isDelayedLoading, setIsDelayedLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setIsDelayedLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (isDelayedLoading || loading) {
    return (
      <MainContainer className="my-[clamp(2rem,4vw,6rem)]">
        <Back />
        <SkeletonDetail />
      </MainContainer>
    );
  }

  if (error) {
    return (
      <h2 className="text-center text-primary-700 dark:text-primary-50">
        Error: {error.message}
      </h2>
    );
  }

  if (!data) {
    return (
      <p className="text-center text-primary-700 dark:text-primary-50">
        No data available
      </p>
    );
  }

  const country = data.allCountries.find(
    (country: CountryType) => country.code === code
  );

  if (!country) {
    return <p className="text-center text-primary-700">Country not found</p>;
  }

  return (
    <MainContainer className="text-primary-900 my-[clamp(2rem,4vw,6rem)]">
      <Back />
      <div
        className="flex max-md:flex-col items-center gap-[clamp(1rem,8vw,8rem)] mt-[clamp(2rem,4vw,6rem)] lg:mx-[clamp(1rem,4vw,8rem)] transition-all duration-500"
        key={country.name}
      >
        <img
          src={country.flag}
          className="w-1/2 max-md:w-full h-[200px] sm:h-[350px] rounded-sm shadow-sm"
          alt={country.name}
        />
        <div className="w-1/2 max-md:w-full flex flex-col gap-8">
          <h2 className="font-bold text-3xl dark:text-white">{country.name}</h2>

          <div className="flex max-md:flex-col max-md:gap-2 justify-between">
            <div className="flex flex-col gap-2">
              {[
                { label: "Name", value: country.name },
                {
                  label: "Population",
                  value: country.population.toLocaleString("en-US"),
                },
                { label: "Region", value: country.region },
                { label: "Subregion", value: country.subregion },
                { label: "Capital", value: country.capital },
              ].map(({ label, value }) => (
                <h3
                  className="text-primary-700 dark:text-primary-100"
                  key={label}
                >
                  <span className="font-semibold">{label}:</span> {value}
                </h3>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {[
                {
                  label: "Currency",
                  value: country.currencies[0]?.name ?? "Have'nt",
                },
                {
                  label: "Languages",
                  value: country.languages.join(", "),
                },
              ].map(({ label, value }) => (
                <h3
                  className="text-primary-700 dark:text-primary-100"
                  key={label}
                >
                  <span className="font-semibold">{label}:</span> {value}
                </h3>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <h3 className="text-primary-700 font-semibold dark:text-primary-50">
              Border Countries:
            </h3>
            {country.borders.slice(0, 3).map((border: string) => (
              <span
                className="shadow-sm px-6 py-1 text-sm text-primary-500 dark:border dark:border-primary-600 dark:text-primary-200 rounded-md"
                key={border}
              >
                {border}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default CountryDetail;
