import { BiArrowBack } from "react-icons/bi";
function BackButton({ darkMode }) {
  return (
    <div
      className={`d-flex justify-content-center align-items-center py-2 gap-3 mb-5 shadow rounded ${
        darkMode ? "dark-cards" : "light-cards"
      }`}
      style={{ width: "150px" }}
    >
      <BiArrowBack style={{ fontSize: "1.2rem" }} />
      <p className="m-0" style={{ fontSize: "1.2rem" }}>
        Back
      </p>
    </div>
  );
}

export default BackButton;
