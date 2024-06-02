import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { MdAlbum } from "react-icons/md";
import { MdAssignmentInd } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { GiStopwatch } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { CgPlayListAdd } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { BiSolidPlaylist } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import { useEffect } from "react";

const Sidebar = () => {
  const buttonMap = {
    "/": ".btn1",
    "/discover": ".btn2",
    "/albums": ".btn2",
    "/artists": ".btn2",
    "/recentlyplyed": ".btn2",
    "/mostlyplayed": ".btn2",
    "/yourplaylist": ".btn2",
    "/yourfavorite": ".btn2",
    "/addtoplaylist": ".btn2",
    "/settings": ".btn2",
    "/logout": ".btn2",
  };
  const location = useLocation();
  const buttonClass = buttonMap[location.pathname];
  useEffect(() => {
    if (buttonClass) {
      document.querySelector(buttonClass).style.backgroundColor = "#EE10B0";
    }
  }, [buttonClass]);
  return (
    <div className="w-[270px] p-[20px] min-h-[3000px] h-full overflow-hidden bg-[#0E1920]">
      <Link to={"/"} className="logo w-[166px] h-[63px] ">
        <h2 className="bg-gradient-to-r text-[30px]  md:text-[40px] font-semibold text-center from-[#EE10B0] to-[#0E9EEF] inline-block text-transparent bg-clip-text">
          Musicify
        </h2>
      </Link>

      <div className="w-[100%] h-[248px] mb-[40px] ">
        <h3 className="text-[#EE10B0] ml-1 -mb-3 mt-[24px]">Menu</h3>
        <div className="flex mt-[14px] justify-center items-center flex-col">
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl btn1 transition-all ease-in hover:border-[1px]  hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center active active:bg-[#EE10B0]">
            <Link to={"/"} className=" flex justify-center items-center ">
              <GoHome /> Home
            </Link>
          </div>
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl btn2 transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center">
            <Link
              to={"/discover"}
              className=" flex justify-center items-center"
            >
              <MdOutlineExplore /> Discover
            </Link>
          </div>
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl btn3 transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center">
            <Link to={"/albums"} className=" flex justify-center items-center">
              {" "}
              <MdAlbum /> Albums
            </Link>
          </div>
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl btn4 transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center">
            <Link to={"/artists"} className=" flex justify-center items-center">
              <MdAssignmentInd /> Artists
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[140px]  ">
        <h3 className="text-[#EE10B0] ml-1 -mb-3 mt-[24px]">Labrary</h3>
        <div className="flex mt-[14px] justify-center items-center flex-col">
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl btn5 transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center active active:bg-[#EE10B0]">
            <Link
              to={"/recentlyplyed"}
              className=" flex justify-center items-center"
            >
              <MdOutlineWatchLater />
              Recent Played
            </Link>
          </div>
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl btn6 transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center">
            <Link
              to={"/mostlyplayed"}
              className=" flex justify-center items-center"
            >
              <GiStopwatch /> Mosd Played
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[195px]  ">
        <h3 className="text-[#EE10B0] ml-1 -mb-3 mt-[24px]">
          Playlist and Favorate
        </h3>
        <div className="flex mt-[14px] justify-center items-center flex-col">
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl btn7 transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center active active:bg-[#EE10B0]">
            <Link
              to={"/yourplaylist"}
              className=" flex justify-center items-center"
            >
              <BiSolidPlaylist />
              Your Playlist
            </Link>
          </div>
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl btn8 transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center">
            <Link
              to={"/yourfavorite"}
              className=" flex justify-center items-center"
            >
              <MdFavoriteBorder /> Your Favorate
            </Link>
          </div>
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl btn9 transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center">
            <Link
              to={"/addtoplaylist"}
              className=" flex justify-center items-center"
            >
              <CgPlayListAdd /> Add Playlist
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[140px]  ">
        <h3 className="text-[#EE10B0] ml-1 -mb-3 mt-[24px]">Genreal</h3>
        <div className="flex mt-[14px] justify-center items-center flex-col">
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl btn10 transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center active active:bg-[#EE10B0]">
            <Link
              to={"/settings"}
              className=" flex justify-center items-center"
            >
              <CiSettings />
              Setting
            </Link>
          </div>
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl btn11 transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center">
            <Link to={"/logout"} className=" flex justify-center items-center">
              <FaSignOutAlt /> Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
