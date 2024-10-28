import React from 'react';
import Idea from './sections/Idea';
import "./Home.scss";
import Process from './sections/Process';
const Home = () => {
    return (
        <main className='Home'>
            <Idea />
            <Process />
        </main>
    );
};

export {Home};