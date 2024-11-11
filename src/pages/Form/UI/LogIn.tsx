import React from 'react';
import SignIn from './SignIn';

export const LogIn = () => {
    return (
        <section className='user-init'>
            <div className="container">
                <header className='user-init__header'>Sign in</header>
                <p className='user-init__helper'>To log in, use email : "col@gmail.com" ,
                password : "123456"</p>
                <SignIn />
            </div>
        </section>
    );
};

