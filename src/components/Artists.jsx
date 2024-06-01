import Artistcard from "./Artistcard";
import Hadding from "./Hadding";
import image from "../assets/3.png";

import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
const Artists = () => {
  return (
    <div className="w-[1060px] mb-14 h-[262px]">
      <Hadding name={"Popular"} lastname={"Artists"} />
      <div className="flex justify-center items-center w-[1060px]  p-3 h-[262px]">
        <div className="w-full h-full  p-1 overflow-hidden  gap-5 flex justify-center items-center">
          <Artistcard image={image} name={"Artist"} />
          <Artistcard image={image} name={"Artist"} />
          <Artistcard image={image} name={"Artist"} />
          <Artistcard image={image} name={"Artist"} />
          <Artistcard image={image} name={"Artist"} />
          <Artistcard image={image} name={"Artist"} />
        </div>
        <Link className="w-[85px] h-[90px] hover:text-purple-500 flex justify-center items-center flex-col   ">
          <FaCirclePlus size={"63px"}  /> <h3 >View All</h3>
        </Link>
      </div>
    </div>
  );
};

export default Artists;
