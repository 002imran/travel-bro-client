import React from 'react';

const Footer = () => {
    return (
      <footer className="p-4 shadow md:px-6 md:py-8 bg-green-500 text-white mt-96 h-screen">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            {/* <img
              src={Logo}
              className="mr-3 h-8"
              alt="Flowbite Logo"
              className="h-14 w-14 rounded-full cursor-pointer"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TravelBro
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center">
          © 2022
          <a href="https://flowbite.com/" className="hover:underline">
            TravelBro
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    );
};

export default Footer;