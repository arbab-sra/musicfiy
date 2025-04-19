import Sidebar from "../components/Sidebar";
import "../index.css";
import AudioPlayer from "../components/AudioPlayer";

// import { useEffect } from "react";
import Joinplatform from "../components/Joinplatform";
const SongPlay = () => {

  return (
    <div className="flex m-auto  overflow-hidden h-auto bg-gradient-to-tr from-[#412C3A] to-[#533248] ">
      <div className="h-auto bg-[#0E1920]">
        <Sidebar />
      </div>

      <div className="ml-auto h-auto mr-auto">
        <AudioPlayer />
        <Joinplatform />
      </div>
    </div>
  );
};

export default SongPlay;
