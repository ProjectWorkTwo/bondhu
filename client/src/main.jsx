import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainRoutes from "./Routers/MainRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainRoutes>
      <App />
    </MainRoutes>
  </React.StrictMode>
);
