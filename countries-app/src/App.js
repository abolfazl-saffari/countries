import { useState } from "react";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function changeTheme() {
    setDarkMode(!darkMode);
    if (document.body.classList.contains("dark-backGround")) {
      document.body.classList.remove("dark-backGround");
      document.body.classList.add("light-backGround");
    } else if (document.body.classList.contains("light-backGround")) {
      document.body.classList.remove("light-backGround");
      document.body.classList.add("dark-backGround");
    }
  }

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home changeTheme={changeTheme} darkMode={darkMode} />}
      />
      <Route
        exact
        path="/name/:countryName"
        element={
          <SingleProduct changeTheme={changeTheme} darkMode={darkMode} />
        }
      />
    </Routes>
  );
}

export default App;
