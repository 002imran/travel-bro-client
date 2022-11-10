import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingServices = () => {
    return (
      <div className="m-20 bg-slate-200 p-20 m">
        <h2 className="text-3xl text-red-600"> NEW SERVICES IS LOADING.. </h2>
        <p>
          Explore all new services, if you take these services for first time
          will get 50% bonus!
        </p>
        <div className="grid py-5 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-2 md:px-6">
          <ul aria-labelledby="mega-menu-full-dropdown-button">
            <li>
              <p
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <div className="font-semibold text-2xl">
                  Online Sea Food Delivary
                </div>
                <span className="text-xl font-light text-gray-500 dark:text-gray-400">
                  I will start deliver some specific sea food for my travel
                  friends, You can test your favourite sea food from here.
                </span>
              </p>
            </li>
          </ul>
          <ul aria-labelledby="mega-menu-full-dropdown-button">
            <li>
              <p
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <div className="font-semibold text-2xl">Travel Accesories</div>
                <span className="text-xl font-light text-gray-500 dark:text-gray-400">
                  Some Quality Travel Accerosies Will add so soon,You ca buy
                  your favourite tour Accerosies from here.
                </span>
              </p>
            </li>
          </ul>
        </div>
        <p>
          <Link to='/login'
        
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center
             text-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-green-500 dark:text-white
              dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 bg-green-500"
          >
            Subscribe Me
          </Link>
        </p>
      </div>
    );
};

export default UpcomingServices;