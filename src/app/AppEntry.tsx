

import { BrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./AppStore";
import "./styles/_index.scss";
import React from "react";
import { AppRouter } from "./AppRouter";


const AppEntry = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <AppRouter />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>
  );
};

export default AppEntry;
