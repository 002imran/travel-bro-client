import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";


const ServicesAllCard = ({ serviceAll }) => {
  console.log("from all service card", serviceAll);
  const { img, price, title, description } = serviceAll;

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
        <p className="text-lg font-semibold text-orange-600">{description}</p>
      </div>
    </div>
  );
};
export default ServicesAllCard;
