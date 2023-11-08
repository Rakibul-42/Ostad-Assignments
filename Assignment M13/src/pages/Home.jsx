import React from 'react';

import '../assets/CSS/HomePage.css'
import LeapYear from '../component/HomePage/LeapYear';
import PositiveNegative from '../component/HomePage/PositiveNegative';
import Radius from '../component/HomePage/Radius';
import Temperature from '../component/HomePage/Temperature';

const Home = () => {
    

    return (
        <div className='home-page'>
            <h1 className='home-header'>Welcome to basic webpage</h1>
            <div className='home-parent-pages-level'>
                <PositiveNegative/>
                <LeapYear/>
            </div>
            <div className='home-parent-pages-level'>
                <Temperature/>
                <Radius/>
            </div>
        </div>
    );
};

export default Home;