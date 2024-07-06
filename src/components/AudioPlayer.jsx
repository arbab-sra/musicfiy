import { useContext, useEffect, useRef, useState } from "react";
import "../index.css";
import { FaPlay } from "react-icons/fa";
import { FaPause, FaShuffle } from "react-icons/fa6";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineFlip } from "react-icons/md";
import { Allsong } from "../constext/useContext";
import { IoAdd } from "react-icons/io5";

import Trandingcompont from "./Trandingcompont";
import Hadding from "./Hadding";
import axios from "axios";
import { BACKEND_URL } from "../../context";
import { formatDate } from "../helper/format";
const AudioPlayer = () => {
  const [allowshaffle, setallowshaffle] = useState(false);
  const [Currentsongplay, setCurrentsongplay] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [themnail, setthemnail] = useState(null);
  const [artiest, setartiest] = useState(null);
  const [views, setviews] = useState(null);
  const [othersong, setothersong] = useState([]);
  const [showimg, setshowimg] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const { type, id } = useParams();
  const { weeklytop } = useContext(Allsong);
  const navigate = useNavigate();
  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration);
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    audio.currentTime = event.target.value;
    setCurrentTime(audio.currentTime);
  };

  const songendedhandler = () => {
    let index = 0;
    if (allowshaffle) {
      const random = Math.floor(Math.random() * othersong.length);
      setCurrentsongplay(othersong[random].url);
      setthemnail(othersong[random].themnail);
      setviews(othersong[random].views);
      setartiest(othersong[random].artist);
      navigate(`/${type}/${othersong[random]._id}`);
    } else {
      index += 1;
      if (index == othersong.length) {
        index = 0;
      }
      setCurrentsongplay(othersong[index].url);
      setthemnail(othersong[index].themnail);
      setviews(othersong[index].views);
      setartiest(othersong[index].artist);
      navigate(`/${type}/${othersong[index]._id}`);
    }
  };
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && Currentsongplay) {
      audio.play();
      setIsPlaying(true);
    }
  }, [Currentsongplay]);
  useEffect(() => {
    if (weeklytop.length > 0) {
      setothersong(weeklytop);

      weeklytop.forEach((element, index) => {
        console.log(index);
        if (element._id === id) {
          setCurrentsongplay(element.url);
          setthemnail(element.themnail);
          setviews(element.views);
          setartiest(element.artist);
        }
      });
    }
  }, [id, weeklytop]);
  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/songs/singlesong?id=${id}`);
  }, [id]);

  return (
    <>
      <div
        style={{
          background: `url(${"https://res.cloudinary.com/duns099gs/image/upload/v1719942728/themnail/kibklunfjufh5jlefnti.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "",
        }}
        className="flex border  bg-opacity-[0.1] flex-col justify-center  h-[500px] mt-4 w-[1060px]   items-center  text-white p-4 rounded-lg shadow-lg "
      >
        <div className="">
          <audio
            onEnded={songendedhandler}
            ref={audioRef}
            src={Currentsongplay}
            onTimeUpdate={handleTimeUpdate}
          />
        </div>
        <div className="w-[250px]  rotate  p-2 h-[250px] rounded-full flex justify-center items-center   relative"></div>
        <div className="text-center w-full font-bold t  h-[100px]  flex justify-between px-10 items-center   mb-4 mt-4">
          <div>
            <p className="text-xl">
              views:{" "}
              <span className="text-xl">
                {views > 1000 ? (views / 1000).toFixed() + " K" : views}
              </span>
            </p>
          </div>
          <div className=" ">
            <h3 className="text-2xl font-bold capitalize ">{artiest} </h3>

            <p className="text-xl">Musicify</p>
          </div>
          <div className=" h-[100px] w-[100px] mb-8">
            {isPlaying && (
              <iframe
                className=""
                width={"100px"}
                height={"100px"}
                src="https://lottie.host/embed/f8b12f60-0296-441e-8b18-d9420f67c622/5C6Jm7KMUP.json"
              ></iframe>
            )}
          </div>
          {/* <div className=" mb-9"><iframe src="https://lottie.host/embed/5eb82fc0-6319-4b92-9b14-605c1dbcf658/J9D0iUdu2D.json"></iframe></div> */}
        </div>
        <div className="flex  flex-col   items-center w-full mb-4">
          <input
            type="range"
            min="0"
            color="gray"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full  m-0  h-1 rounded-lg"
          />
          <div className="flex    justify-between w-full text-sm ">
            <span>
              {Math.floor(currentTime / 60)}:
              {Math.floor(currentTime % 60)
                .toString()
                .padStart(2, "0")}
            </span>
            <span>
              {Math.floor(duration / 60)}:
              {Math.floor(duration % 60)
                .toString()
                .padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="flex justify-around  w-full mb-4">
          <button
            onClick={() => setallowshaffle((pre) => !pre)}
            className=" hover:text-white text-fuchsia-700 text-2xl"
          >
            <FaShuffle color={allowshaffle ? "white" : "purple"} />
          </button>
          <button className=" hover:text-white text-fuchsia-700 text-2xl">
            <FaStepBackward />
          </button>
          <button
            onClick={handlePlayPause}
            className=" hover:text-white text-fuchsia-700 text-2xl"
          >
            {isPlaying ? (
              <FaPause color={isPlaying == true ? "white" : "purple"} />
            ) : (
              <FaPlay />
            )}
          </button>
          <button className=" hover:text-white text-fuchsia-700 text-2xl">
            <FaStepForward />
          </button>
          <button
            onClick={() => setallowshaffle((pre) => !pre)}
            className=" hover:text-white text-fuchsia-700 text-2xl"
          >
            <ImLoop color={allowshaffle == false ? "white" : "purple"} />
          </button>
        </div>
      </div>
      <div className="w-[1060px]  ">
        {type === "newrelisesong" && (
          <Hadding name={"New Relises "} lastname={"Song"} />
        )}
        {type === "weeklytopsong" && (
          <Hadding name={"Weekly Top "} lastname={"Song"} />
        )}
        {type === "tranding" && (
          <Hadding name={"Tranding "} lastname={"Song"} />
        )}
        {id === "arijit_sigh" && (
          <Hadding name={"arijit_sigh "} lastname={"Song"} />
        )}

        <div className=" dates w-[70%] h-[31px] ml-auto flex justify-between pl-8 pr-10  items-center">
          <div>
            <h4 className="font-sans text-white text-[15px]">Relises Date</h4>
          </div>
          <div>
            <h4 className="font-sans text-white text-[15px]">Album </h4>
          </div>
          <div>
            <h4 className="font-sans text-white text-[15px]">Time</h4>
          </div>
        </div>
        {/* trandingcompont */}
        {othersong.length > 0 &&
          othersong.map((ele, index) => {
            const date = formatDate(ele.updatedAt);

            return (
              <Trandingcompont
                key={ele._id}
                id={ele._id}
                type={type}
                rank={index + 1}
                name={ele.title}
                artistname={ele.artist}
                relisedata={date}
                duration={0}
                Album={ele.title}
                tranding={ele.themnail}
              />
            );
          })}
        <div className="w-[216px] bg-black flex mb-10 transition-all ease-in-out  hover:shadow-pink-500 hover:shadow-md cursor-pointer hover:translate-x-[2px] gap-3 justify-center items-center rounded-lg m-4 ml-auto mr-auto h-[63px]  ">
          <div className="text-white text-2xl h-[38px]  flex justify-center items-center w-[26px]">
            <strong>
              <IoAdd />
            </strong>
          </div>
          <div className="text-white text-xl h-[38px]  flex justify-center items-center w-[88px]">
            {" "}
            <strong>View All</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
