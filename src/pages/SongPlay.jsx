
import Sidebar from "../components/Sidebar";
import "../index.css"
import AudioPlayer from "../components/AudioPlayer";
import {useParams} from "react-router-dom";
import { useEffect } from "react";
import Joinplatform from "../components/Joinplatform"
const SongPlay = () => {
    const { id , } = useParams();
    console.log(id);
    useEffect(()=>{
      window.scrollTo(0,0)
    })
  return (
    <div className="flex m-auto h-[4390px] min-w-[1400px] max-w-[1440px] overflow-x-hidden  bg-gradient-to-tr from-[#412C3A] to-[#533248] ">
      <div className="h-full">
        <Sidebar />
      </div>

      <div className="ml-auto h-full mr-auto">
        <AudioPlayer  />
        <Joinplatform/>
      </div>
    </div>
  );
};

export default SongPlay;
