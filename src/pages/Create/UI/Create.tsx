import { PortfolioEfitor } from '../../../features/Portfolio/PortfolioEditor';
import "./styles.scss";

export const Create = () => {
    return (
        <section className='create'>
            <div className="container">
                    <PortfolioEfitor determiner='create' />
            </div>
        </section>
    );
};
