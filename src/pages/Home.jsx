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
  // const [isload, setisload] = useState(true);
  const popupshow = () => {
    setTimeout(() => {
      setPopup(true);
    }, 15000);
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
    <div className="flex m-auto h-full overflow-y-hidden min-w-[500px] overflow-x-hidden  bg-gradient-to-tr from-[#412C3A] to-[#533248] ">
      <div className="absolute  z-50   mt-[40vh] ml-[40vw]">
        {popup && <Popup setPopup={setPopup} />}
      </div>
      <div className="h-auto bg-[#0E1920]">
        <Sidebar />
      </div>

      <div className="ml-auto h-full mr-auto w-[80%]">
        <Navbar />
        <hr />
        <Crasul />
        <hr />
        <Weeklytop firsthadding="Weekly" secondhadding="Top" />
        <hr />
        <Video />
        <hr />
        <Tranding />
        <hr />
        <Artists firstname="Popular " lastname="Artists" />
        <hr />
        <Album />
        <hr />
        <Newrelises />
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

