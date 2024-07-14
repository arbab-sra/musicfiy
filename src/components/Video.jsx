import { Link } from "react-router-dom";
import Hadding from "./Hadding";
import Videocomponent from "./Videocomponent";
import { FaCirclePlus } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { Allsong } from "../constext/useContext";

const Video = () => {
  const [data, setdata] = useState([]);
  const { Videosong } = useContext(Allsong);
  useEffect(() => {
    if (Videosong.length > 0) {
      setdata(Videosong);
    }
  }, [Videosong]);
  return (
    <div className="w-[1060px] h-[350px] mb-14 mt-[70px]">
      <Hadding name="Video" lastname="Song" />
      <div className=" mt-8  w-full flex justify-between p-2 items-center m-auto">
        {data &&
          data.map((ele, index) => {
            if(index<3){
             return <Videocomponent
              id={ele._id}
              key={index}
              image={ele.videwSongThemnail}
              name={ele.mood}
              views={ele.views}
              title={ele.title}
            />
            }           
})}

        <div>
          <Link className="w-[85px] hover:text-purple-500 h-[90px] flex justify-center items-center flex-col   ">
            <FaCirclePlus size={"63px"} /> <h3>View All</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
