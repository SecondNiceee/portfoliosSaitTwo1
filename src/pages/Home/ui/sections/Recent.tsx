import React from 'react';
import User from '../components/User';

const Recent = () => {
    return (
        <section className='recent'>
            <div className="container">
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
            </div>
        </section>
    );
};

export default Recent;