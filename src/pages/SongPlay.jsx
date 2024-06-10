
import Sidebar from "../components/Sidebar";
import "../index.css"
import AudioPlayer from "../components/AudioPlayer";
import {useParams} from "react-router-dom";
const SongPlay = () => {
    const { id , } = useParams();
    console.log(id);
  return (
    <div className="flex m-auto h-[4390px] min-w-[1400px] max-w-[1440px] overflow-x-hidden  bg-gradient-to-tr from-[#412C3A] to-[#533248] ">
      <div className="h-full">
        <Sidebar />
      </div>

      <div className="ml-auto h-full mr-auto">
        {/* <Navbar /> */}
        <AudioPlayer  />
      </div>
    </div>
  );
};

export default SongPlay;
