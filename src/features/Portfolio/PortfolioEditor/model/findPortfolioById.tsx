import { useMemo } from 'react';
import { useAppSelector } from '../../../../shared/models';

const usePortfolioById = ({id} : {id:number}) => {
    const portfolios = useAppSelector(state => state.portfoliosSlice.portfolios)
    const portfolioById = useMemo( () => {
        return portfolios.find((e) => e.id === id)
    }  ,[ portfolios, id] )

    return portfolioById

};

export default usePortfolioById;