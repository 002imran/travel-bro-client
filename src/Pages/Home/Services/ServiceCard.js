import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  console.log("from service card", service);
  const { img, price, title,description } = service;

  return (
    <div className="card w-4/3 bg-base-100 shadow-xl m-10 ">
      <div className="m-5">
        <figure className="px-10 pt-10 bg-slate-200">
          <img src={img} alt="" className="h-56 w-full"/>
        </figure>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-lg font-semibold text-orange-600">${price}.00</p>
        <p className="text-lg font-semibold text-orange-600">
           {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={description}
        >
          <Link to='services/:id'> View Details</Link>
        </button>
      </div>
    </div>
  );
};
export default ServiceCard;
