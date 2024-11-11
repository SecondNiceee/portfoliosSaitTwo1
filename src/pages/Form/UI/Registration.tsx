import React from 'react';
import SignUp from './SignUp';
import "./styles/_index.scss"
export const Registration = () => {
    return (
        <section className='user-init'>
            <div className="container">
                <header className='user-init__header'>Sign up</header>
                <SignUp />
            </div>
        </section>
    );
};
