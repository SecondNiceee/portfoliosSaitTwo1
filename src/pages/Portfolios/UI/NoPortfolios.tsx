import { Link } from 'react-router-dom';

const NoPortfolios = () => {
    return (
        <div className='no-portfolios'>
            <p className='no-portfolios__text'>U have not portfolios. To create yout first portfollio, go to <Link className='create-link' to={"/create"}>create.</Link></p>           
        </div>
    );
};

export default NoPortfolios;