import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import UseSate from './UseSate';
import UseRef from './useRef';
import UseEffect from './UseEffect';

const Home = () => {
   

   

    return (
        <div className='container mx-7'>
            <Header />
            <h4 className='text-2xl text-center'>In the project section, we will use React<span className='font-bold'> useRef useState useEffect</span></h4>
            <UseSate/>
            <div className="divider"></div>
            <UseRef/>
            <div className="divider"></div>
            <UseEffect/>
        </div>
    );
};

export default Home;
