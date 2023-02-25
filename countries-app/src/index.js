import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import SingleProduct from "./components/SingleProduct/SingleProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/name/:countryName" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
