import { PortfolioEfitor } from '../../../features/Portfolio/PortfolioEditor';
import "./styles.scss";

export const Edit = () => {
    return (
        <section className='edit'>
            <div className="container">
                <PortfolioEfitor determiner='edit' />
            </div>
        </section>
    );
};
