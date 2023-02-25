import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard/CountryCard";
import Header from "./components/Header/Header";
import FilterBox from "./components/FilterBox/FilterBox";
import SearchBox from "./components/Searchbar/SearchBox";

function App() {
  const [data, getData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
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

  // getData((prevData) => {
  //   if (region !== "") {
  //     return prevData
  //       .filter((c) => c.region === region)
  //       .filter((c) => c)
  //       .filter(
  //         (country) =>
  //           country.name.common
  //             .toLowerCase()
  //             .includes(input.trim().toLowerCase()) ||
  //           (country.capital &&
  //             country.capital[0]
  //               .toLowerCase()
  //               .includes(input.trim().toLowerCase()))
  //       );
  //   }
  //   return prevData;
  // });
  //.filter((country) => country.region === region)

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

  function changeTheme() {
    setDarkMode(!darkMode);
    if (document.body.classList.contains("dark-backGround")) {
      document.body.classList.remove("dark-backGround");
      document.body.classList.add("light-backGround");
    } else if (document.body.classList.contains("light-backGround")) {
      document.body.classList.remove("light-backGround");
      document.body.classList.add("dark-backGround");
    }
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

export default App;
