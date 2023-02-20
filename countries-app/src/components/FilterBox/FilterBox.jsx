import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
function FilterBox({ countriesFilter, darkMode }) {
  const [showBox, setShowBox] = useState(false);
  const [filterBox, setFilterBox] = useState("Filter by Region");

  return (
    <div
      className={`col-2 position-relative p-0 user-select-none rounded-2 ${
        darkMode ? "dark-cards" : "light-cards"
      }`}
    >
      <div
        className="d-flex justify-content-between align-items-center shadow p-3 pointer"
        onClick={() => setShowBox(!showBox)}
      >
        {filterBox}
        <RiArrowDownSLine />
      </div>
      <ul
        className={`position-absolute m-0 px-3 py-2 shadow rounded-2 mt-1 ${
          showBox ? "d-block" : "d-none"
        }  ${darkMode ? "dark-cards" : "light-cards"}`}
        style={{ left: "0", right: "0" }}
      >
        <li
          style={{ listStyle: "none" }}
          className="pt-2 pointer"
          onClick={(e) => {
            setFilterBox(e.target.textContent);
            setShowBox(false);
            countriesFilter(e.target.textContent);
          }}
        >
          Africa
        </li>
        <li
          style={{ listStyle: "none" }}
          className="pt-2 pointer"
          onClick={(e) => {
            setFilterBox(e.target.textContent);
            setShowBox(false);
            countriesFilter(e.target.textContent);
          }}
        >
          Americas
        </li>
        <li
          style={{ listStyle: "none" }}
          className="pt-2 pointer"
          onClick={(e) => {
            setFilterBox(e.target.textContent);
            setShowBox(false);
            countriesFilter(e.target.textContent);
          }}
        >
          Asia
        </li>
        <li
          style={{ listStyle: "none" }}
          className="pt-2 pointer"
          onClick={(e) => {
            setFilterBox(e.target.textContent);
            setShowBox(false);
            countriesFilter(e.target.textContent);
          }}
        >
          Europe
        </li>
        <li
          style={{ listStyle: "none" }}
          className="pt-2 pointer"
          onClick={(e) => {
            setFilterBox(e.target.textContent);
            setShowBox(false);
            countriesFilter(e.target.textContent);
          }}
        >
          Oceania
        </li>
      </ul>
    </div>
  );
}

export default FilterBox;
