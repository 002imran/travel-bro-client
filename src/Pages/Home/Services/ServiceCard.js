import React from "react";

const ServiceCard = ({ service }) => {
  console.log("from service card", service);
  const { img, price, title,description } = service;

  return (
    <div className="card w-4/3 bg-base-100 shadow-xl m-10 ">
      <div className="m-5">
        <figure className="px-10 pt-10 bg-slate-200">
          <img src={img} alt="" />
        </figure>
       </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl font-bold text-gray-800">
          {title}
        </h2>
        <p className="text-lg font-semibold text-orange-600">${price}.00</p>
        <p className="text-lg font-semibold text-orange-600">{description}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
