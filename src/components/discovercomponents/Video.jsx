import { Link, resolvePath } from "react-router-dom";
import image from "../../assets/3.png";
import Hadding from "../Hadding";

import Videocomponent from "./Videocomponent";
import { FaCirclePlus } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { Allsong } from "../../constext/useContext";

const Video = () => {
  const [data, setdata] = useState([]);
  const { Videosong } = useContext(Allsong);
  useEffect(() => {
    if (Videosong.length > 0) {
      setdata(Videosong);
    }
  }, [Videosong]);
  return (
    <div className="h-[578px] mb-14 mt-[40px]">
      <Hadding name="Video" lastname="Song" />
      <marquee className=" mt-8  w-full flex justify-between p-2 items-center m-auto">
      <div className="flex justify-center items-center gap-8 overflow-x-auto">
      {data && data.map((ele, index) => {
        console.log(ele);
         return <Videocomponent
         key={ele._id}
          image={ele.videwSongThemnail}
          name={"Video"}
          views={"100k views"}
          title={ele.title}
          id ={ele._id}
        />
         
       })
       }
      </div>
       
      </marquee>
    </div>
  );
};

export default Video;
