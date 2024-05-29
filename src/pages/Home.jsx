import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Crasul from "../components/Crasul";
import Weeklytop from "../components/Weeklytop";

const Home = () => {
  return (
    <div className="flex m-auto h-[3810px] min-w-[1400px] max-w-[1440px] overflow-x-hidden  bg-gradient-to-tr from-[#412C3A] to-[#533248] ">
      <div>
        <Sidebar />
      </div>

      <div className="ml-auto mr-auto">
        <Navbar />

        <Crasul />

        <Weeklytop />
      </div>
    </div>
  );
};

export default Home;
