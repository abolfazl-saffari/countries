import CountryDetails from "../CountryDetails/CountryDetails";

function CountryCard(props) {
  console.log(props.countryData);

  return (
    <div className="shadow d-flex flex-column pointer">
      <img
        src={props.countryData.flags.png}
        alt={props.countryData.name.official}
        className="rounded-top-1"
      />
      <CountryDetails
        name={props.countryData.name.common}
        population={props.countryData.population}
        region={props.countryData.region}
        capital={props.countryData.capital}
      />
    </div>
  );
}
export default CountryCard;
