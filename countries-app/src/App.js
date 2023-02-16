import { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard/CountryCard";
import Header from "./components/Header/Header";

function App() {
  const [data, getData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((allData) => getData(allData));
  }, []);
  console.log(data);
  return (
    <>
      <Header />
      <div className="container d-flex flex-wrap my-4 justify-content-between gap-5 p-0">
        {data.map((country, index) => (
          <CountryCard key={index} countryData={country} />
        ))}
      </div>
    </>
  );
}

export default App;
