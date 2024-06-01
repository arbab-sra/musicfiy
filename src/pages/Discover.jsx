
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Discover = () => {
  return (
    <div className="flex m-auto h-[4360px] min-w-[1400px] max-w-[1440px] overflow-x-hidden  bg-gradient-to-tr from-[#412C3A] to-[#533248] ">
      <div className="h-full">
        <Sidebar />
      </div>

      <div className="ml-auto h-full mr-auto">
        <Navbar />
      </div>
    </div>
  );
};

export default Discover;
