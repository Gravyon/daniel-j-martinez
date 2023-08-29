import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n/i18n.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback="...is loading">
    <App />
  </Suspense>
);
