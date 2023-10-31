import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store1 from "./redux/store";
import User from "./components/normalComponents/User.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store1}>
    <App />
  </Provider>
);
