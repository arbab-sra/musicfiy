import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Videocomponent from "./Videocomponent";
import Hadding from "./Hadding";
import { Allsong } from "../constext/useContext";
import { Link, useParams } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import Joinplatform from "./Joinplatform";
const Videoplayer = () => {
  const [data, setdata] = useState([]);
  const [currentvideourl, setcurrentvideourl] = useState({});
  const { Videosong } = useContext(Allsong);
  const { id } = useParams();

  useEffect(() => {
    if (Videosong.length > 0) {
      setdata(Videosong);
    }
  }, [Videosong]);
  useEffect(() => {
    if (data.length > 0) {
      data &&
        data.map((ele) => {
          if (ele._id === id) {
            setcurrentvideourl(ele.videoSongUrl);
          }
        });
    }
  },[id,data]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="h-[550px] w-[1100px] border">
      <div className="w-full h-full">
        <ReactPlayer
          className="w-full h-full"
          url={currentvideourl}
          playing={true}
          width={"100%"}
          autoPlay={true}
          height="100%"
          controls
        />
      </div>
      <div className="w-[1060px] h-[350px] mb-14 mt-[70px]">
        <Hadding name="Video" lastname="Song" />
        <div className=" mt-8  w-full flex justify-between  flex-wrap p-2 items-center m-auto">
          {data &&
            data.map((ele, index) => {
              if (index < 18) {
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
              }
            })}

          <div>
            <div>
          <Link className="w-[85px] h-[90px] hover:text-purple-500 flex  mt-5 ml-auto mr-auto justify-center items-center flex-col   ">
            <FaCirclePlus size={"63px"} /> <h3>View All</h3>
          </Link>
        </div>
            <div>
              <Joinplatform />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videoplayer;
