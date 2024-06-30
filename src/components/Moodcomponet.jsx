import { Link } from "react-router-dom";
import image from "../assets/1.png";
import { PiPlaylist } from "react-icons/pi";

const Moodcomponet = ({ mood ,id }) => {
  return (
    <Link to = {`/mood/${mood}/${id}`} className="w-[180px]  hover:shadow-sm hover:shadow-purple-500 mt-4  m-2 p-1 flex flex-col justify-center items-center pt-4 h-full bg-[#1F1F1F] ">
      <div className="w-[150px]  h-[190px] border overflow-hidden relative ">
        <div className="absolute ml-[5px] w-[140px] h-[50px] border-2 bottom-2 flex justify-center items-center border-purple-500">
          <h4 className=" z-50 text-white text-2xl font-mono font-extralight">
            {mood}
          </h4>
        </div>
        <img className="object-cover contrast-150" src={image} alt="" />
      </div>
      <div className="flex justify-between  m-auto w-[90%] mt-4 mb-3 items-center">
        <div className="border w-[100px] h-[30px] flex justify-center items-center ">
          <h3 className="text-white whitespace-nowrap overflow-hidden text-[15px] ">
            {mood}
          </h3>
        </div>
        <div>
          <PiPlaylist className="border" color="purple" size={"27px"} />
        </div>
      </div>
    </Link>
  );
};

export default Moodcomponet;
