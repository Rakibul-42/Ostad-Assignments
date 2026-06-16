import React from 'react';
import Header from '../../components/Header/Header';
import ServiceList from '../../components/service/ServiceList';
import PricingTable from '../../components/service/PricingTable';
import CallToAction from '../../components/service/CallToAction';


const Service = () => {
    return (
        <div>
            <Header />
            <ServiceList/>
            <PricingTable/>
            <CallToAction/>
        </div>
    );
};

export default Service;