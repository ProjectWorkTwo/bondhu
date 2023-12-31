import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainRoutes from "./Routers/MainRoutes.jsx";
import ProfilePopUpProvider from "./Providers/ProfilePopUpProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProfilePopUpProvider>
      <MainRoutes>
        <App />
      </MainRoutes>
    </ProfilePopUpProvider>
  </React.StrictMode>
);
