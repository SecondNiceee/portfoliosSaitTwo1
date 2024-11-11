import { useAppSelector } from "../../../shared/models";
import { PortfolioList } from "../../../widgets/PortfoliosList";
import NoPortfolios from "./NoPortfolios";

const PortfoliosBlock = () => {

    const portfolios = useAppSelector( state => state.portfoliosSlice.portfolios )
    return (
        <div className='portfolios__block' >
                {portfolios.length ? <PortfolioList /> : <NoPortfolios />}
        </div>
    );
};

export default PortfoliosBlock;