import "./Portfolios.scss";
import PortfoliosBlock from "./PortfoliosSection";
export const Portfolios = () => {
  return (
    <section className="portfolios-page">
      <div className="container">
        <header className="portfolios__header">All Portfolios</header>
        <div className="portfolio__checker">
          <PortfoliosBlock />
        </div>
      </div>
    </section>
  );
};
