import { Link } from "react-router-dom";
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
const Sidebar = () => {
  return (
    <div className="w-[270px] p-[20px] min-h-[3750px] h-full overflow-hidden bg-[#0E1920]">
      <Link to={"/"} className="logo w-[166px] h-[63px] ">
        <h2 className="bg-gradient-to-r text-[30px]  md:text-[40px] font-semibold text-center from-[#EE10B0] to-[#0E9EEF] inline-block text-transparent bg-clip-text">
          Musicify
        </h2>
      </Link>

      <div className="w-[100%] h-[248px] mb-[40px] ">
        <h3 className="text-[#EE10B0] ml-1 -mb-3 mt-[24px]">Menu</h3>
        <div className="flex mt-[14px] justify-center items-center flex-col">
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl  transition-all ease-in hover:border-[1px]  hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center active active:bg-[#EE10B0]">
            <Link
              to={"/"}
              className=" flex justify-center items-center "
              href="/"
            >
              <GoHome /> Home
            </Link>
          </div>
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl  transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center">
            <Link
              to={"/discover"}
              className=" flex justify-center items-center"
              href="/"
            >
              <MdOutlineExplore /> Discover
            </Link>
          </div>
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl  transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center">
            <Link
              to={"/albums"}
              className=" flex justify-center items-center"
              href="/"
            >
              {" "}
              <MdAlbum /> Albums
            </Link>
          </div>
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl  transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center">
            <Link
              to={"/artists"}
              className=" flex justify-center items-center"
              href="/"
            >
              <MdAssignmentInd /> Artists
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[140px]  ">
        <h3 className="text-[#EE10B0] ml-1 -mb-3 mt-[24px]">Labrary</h3>
        <div className="flex mt-[14px] justify-center items-center flex-col">
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl  transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center active active:bg-[#EE10B0]">
            <Link
              to={"/recentplayed"}
              className=" flex justify-center items-center"
              href="/"
            >
              <MdOutlineWatchLater />
              Recent Played
            </Link>
          </div>
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl  transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center">
            <Link
              to={"/mostplayed"}
              className=" flex justify-center items-center"
              href="/"
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
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl  transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center active active:bg-[#EE10B0]">
            <Link
              to={"/playlist"}
              className=" flex justify-center items-center"
              href="/"
            >
              <BiSolidPlaylist />
              Your Playlist
            </Link>
          </div>
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl  transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center">
            <Link
              to={"/favorate"}
              className=" flex justify-center items-center"
              href="/"
            >
              <MdFavoriteBorder /> Your Favorate
            </Link>
          </div>
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl  transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center">
            <Link
              to={"/addplaylist"}
              className=" flex justify-center items-center"
              href="/"
            >
              <CgPlayListAdd /> Add Playlist
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[140px]  ">
        <h3 className="text-[#EE10B0] ml-1 -mb-3 mt-[24px]">Genreal</h3>
        <div className="flex mt-[14px] justify-center items-center flex-col">
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl  transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center active active:bg-[#EE10B0]">
            <Link
              to={"/setting"}
              className=" flex justify-center items-center"
              href="/"
            >
              <CiSettings />
              Setting
            </Link>
          </div>
          <div className="w-[100%] mb-[4px] mt-[4px] h-[50px] text-white text-2xl  transition-all ease-in hover:border-[1px] hover:bg-[#EE10B0] flex justify-start rounded-md p-2 gap-1 items-center">
            <Link
              to={"/logout"}
              className=" flex justify-center items-center"
              href="/"
            >
              <FaSignOutAlt /> Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
