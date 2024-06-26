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
import { useEffect, useState } from "react";
import "../index.css";
import Popup from "../components/Popup";
const Home = () => {
  const [popup, setPopup] = useState(false);
  const popupshow = () => {
    setTimeout(() => {
      setPopup(true);
    }, 20000);
  };
  useEffect(() => {
    if (
      localStorage.getItem("token") == null ||
      localStorage.getItem("token").length == 0
    ) {
      popupshow();
    }
  });
  return (
    <div className="flex m-auto h-[4390px] min-w-[1400px] max-w-[1440px] overflow-x-hidden  bg-gradient-to-tr from-[#412C3A] to-[#533248] ">
      <div className="absolute  z-50   mt-[40vh] ml-[40vw]">
        {popup && <Popup setPopup={setPopup} />}
      </div>
      <div className="h-full">
        <Sidebar />
      </div>

      <div className="ml-auto h-full mr-auto">
        <Navbar />
        <hr />
        <Crasul />
        <hr />
        <Weeklytop firsthadding="Weekly" secondhadding="Top" />
        <hr />
        <Newrelises />
        <hr />
        <Tranding />
        <hr />
        <Artists firstname="Popular " lastname="Artists" />
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
