import Albumcom from "../components/albumscomponets/Album";
import Sidebar from "../components/Sidebar";
import Joinplatform from "../components/Joinplatform";
const Album = () => {
  return (
    <div className="flex m-auto h-[3100px] border min-w-[1400px] max-w-[1440px] overflow-x-hidden  bg-gradient-to-tr from-[#412C3A] to-[#533248] ">
      <div className="h-full">
        <Sidebar />
      </div>

      <div className="ml-auto h-full mr-auto">
        <Albumcom />
        <Joinplatform />
      </div>
    </div>
  );
};

export default Album;
