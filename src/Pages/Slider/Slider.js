import React from "react";
import slider1 from "../../assets/images/slider/cover-3.png";
import banner2 from "../../assets/images/slider/banner2.png";
const Slider = () => {
  return (
  
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl dark:text-white">
            Lets Join With
            <span className="text-orange-900">TravelBro</span>
          </h1>
          <p class="max-w-2xl mb-6  text-gray-500 lg:mb-8 md:text-lg lg:text-2xl font-semibold dark:text-gray-400">
            Hi, Im Your Favourite Travel Bro H Asif, Join with me for my next
            tour to Cox's Bazar this winter
          </p>

          <p
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center
             text-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-green-500 dark:text-white
              dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 bg-green-500"
          >
            For Details
          </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={banner2} alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Slider;
