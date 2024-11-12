import React from 'react';
import User from '../components/User';
import Reveal from '../../../../shared/ui/Reveal/Reveal';

const Recent = () => {
    return (
        <section className='recent'>
            <Reveal className="container">
                <header className="recent__header">
                Recent Users
                </header>
                <div className="recent__users">

                    {Array.from({length : 10}).map( (e, i) => {
                        return (
                            <User />
                        )
                    } )}
                </div>
            </Reveal>
        </section>
    );
};

export default Recent;