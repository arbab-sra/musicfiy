import React from "react";
import { Link } from "react-router-dom";

const Musicgenracomponets = ({ image, tille, id }) => {
  return (
    <Link
      to={`/video/${tille}/${id}`}
      className="h-full w-[21%] flex justify-center items-center ml-2 mr-2 gap-3"
    >
      <Link className="h-full w-full relative ">
        <img className="object-contain" src={image} alt="" />
        <div className="w-[90%] border h-[40%]  bottom-4 left-[5%] flex justify-center items-center absolute">
          <h4 className="text-white text-2xl whitespace-nowrap overflow-hidden">
            {tille}
          </h4>
        </div>
      </Link>
    </Link>
  );
};
export default Musicgenracomponets;
