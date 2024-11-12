import cl from "./PortfolioList.module.scss"
import { useAppSelector } from '../../../shared/models';
import { PortfolioCard } from '../../../entities/profile';
export const PortfolioList = () => {
    const portfolios = useAppSelector( state => state.portfoliosSlice.portfolios )
    return (
        <div className={cl.portfolioList}>
            {portfolios.map( (e) => {
                return (
                    <PortfolioCard portfolio={e} />
                )
            } )}
        </div>
    );
};
