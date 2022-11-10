import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import OldTrip from '../OldTrip/OldTrip';
// import ServiceCard from '../Services/ServiceCard';
import Services from '../Services/Services';
import UpcomingServices from '../UpcomingServices/UpcomingServices';
// import ServicesAll from '../Services/ServicesAll';

const Home = () => {
    useTitle('Home');
    return (
      <div>
        <Banner />
         <Services />

        <Link to="/services">
           <p className='text-xl text-center'>See All</p>

         </Link>

        <OldTrip></OldTrip>
        <UpcomingServices></UpcomingServices>
      </div>
    );
};

export default Home;