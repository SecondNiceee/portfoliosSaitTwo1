

import { AppRouter } from "./AppRouter";
import { RouterProvider } from "react-router-dom";
import "./styles/_index.scss";
import React from "react";


const AppEntry = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={AppRouter()} />
    </React.StrictMode>
  );
};

export default AppEntry;
