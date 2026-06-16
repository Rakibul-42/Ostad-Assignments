import React, { useState } from 'react';
import ServiceDetails from './ServiceDetails';

const ServiceList = () => {
  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
  ];
    const [category , setCategory] = useState(services[0])
  const getCategory = (category) =>{
    setCategory(category);
  }  
  
  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <ul className='flex justify-around'>
        {services.map((service, index) => (
          <button onClick={(e)=>{getCategory(service)}} key={index} className="text-gray-700 mb-2 btn">{service}</button>
        ))}
      </ul>
      <div className='w-8/12 mx-auto my-4'>
          {<ServiceDetails service={category}/>}
      </div>
    </div>
  );
};

export default ServiceList;
