import DarkMode from "../DarkMode/DarkMode";
function Header() {
  return (
    <div className="navbar navbar-expand-md navbar-dark sticky-top bg-white">
      <div className="container p-0">
        <h4 className="my-0 py-2">Where in the world?</h4>
        <DarkMode />
      </div>
    </div>
  );
}

export default Header;
