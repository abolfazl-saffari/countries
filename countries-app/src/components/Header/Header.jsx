import DarkMode from "../DarkMode/DarkMode";

function Header({ changeTheme, darkMode }) {
  return (
    <div
      className={`navbar navbar-expand-md sticky-top ${
        darkMode ? "dark-cards" : "light-cards"
      }`}
    >
      <div className="container p-0">
        <h4 className="my-0 py-2">Where in the world?</h4>
        <DarkMode changeTheme={changeTheme} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default Header;
