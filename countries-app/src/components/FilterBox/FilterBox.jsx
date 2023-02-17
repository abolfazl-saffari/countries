import { RiArrowDownSLine } from "react-icons/ri";
function FilterBox() {
  return (
    <div className="bg-white col-2 d-flex justify-content-around align-items-center shadow gap-5 rounded-2 pointer">
      Filter by Region
      <RiArrowDownSLine />
    </div>
  );
}

export default FilterBox;
