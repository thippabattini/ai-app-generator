import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n/i18n";
import App from "./App";
import { Toaster } from "react-hot-toast";

import "./styles/global.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    <App />
  </React.StrictMode>
);