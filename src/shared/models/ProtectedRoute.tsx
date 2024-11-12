import { FC, useContext, useEffect } from 'react';
import { Navigate, Outlet, replace, useLocation, useNavigate } from 'react-router';
import { useAppSelector } from './reduxHooks';
import RouteHistoryContext from '../../app/context/RouteHistoryContext';
import useHistory from './useHistory';

interface IProtectedRoute{
  isUser : boolean; // Некоторые роуты должны не работать без юзера, а не которые должны не работать с ним
  redirectPath? : string
}
export const ProtectedRoute:FC<IProtectedRoute> = ({ isUser}) => {
    const user = useAppSelector(state => state.userSlice.user)
    const routeHistory = useHistory()
    const navigate = useNavigate()
    console.log(routeHistory)
    useEffect( () => {
      if ( (user && !isUser) || (!user && isUser) ){
        if (routeHistory.length > 1){
          navigate(routeHistory[routeHistory.length-2], {replace : true})
        }
        else{
          navigate("/" , {replace : true} )
        }
      }
    } , [user] )
  
    return <Outlet />;
  };
  