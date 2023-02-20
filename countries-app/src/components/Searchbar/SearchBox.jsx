import { BiSearchAlt2 } from "react-icons/bi";
function SearchBox({ searchCountyBox, darkMode }) {
  return (
    <div
      className={`row justify-content-between align-items-center rounded-2 shadow col-5 ms-1 py-2 ${
        darkMode ? "dark-cards" : "light-cards"
      }`}
    >
      <BiSearchAlt2 className="m-0 p-0 h5 col-1" />
      <input
        onChange={(e) => searchCountyBox(e.target.value)}
        className={`py-2 border-0 col-11 ${
          darkMode ? "dark-cards" : "light-cards"
        }`}
        style={{ outline: "0" }}
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchBox;
