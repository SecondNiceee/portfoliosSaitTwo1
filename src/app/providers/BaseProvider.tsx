import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RouteHistoryProvider from './RouteHistoryProvider';
import { store } from '../AppStore';

interface IBaseProvider{
    children : ReactNode
}
const BaseProvider:FC<IBaseProvider> = ({children}) => {
    return (
       <BrowserRouter>
            <Provider store={store}>
                <RouteHistoryProvider>
                    <React.StrictMode>
                        {children}
                    </React.StrictMode>
                </RouteHistoryProvider>
            </Provider>
      </BrowserRouter>
    );
};

export default BaseProvider;