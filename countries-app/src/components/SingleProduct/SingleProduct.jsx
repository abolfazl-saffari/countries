import Header from "../Header/Header";
import BackButton from "../BackButton/BackButton";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SingleProduct({ changeTheme, darkMode }) {
  const params = useParams();
  const [singleCountryData, setSingleCountryData] = useState([]);
  const [nativeName, setNativeName] = useState("");
  const [population, setPopulation] = useState("");
  const [region, setRegion] = useState("");
  const [subRegion, setSubRegion] = useState("");
  const [capital, setCapital] = useState("");
  const [topLevelDomain, setTopLevelDomain] = useState("");
  const [currencies, setCurrencies] = useState("");
  const [languages, setLanguages] = useState([]);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.countryName}`)
      .then((res) => res.json())
      .then((allData) => {
        setSingleCountryData(allData);
        setNativeName(allData[0].name.official);
        setPopulation(allData[0].population);
        setRegion(allData[0].region);
        setSubRegion(allData[0].subregion);
        setCapital(allData[0].capital);
        setTopLevelDomain(allData[0].tld);
        setCurrencies(allData[0].currencies);
        setLanguages(Object.values(allData[0].languages));
        setBorderCountries(allData[0].borders);
      });
  }, [params.countryName]);

  return (
    <>
      <Header changeTheme={changeTheme} darkMode={darkMode} />
      <div className="container my-5 p-0">
        <Link to="/">
          <BackButton changeTheme={changeTheme} darkMode={darkMode} />
        </Link>
        <div
          className={`row justify-content-between align-items-center ${
            darkMode ? "dark-single-card-detail" : "light-single-card-detail"
          }`}
        >
          <img
            className="col-6 pe-5 p-0"
            src={singleCountryData[0] && singleCountryData[0].flags.png}
            alt={singleCountryData[0] && singleCountryData[0].flags.alt}
          />
          <div className="col-6 p-0 ps-5 d-flex flex-column">
            {singleCountryData[0] && (
              <h2 className="mb-4">
                <strong>{singleCountryData[0].name.common}</strong>
              </h2>
            )}
            <div className="d-flex flex-column gap-4">
              <div className="row">
                <div className="col-6">
                  <p>
                    <strong>Native name : </strong>
                    {nativeName}
                  </p>
                  <p>
                    <strong>population : </strong>
                    {population.toLocaleString("en-US")}
                  </p>
                  <p>
                    <strong>region : </strong>
                    {region}
                  </p>
                  <p>
                    <strong>sub region : </strong>
                    {subRegion}
                  </p>
                  <p>
                    <strong>capital : </strong>
                    {capital}
                  </p>
                </div>
                <div className="col-6">
                  <p>
                    <strong>top level domain : </strong>
                    {topLevelDomain}
                  </p>
                  <p>
                    <strong>currencies :</strong> euro
                  </p>
                  <p>
                    <strong>languages : </strong>
                    {languages.map((language, index) => (
                      <span key={index}>{language}, </span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <strong className="m-0">border countries :</strong>
                <div className="d-flex flex-wrap gap-3">
                  {borderCountries ? (
                    borderCountries.map((language, index) => (
                      <Link to="" key={index}>
                        <span className="shadow-sm py-1 px-4 rounded">
                          {language}
                        </span>
                      </Link>
                    ))
                  ) : (
                    <span className="text-decoration-underline">
                      No borders country.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleProduct;
