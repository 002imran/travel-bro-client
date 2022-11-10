import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";


const ServicesAllCard = ({ serviceAll }) => {
  console.log("from all service card", serviceAll);
  const { img, price, title, description,_id } = serviceAll;

  return (
    <div className="card w-4/3 bg-base-100 shadow-xl m-10 ">
      <div className="m-5">
        <figure className="px-10 pt-10 bg-slate-200">
          <PhotoProvider
            speed={() => 800}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
          >
            <div>
              <PhotoView src={img}>
                <img src={img} style={{ objectFit: "cover" }} alt="" />
              </PhotoView>
            </div>
          </PhotoProvider>
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
          <Link to={`/servicesDetails/${_id}`}> View Details</Link>
        </button>
      </div>
    </div>
  );
};
export default ServicesAllCard;
