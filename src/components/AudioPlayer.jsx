import { useContext, useRef, useState } from "react";
import img from "../assets/4.png";
import "../index.css";
import { FaPlay } from "react-icons/fa";
import { FaPause, FaShuffle } from "react-icons/fa6";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { useParams } from "react-router-dom";
import { MdOutlineFlip } from "react-icons/md";
import { WeeklyTopSongContext } from "../constext/useContext";
const AudioPlayer = () => {
  const { id } = useParams();
  const { song } = useContext(WeeklyTopSongContext);

  song.forEach((element) => {
    if (element._id === id) {
      console.log(element);
    }
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [showimg, setshowimg] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
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

  return (
    <div className="flex flex-col justify-center   h-[500px] mt-4 w-[1060px]   items-center bg-[#16151595] text-white p-4 rounded-lg shadow-lg ">
      <div className="">
        <audio
          ref={audioRef}
          src="https://res.cloudinary.com/duns099gs/video/upload/v1717605432/audio/pp50lakxh2zlbvpnvk6x.mp3"
          onTimeUpdate={handleTimeUpdate}
        />
      </div>
      <div className="w-[250px]  rotate bg-gradient-to-t from-[#953636] to-[ #363695]  p-2 bg-gradient-to-tr from-fuchsia-600 to-sky-600 h-[250px] rounded-full flex justify-center items-center   relative">
        <button
          onClick={() => setshowimg((val) => !val)}
          className="absolute bottom-3 right-4 z-50"
        >
          <MdOutlineFlip />
        </button>
        {showimg ? (
          <img
            src={img}
            alt="Album Artwork"
            className="w-full h-full   rounded-full  "
          />
        ) : (
          <iframe
            className=""
            width={"200px"}
            height={"200px"}
            src="https://lottie.host/embed/d397cae8-217d-4790-a267-4ac95e532263/lel1TX25Ae.json"
          ></iframe>
        )}
      </div>
      <div className="text-center w-[40%] h-[14%]  mb-4 mt-4">
        <h3 className="text-lg font-bold">jass manak </h3>

        <p className="text-xs">Spotify</p>
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
        <button className="text-white text-2xl">
          <FaShuffle />
        </button>
        <button className="text-white text-2xl">
          <FaStepBackward />
        </button>
        <button onClick={handlePlayPause} className="text-white text-2xl">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button className="text-white text-2xl">
          <FaStepForward />
        </button>
        <button className="text-white text-2xl">
          <ImLoop />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
