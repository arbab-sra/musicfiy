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
    <div className=" h-[350px] mb-14 mt-[70px]">
      <Hadding name="Video" lastname="Song" />
      <marquee direction="right" className="">
        <div className="flex justify-center items-center gap-5">
          {data &&
            data
              .sort(() => 0.5 - Math.random())
              .map((ele, index) => {
                return (
                  <Videocomponent
                    id={ele._id}
                    key={index}
                    image={ele.videwSongThemnail}
                    name={ele.mood}
                    views={ele.views}
                    title={ele.title}
                  />
                );
              })}
        </div>
        <div></div>
      </marquee>
    </div>
  );
};

export default Video;
