import { BiSearchAlt2 } from "react-icons/bi";
function SearchBox() {
  return (
    <div className="row justify-content-between align-items-center rounded-2 shadow col-5 bg-white ms-1 py-2">
      <BiSearchAlt2 className="m-0 p-0 h5 col-1" />
      <input
        className="py-2 border-0 col-11"
        style={{ outline: "0" }}
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchBox;
