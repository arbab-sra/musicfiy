import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Videocomponent from "./Videocomponent";
import Hadding from "./Hadding";
import { Allsong } from "../constext/useContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import Joinplatform from "./Joinplatform";
import axios from "axios";
import { BACKEND_URL } from "../../context";
const Videoplayer = () => {
  const [data, setdata] = useState([]);
  const [currentvideourl, setcurrentvideourl] = useState({});
  const { Videosong } = useContext(Allsong);
  const { id } = useParams();

  const navgate = useNavigate();
  const handalendvideo = () => {
    let random = Math.floor(Math.random() * data.length);
    navgate(`/video/${data[random].mood}/${data[random]._id}`);
  };

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
  }, [id, data]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/songs/singlevideosong?id=${id}`);
  }, [id]);
  return (
    <div className=" w-[1100px] mt-5">
      <div className={`w-full h-[600px] shadow-2xl  `}>
        <ReactPlayer
          // style={{boxShadow:"white -2px 20px -30px"}}
          url={currentvideourl}
          playing={true}
          width={"100%"}
          autoPlay={true}
          onEnded={handalendvideo}
          height="100%"
          controls
        />
      </div>
      <div className="w-[1060px]  mb-14 mt-[70px]">
        <Hadding name="Video" lastname="Song" />
        <div className=" mt-8  w-full flex justify-between  flex-wrap p-2 items-center m-auto">
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
