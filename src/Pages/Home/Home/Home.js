import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import OldTrip from '../OldTrip/OldTrip';
// import ServiceCard from '../Services/ServiceCard';
import Services from '../Services/Services';
import UpcomingServices from '../UpcomingServices/UpcomingServices';
// import ServicesAll from '../Services/ServicesAll';

const Home = () => {
    return (
      <div>
        <Banner />
        {/* <ServiceCard /> */}
        <Services />

        <Link to="/services">
          {/* <ServicesAll> */}
          <p className='text-xl'>See All</p>

          {/* </ServicesAll> */}
        </Link>

        <OldTrip></OldTrip>
        <UpcomingServices></UpcomingServices>
      </div>
    );
};

export default Home;