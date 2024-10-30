import React from 'react';
import Idea from './sections/Idea';
import "./Home.scss";
import Process from './sections/Process';
import Portfolios from './sections/Portfolios';
import Recent from './sections/Recent';
import Reachable from './sections/Reachable';
const Home = () => {
    return (
        <main className='Home'>
            <Idea />
            <Process />
            <Portfolios />
            <Recent />
            <Reachable />
        </main>
    );
};

export {Home};