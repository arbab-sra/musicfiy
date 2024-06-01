import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Crasul from "../components/Crasul";
import Weeklytop from "../components/Weeklytop";
import Newrelises from "../components/Newrelises";
import Tranding from "../components/Tranding";
import Artists from "../components/Artists";
import Album from "../components/Album";
import Mood from "../components/Mood";
import Video from "../components/Video";
import Joinplatform from "../components/Joinplatform";

const Home = () => {
  return (
    <div className="flex m-auto h-[4360px] min-w-[1400px] max-w-[1440px] overflow-x-hidden  bg-gradient-to-tr from-[#412C3A] to-[#533248] ">
      <div className="h-full">
        <Sidebar />
      </div>

      <div  className="ml-auto h-full mr-auto">
        <Navbar />
        <hr />
        <Crasul />
        <hr />
        <Weeklytop />
        <hr />
        <Newrelises />
        <hr />
        <Tranding />
        <hr />
        <Artists />
        <hr />
        <Album />
        <hr />
        <Video />
        <hr />
        <Mood />
        <hr />
        <Joinplatform />
        <hr />
      </div>
      
    </div>
  );
};

export default Home;
