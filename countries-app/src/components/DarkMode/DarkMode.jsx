import { BsMoon, BsMoonFill } from "react-icons/bs";

function DarkMode({ changeTheme, darkMode }) {
  return (
    <div
      className="d-flex gap-2 align-items-center pointer user-select-none"
      onClick={() => changeTheme()}
    >
      {darkMode ? <BsMoonFill /> : <BsMoon />}
      <h6 className="m-0">Dark Mode</h6>
    </div>
  );
}

export default DarkMode;
