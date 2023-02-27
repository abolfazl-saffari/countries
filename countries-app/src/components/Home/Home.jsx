import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CountryCard from "../CountryCard/CountryCard";
import Header from "../Header/Header";
import FilterBox from "../FilterBox/FilterBox";
import SearchBox from "../Searchbar/SearchBox";

function Home({ changeTheme, darkMode }) {
  const [data, getData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((allData) => {
        getData(allData);
        setFiltered(allData);
      });
  }, []);

  function countriesFilter(region) {
    setRegion(region);
    getData(filtered.filter((country) => country.region === region));
  }

  function searchCountyBox(input) {
    getData(
      filtered
        .filter((country) => (region ? country.region === region : country))
        .filter(
          (country) =>
            country.name.common
              .toLowerCase()
              .startsWith(input.trim().toLowerCase()) ||
            (country.capital &&
              country.capital[0]
                .toLowerCase()
                .startsWith(input.trim().toLowerCase()))
        )
    );
  }

  return (
    <>
      <Header changeTheme={changeTheme} darkMode={darkMode} />
      <div className="container my-5">
        <div className="row justify-content-between">
          <SearchBox searchCountyBox={searchCountyBox} darkMode={darkMode} />
          <FilterBox countriesFilter={countriesFilter} darkMode={darkMode} />
        </div>
      </div>
      <div className="container d-flex flex-wrap my-5 justify-content-between gap-5 p-0">
        {data.map((country, index) => (
          <Link key={index} to={`/name/${country.name.common}`}>
            <CountryCard countryData={country} darkMode={darkMode} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
