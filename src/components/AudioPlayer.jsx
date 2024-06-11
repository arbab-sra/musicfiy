import { useContext, useEffect, useRef, useState } from "react";
import "../index.css";
import { FaPlay } from "react-icons/fa";
import { FaPause, FaShuffle } from "react-icons/fa6";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { useParams } from "react-router-dom";
import { MdOutlineFlip } from "react-icons/md";
import { Allsong } from "../constext/useContext";
import { IoAdd } from "react-icons/io5";
import Trandingcompont from "./Trandingcompont";
import Hadding from "./Hadding";
const AudioPlayer = () => {
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
  const { id } = useParams();
  const { song } = useContext(Allsong);

  // songdata.for
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

  useEffect(() => {
    setothersong(song);
    song.forEach((element) => {
      if (element._id === id) {
        setCurrentsongplay(element.url);
        setthemnail(element.themnail);
        setviews(element.views);
        setartiest(element.artist);
      }
    });
  }, [id, song]);
  return (
    <>
      <div className="flex flex-col justify-center   h-[500px] mt-4 w-[1060px]   items-center bg-[#16151595] text-white p-4 rounded-lg shadow-lg ">
        <div className="">
          <audio
            ref={audioRef}
            src={Currentsongplay}
            onTimeUpdate={handleTimeUpdate}
          />
        </div>
        <div className="w-[250px]  rotate bg-gradient-to-t from-[#953636] to-[ #363695]  p-2 bg-gradient-to-tr from-fuchsia-600 to-sky-600 h-[250px] rounded-full flex justify-center items-center   relative">
          <button
            onClick={() => setshowimg((val) => !val)}
            className=" bottom-3 right-4 z-50"
          >
            <MdOutlineFlip className="dark:text-white text-black" />
          </button>
          {showimg ? (
            themnail && (
              <img
                src={themnail}
                alt="Album Artwork"
                className="w-full h-full  absolute rounded-full  "
              />
            )
          ) : (
            <iframe
              className="absolute"
              width={"200px"}
              height={"200px"}
              src="https://lottie.host/embed/d397cae8-217d-4790-a267-4ac95e532263/lel1TX25Ae.json"
            ></iframe>
          )}
        </div>
        <div className="text-center w-full  h-[100px] border flex justify-between px-10 items-center   mb-4 mt-4">
          <div>
            <p>
              views: <span>{views}</span>
            </p>
          </div>
          <div className=" border">
            <h3 className="text-lg font-bold">{artiest} </h3>

            <p className="text-xs">Spotify</p>
          </div>
          <div>klsdafj</div>
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
          <button className=" hover:text-white text-fuchsia-700 text-2xl">
            <FaShuffle />
          </button>
          <button className=" hover:text-white text-fuchsia-700 text-2xl">
            <FaStepBackward />
          </button>
          <button
            onClick={handlePlayPause}
            className=" hover:text-white text-fuchsia-700 text-2xl"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className=" hover:text-white text-fuchsia-700 text-2xl">
            <FaStepForward />
          </button>
          <button className=" hover:text-white text-fuchsia-700 text-2xl">
            <ImLoop />
          </button>
        </div>
      </div>
      <div className="w-[1060px]  ">
        <Hadding name={"Weekly Top"} lastname={"Song"} />
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
        {othersong.map((ele, index) => {
          return (
            <Trandingcompont
              key={ele._id}
              id={ele._id}
              rank={index + 1}
              name={ele.title}
              artistname={ele.artist}
              relisedata={ele.releaseDate}
              duration={1}
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
