import React from 'react';
import '../assets/CSS/ServicePage.css'
import ServicesApi from '../component/ServicePage/ServicesApi';
import ServiceHeader from '../component/ServicePage/ServiceHeader';


const Service = () => {
    return (
        <div className='service-parent-pages-level'>
            <ServiceHeader/>
            <ServicesApi/>
        </div>
    );
};

export default Service;
