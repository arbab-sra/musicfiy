import Sidebar from "../components/Sidebar";
import Videoplayer from "../components/Videoplayer";

const SongPlay = () => {
  return (
    <div className="flex m-auto h-auto overflow-hidden w-full bg-gradient-to-tr from-[#412C3A] to-[#533248] ">
      <div className="w-auto bg-[#0E1920]">
        <Sidebar />
      </div>

      <div className="ml-auto w-full h-full mr-auto">
        <Videoplayer />
      </div>
    </div>
  );
};

export default SongPlay;
