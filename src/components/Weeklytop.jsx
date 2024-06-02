import { FaCirclePlus } from "react-icons/fa6";
import image from "../assets/Rectangle.png";
import Card from "./Card";
import Hadding from "./Hadding";
import { Link } from "react-router-dom";
import { IoMusicalNotesOutline } from "react-icons/io5";
const Weeklytop = ({secondhadding ,firsthadding}) => {
  return (
    <div className="flex justify-center items-center w-[1060px] mb-7 overflow-hidden ">
      <div className="cardsparant flex justify-between relative gap-1 w-full items-center">
        <div className="w-[92%] pr-8 pl-9  overflow-hidden ">
          <Hadding name={firsthadding} lastname={secondhadding} />
          <div className="flex mt-9 m-auto  mb-9 justify-center items-center w-full  h-[245px]  ">
          <Card image={image} icon={<IoMusicalNotesOutline color="white" size={"15px"} />} />
          <Card image={image} icon={<IoMusicalNotesOutline color="white" size={"15px"} />} />
          <Card image={image} icon={<IoMusicalNotesOutline color="white" size={"15px"} />} />
          <Card image={image} icon={<IoMusicalNotesOutline color="white" size={"15px"} />} />
          <Card image={image} icon={<IoMusicalNotesOutline color="white" size={"15px"} />} />

          </div>
        </div>
        <div className=" absolute h-full  flex justify-center items-center top-0 right-0">
          <Link className="w-[85px] h-[90px] flex justify-center items-center flex-col hover:text-purple-500  ">
            <FaCirclePlus size={"63px"}  /> <h3>View All</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Weeklytop;
