import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
//import Context from "../poc/context/Context.jsx";
//import ThemeManager from "../poc/context/theme/ThemeManager.jsx";
//import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Context></Context> */}
      {/* <ThemeManager></ThemeManager> */}
    </BrowserRouter>
  </React.StrictMode>
);
