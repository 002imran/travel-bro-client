import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    
   useEffect(() => {
       fetch("https://travel-server-002imran.vercel.app/services")
       .then((res) => res.json())
       .then((data) => setServices(data));
   }, []);


    return (
      <div>
        <div className="text-center my-5 mb-6">
         
          <h2 className="text-5xl font-semibold text-orange-900">MY SERVICES</h2>
       
        </div>
       


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
          
        </div>
      </div>
    );
};

export default Services;