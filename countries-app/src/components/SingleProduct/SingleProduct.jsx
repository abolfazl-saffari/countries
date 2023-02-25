import Header from "../Header/Header";
import BackButton from "../BackButton/BackButton";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SingleProduct() {
  const params = useParams();
  const [singleCountryData, setSingleCountryData] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.countryName}`)
      .then((res) => res.json())
      .then((allData) => {
        setSingleCountryData(allData);
      });
  }, [params.countryName]);
  console.log(singleCountryData);
  return (
    <>
      <Header />
      <div className="container my-5 p-0">
        <Link to="/">
          <BackButton />
        </Link>
        <div className="row justify-content-between align-items-center">
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
                    <strong>Native name :</strong> belgue
                  </p>
                  <p>
                    <strong>population :</strong>21354354354
                  </p>
                  <p>
                    <strong>region :</strong> euro
                  </p>
                  <p>
                    <strong>sub region :</strong>western euro
                  </p>
                  <p>
                    <strong>capital :</strong>brusel
                  </p>
                </div>
                <div className="col-6">
                  <p>
                    <strong>top level domain:</strong>be
                  </p>
                  <p>
                    <strong>currencies :</strong> euro
                  </p>
                  <p>
                    <strong>languages:</strong> dutch,french,english
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <strong className="m-0">border countries :</strong>
                <div className="d-flex  gap-3">
                  <span className="shadow-sm py-1 px-4">france</span>
                  <span className="shadow-sm py-1 px-4">germany</span>
                  <span className="shadow-sm py-1 px-4">netherlands</span>
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
