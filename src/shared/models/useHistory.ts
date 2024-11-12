import { useContext } from 'react';
import RouteHistoryContext from '../../app/context/RouteHistoryContext';

const useHistory = () => {
    const data = useContext(RouteHistoryContext)
    if (!data){
        throw new Error("Can not 'useHistory' outside of the 'RouteHistoryProvider' ")
    }
    return data
};

export default useHistory;