import { Link } from "react-router-dom";
import Hadding from "./Hadding";
import Moodcomponet from "./Moodcomponet";
import { FaCirclePlus } from "react-icons/fa6";
const Mood = () => {
  return (
    <>
      <div className=" mt-14 mb-14 ">
        <Hadding name={"Mood"} lastname={"playlist"} />
        <div className="flex justify-between items-center">
          <div className="flex justify-center mt-6 items-center m-auto">
          <Moodcomponet mood={"Happy"} />
          <Moodcomponet mood={"Happy"} />
          <Moodcomponet mood={"Happy"} />
          <Moodcomponet mood={"Happy"} />
          <Moodcomponet mood={"Happy"} />
          </div>
          <Link className="w-[85px] h-[90px] hover:text-purple-500 flex justify-center items-center flex-col   ">
          <FaCirclePlus size={"63px"}  /> <h3 >View All</h3>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Mood;
