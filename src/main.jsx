import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import "./index.css";
import CurrencyConvertor from "./projects/react_currencyConvertor/src/App";
import RandomPasswordGenerator from "./projects/react_passwordGenerator/src/App";

const router = createBrowserRouter([
  {
    path: "react-portfolio",
    element: <Home />,
  },
  {
    path: "/react-portfolio/currency-converter",
    element: <CurrencyConvertor />,
  },
  {
    path: "/react-portfolio/random-pwd-generator",
    element: <RandomPasswordGenerator />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
