import Sidebar from "../components/Sidebar";
import Videoplayer from "../components/Videoplayer";

const SongPlay = () => {
  return (
    <div className="flex m-auto min-h-[100vh] min-w-[1400px] max-w-[1440px] overflow-x-hidden  bg-gradient-to-tr from-[#412C3A] to-[#533248] ">
      <div className="">
        <Sidebar />
      </div>

      <div className="ml-auto h-full mr-auto">
        <Videoplayer />
      </div>
    </div>
  );
};

export default SongPlay;
