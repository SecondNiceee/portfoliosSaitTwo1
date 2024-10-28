import React from 'react';
import {  createBrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { BaseLayout } from './layout';

export const AppRouter = () => {

        return createBrowserRouter([
            {
              element: <BaseLayout />,
              errorElement: <div>Error happened</div>,
              children: [
                {
                  path: '/',
                  element: (
                    <Home />
                  ),
                }
              ],
            }
          ])
};

