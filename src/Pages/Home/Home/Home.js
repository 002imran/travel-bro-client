import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
// import ServiceCard from '../Services/ServiceCard';
import Services from '../Services/Services';
// import ServicesAll from '../Services/ServicesAll';

const Home = () => {
    return (
      <div>
        <Banner />
        {/* <ServiceCard /> */}
        <Services />

        <Link to="/services">
          {/* <ServicesAll> */}
               See All

          {/* </ServicesAll> */}
        </Link>
      </div>
    );
};

export default Home;