import { PortfolioEfitor } from '../../../features/Portfolio/PortfolioEditor';
import CreateChecker from './CreateChecker';
import "./styles.scss";

export const Create = () => {
    
    return (
        <section className='create'>
            <div className="container">
                    <CreateChecker />
            </div>
        </section>
    );
};
