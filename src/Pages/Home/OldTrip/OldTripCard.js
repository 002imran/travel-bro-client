import React from "react";

const OldTripCard = ({ trip }) => {
  console.log("from trip", trip);
  const { img } = trip;

  return (
    <div className="card w-4/3 bg-base-100 shadow-xl m-10 ">
      <div className="m-5">
        <figure className="px-10 pt-10 bg-slate-200">
          <img src={img} alt="" />
        </figure>
      </div>
      
    </div>
  );
};
export default OldTripCard;
