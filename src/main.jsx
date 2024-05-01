import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

const baseURL = import.meta.env.DEV ? import.meta.env.BASE_API_URL_DEV : import.meta.env.BASE_API_URL_PROD;

axios.defaults.baseURL = baseURL;

console.log(baseURL);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
