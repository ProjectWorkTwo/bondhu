import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainRoutes from "./Routers/MainRoutes.jsx";
import ProfilePopUpProvider from "./Providers/ProfilePopUpProvider.jsx";
import PageSideBarProvider from "./Providers/PageSideBarProvider.jsx";
import GroupSideBarProvider from "./Providers/GroupSideBarProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProfilePopUpProvider>
      <GroupSideBarProvider>
        <PageSideBarProvider>
          <MainRoutes>
            <App />
          </MainRoutes>
        </PageSideBarProvider>
      </GroupSideBarProvider>
    </ProfilePopUpProvider>
  </React.StrictMode>
);
