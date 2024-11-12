import React, { useState, useEffect, ReactNode, FC } from 'react';
import { useLocation } from 'react-router-dom';
import RouteHistoryContext from '../context/RouteHistoryContext';

interface IRouteHistoryProvider{
    children : ReactNode
}
const RouteHistoryProvider:FC<IRouteHistoryProvider> = ({ children }) => {

  const [routeHistory, setRouteHistory] = useState<string[]>([]);
  
  const location = useLocation();

  useEffect(() => {
    setRouteHistory((prevHistory) => [...prevHistory, location.pathname]);
  }, [location.pathname]);

  return (
    <RouteHistoryContext.Provider value={routeHistory}>
      {children}
    </RouteHistoryContext.Provider>
  );
};

export default RouteHistoryProvider;