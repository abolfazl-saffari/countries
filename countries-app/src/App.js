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

  return (
    <>
      <Header />
      <div className="container d-flex flex-wrap gap-4 my-4">
        {data.map((country, index) => (
          <CountryCard
            key={index}
            src={country.flags.png}
            alt={country.name.official}
          />
        ))}
      </div>
    </>
  );
}

export default App;
