import PortfoliosChecker from './PortfoliosChecker';
import "./Portfolios.scss";
export const Portfolios = () => {
    return (
        <section className='portfolios-page'>
            <div className="container">
                <header className='portfolios__header'>
                    All Portfolios
                </header>
                <PortfoliosChecker />
            </div>
        </section>
    );
};
