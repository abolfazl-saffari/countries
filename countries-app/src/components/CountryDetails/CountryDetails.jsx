function CountryDetails(props) {
  return (
    <div className="p-4 bg-white border-top rounded-bottom-1">
      <h5 className="mb-3">
        <strong className="country-name-text-overflow">{props.name}</strong>
      </h5>
      <p className="mb-1 ">
        <strong>Population:</strong> {props.population}
      </p>
      <p className="mb-1">
        <strong>Region:</strong> {props.region}
      </p>
      <p className="mb-1 d-flex gap-1">
        <strong>Capital:</strong>
        <span className="country-capital-text-overflow"> {props.capital}</span>
      </p>
    </div>
  );
}

export default CountryDetails;
