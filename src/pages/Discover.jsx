import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Musicgenra from "../components/discovercomponents/Musicgenra";
import Artists from "../components/Artists";
import Video from "../components/discovercomponents/Video";
import Newrelises from "../components/Newrelises";
import Album from "../components//Album";
import Mood from "../components/Mood";
import WeeklyTopSong from "../components/Weeklytop";
import JoinPlatform from "../components/Joinplatform";
const Discover = () => {
  return (
    <div className="flex m-auto h-auto overflow-hidden  bg-gradient-to-tr from-[#412C3A] to-[#533248] ">
      <div className="h-auto bg-[#0E1920]">
        <Sidebar />
      </div>

      <div className="ml-auto h-full mr-auto">
        <Navbar />
        <hr />
        <Musicgenra />
        <hr />
        <Mood />
        <hr />
        <Artists firstname="Popular " lastname="Artists" />
        <hr />
        <Video />
        <hr />
        <Newrelises />
        <hr />
        <Album />
        <hr />
        <WeeklyTopSong firsthadding={"Weekly Top "} secondhadding={"Songs"} />
        <hr />
        <JoinPlatform />
        <hr />
      </div>
    </div>
  );
};

export default Discover;
