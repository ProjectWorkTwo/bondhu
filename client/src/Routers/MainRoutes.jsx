import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import GroupPage from "../Pages/GroupPage";
import SingleGroup from "../Pages/SingleGroup";
import PagePage from "../Pages/PagePage";
import SinglePage from "../Pages/SinglePage";
import Home from "../Pages/Home";

const MainRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/groups",
          element: <GroupPage />,
        },
        {
          path: "/group/:name",
          element: <SingleGroup />,
        },
        {
          path: "/pages",
          element: <PagePage />,
        },
        {
          path: "/page/:name",
          element: <SinglePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoutes;
