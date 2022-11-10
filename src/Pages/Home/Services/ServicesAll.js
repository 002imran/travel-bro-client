import React, { useEffect, useState } from 'react';
import ServicesAllCard from './ServicesAllCard';


const ServicesAll = () => {
  const [servicesAll, setServicesAll] = useState([]);

  useEffect(() => {
    fetch("https://travel-server-002imran.vercel.app/services/all")
      .then((res) => res.json())
      .then((data) => setServicesAll(data));
  }, []);

  return (
    

    <div>
      <div className="text-center my-5 mb-6">
        <h2 className="text-5xl font-semibold text-orange-900">MY SERVICES</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesAll.map((serviceAll) => (
          <ServicesAllCard
            key={serviceAll._id}
            serviceAll={serviceAll}
          ></ServicesAllCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesAll;