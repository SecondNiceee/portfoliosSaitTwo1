import { FC } from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAppSelector } from './reduxHooks';

interface IProtectedRoute{
  isUser : boolean; // Некоторые роуты должны не работать без юзера, а не которые должны не работать с ним
  redirectPath? : string
}
export const ProtectedRoute:FC<IProtectedRoute> = ({ isUser, redirectPath = '/' }) => {
    const user = useAppSelector(state => state.userSlice.user)
    if ( (user && !isUser) || (!user && isUser)) {
      return <Navigate to={"/"} replace />;
    }
  
    return <Outlet />;
  };
  