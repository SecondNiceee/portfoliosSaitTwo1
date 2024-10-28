import React from 'react';
import { porfolios } from '../../config';
import Portfolio from '../components/Portfolio';

const Portfolios = () => {
    return (
        <section className='portfolios'>
            <div className="container">
                <header className='portfolios__header'>Top Rated Portfolios</header>
                <div className="portfolios__portfolios">
                    {porfolios.map( (e, i) => {
                        return (
                            <Portfolio description={e.description} image={e.image} place={e.place} title={e.title} key={i} />
                        )
                    } )}
                </div>
            </div>
        </section>
    );
};

export default Portfolios;