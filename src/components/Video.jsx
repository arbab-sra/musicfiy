import { Link } from "react-router-dom";
import image from "../assets/2.jpg";
import Hadding from "./Hadding";

import Videocomponent from "./Videocomponent";
import { FaCirclePlus } from "react-icons/fa6";

const Video = () => {
  return (
    <div className="w-[1060px] h-[350px] mb-14 mt-[70px]">
      <Hadding name="Video" lastname="Song" />
      <div className=" mt-8  w-full flex justify-between p-2 items-center m-auto">
        <Videocomponent
          image={image}
          name={"Video"}
          views={"100k views"}
          title={"Video"}
        />
        <Videocomponent
          image={image}
          name={"Video"}
          views={"100k views"}
          title={"Video"}
        />
        <Videocomponent
          image={image}
          name={"Video"}
          views={"100k views"}
          title={"Video"}
        />
        <div>
          <Link className="w-[85px] hover:text-purple-500 h-[90px] flex justify-center items-center flex-col   ">
            <FaCirclePlus size={"63px"}  /> <h3>View All</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
