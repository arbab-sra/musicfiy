import { Link } from "react-router-dom";
import image from "../../assets/trandingcover.png";
import { FaArrowLeft } from "react-icons/fa";
import Trandingcompont from "../Trandingcompont";
import { FaArrowRight } from "react-icons/fa";
import Hadding from "../Hadding";
const Album = ({
  title = "tate mcree, nightmares, the neighberhood, doja cat and ...",
}) => {
  const data = [
    {
      name: "Surfcorn",
      artistname: "The neighbourhood",
      relisedata: "Nov 3,2022",
      duration: "3:35",
      Album: "Hard to Imagine the Neighbourhood Ever Changing",
      rank: "#1",
    },
    {
      name: "Skyfall Beats",
      artistname: "Nightmairs",
      relisedata: "dec 12,2023",
      duration: "2:35",
      Album: "Skyfall Beats",
      rank: "#2",
    },
    {
      name: "Love in me",
      artistname: "jack harvloy",
      relisedata: "jun 1,2020",
      duration: "3:35",
      Album: "Love in me",
      rank: "#3",
    },
    {
      name: "Greedy",
      artistname: "Tata mcgill",
      relisedata: "feb 2,2012",
      duration: "3:35",
      Album: "Greedy",
      rank: "#4",
    },
    {
      name: "Pan the round redd",
      artistname: "Dojo cat",
      relisedata: "Mar 3,2014",
      duration: "3:35",
      Album: "Pan the round redd",
      rank: "#5",
    },
    {
      name: "Dance on night",
      artistname: "Duelipa",
      relisedata: "Apr 4,2013",
      duration: "3:35",
      Album: "Dance on night",
      rank: "#6",
    },
    {
      name: "Water",
      artistname: "Tyana ",
      relisedata: "may 5,2025",
      duration: "3:35",
      Album: "Water",
      rank: "#7",
    },
    {
      name: "Surfcorn",
      artistname: "The neighbourhood",
      relisedata: "Nov 3,2022",
      duration: "3:35",
      Album: "Hard to Imagine the Neighbourhood Ever Changing",
      rank: "#8",
    },
    {
      name: "Skyfall Beats",
      artistname: "Nightmairs",
      relisedata: "dec 12,2023",
      duration: "2:35",
      Album: "Skyfall Beats",
      rank: "#9",
    },
    {
      name: "Love in me",
      artistname: "jack harvloy",
      relisedata: "jun 1,2020",
      duration: "3:35",
      Album: "Love in me",
      rank: "#10",
    },
    {
      name: "Greedy",
      artistname: "Tata mcgill",
      relisedata: "feb 2,2012",
      duration: "3:35",
      Album: "Greedy",
      rank: "#11",
    },
    {
      name: "Pan the round redd",
      artistname: "Dojo cat",
      relisedata: "Mar 3,2014",
      duration: "3:35",
      Album: "Pan the round redd",
      rank: "#12",
    },
    {
      name: "Dance on night",
      artistname: "Duelipa",
      relisedata: "Apr 4,2013",
      duration: "3:35",
      Album: "Dance on night",
      rank: "#13",
    },
    {
      name: "Water",
      artistname: "Tyana ",
      relisedata: "may 5,2025",
      duration: "3:35",
      Album: "Water",
      rank: "#14",
    },
    {
      name: "Surfcorn",
      artistname: "The neighbourhood",
      relisedata: "Nov 3,2022",
      duration: "3:35",
      Album: "Hard to Imagine the Neighbourhood Ever Changing",
      rank: "#15",
    },
    {
      name: "Skyfall Beats",
      artistname: "Nightmairs",
      relisedata: "dec 12,2023",
      duration: "2:35",
      Album: "Skyfall Beats",
      rank: "#16",
    },
    {
      name: "Love in me",
      artistname: "jack harvloy",
      relisedata: "jun 1,2020",
      duration: "3:35",
      Album: "Love in me",
      rank: "#17",
    },
    {
      name: "Greedy",
      artistname: "Tata mcgill",
      relisedata: "feb 2,2012",
      duration: "3:35",
      Album: "Greedy",
      rank: "#18",
    },
    {
      name: "Pan the round redd",
      artistname: "Dojo cat",
      relisedata: "Mar 3,2014",
      duration: "3:35",
      Album: "Pan the round redd",
      rank: "#19",
    },
    {
      name: "Dance on night",
      artistname: "Duelipa",
      relisedata: "Apr 4,2013",
      duration: "3:35",
      Album: "Dance on night",
      rank: "#20",
    },
    {
      name: "Water",
      artistname: "Tyana ",
      relisedata: "may 5,2025",
      duration: "3:35",
      Album: "Water",
      rank: "#21",
    },
    {
      name: "Surfcorn",
      artistname: "The neighbourhood",
      relisedata: "Nov 3,2022",
      duration: "3:35",
      Album: "Hard to Imagine the Neighbourhood Ever Changing",
      rank: "#22",
    },
    {
      name: "Skyfall Beats",
      artistname: "Nightmairs",
      relisedata: "dec 12,2023",
      duration: "2:35",
      Album: "Skyfall Beats",
      rank: "#23",
    },
    {
      name: "Skyfall Beats",
      artistname: "Nightmairs",
      relisedata: "dec 12,2023",
      duration: "2:35",
      Album: "Skyfall Beats",
      rank: "#24",
    },
  ];
  return (
    <div className="w-[1060px] bg-gradient-to-tl to-[#178ccf91] from-[#094d8d34] ">
      <div className="h-[430px] bg-gradient-to-r from-[#0E9EEF] to-[#2779c559] w-full relative mt-4 mb-[50px]  overflow-x-hidden  ">
        <div className="w-full h-[60px]  flex justify-between items-center pr-3 pl-3 ">
          <div className="h-[60px] w-[60px]  flex justify-center items-center">
            <FaArrowLeft color={"white"} size={"30px"} />
          </div>
          <div className="h-full w-[45%]  flex justify-center items-center">
            <div className="btn w-full h-[38px] flex justify-center items-center   gap-[46px]">
              <Link
                to={"/about"}
                className="transition-all ease-in text-white text-xl hover:font-mono hover:text-xl hover:text-[#FF26C2] "
              >
                About
              </Link>
              <Link
                to={"/contect"}
                className="transition-all ease-in text-white text-xl  hover:font-mono hover:text-[19px] hover:text-[#FF26C2]  "
              >
                Contect
              </Link>
              <Link
                to={"/premium"}
                className="transition-all ease-in text-white text-xl  hover:font-mono hover:text-xl hover:text-[#FF26C2] "
              >
                Premium
              </Link>
              <Link to={"/profile"} className=" w-[35px] h-[35px]  ">
                <img
                  className="object-cover rounded-full w-full -2 -[#FF26C2] h-full"
                  src={image}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-9  w-[20%] h-[40%] flex justify-center items-center">
          <Link className="text-[#EE10B0] font-serif text-4xl  p-3 hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-md hover:shadow-fuchsia-500">
            Play all{" "}
          </Link>
        </div>
        <div className="absolute bottom-[13%] flex justify-center  gap-[2%] items-center  left-[5%] w-[65%] h-[60%]">
          <div className="w-[97%] h-full  ">
            <div className="w-[97%] h-[95%]  shadow-lg shadow-black ">
              <img className="w-full h-full object-fill" src={image} alt="" />
            </div>
          </div>
          <div className="w-[97%] p-4 h-full   flex justify-between flex-col items-center ">
            <h1 className=" text-center text-3xl font-bold text-white capitalize">
              Tranding songs <span className="text-[#FF26C2]">Mix</span>
            </h1>
            <h4 className="pr-5 pl-5  capitalize text-xl text-white">
              {title}
            </h4>
            <h4 className="text-center text-xl text-white pl-7 pb-5 mr-auto">
              200 songs{" "}
              <span className="text-[#FF26C2] text-[45px] mr-3 ml-3">.</span>{" "}
              1.5 hr
            </h4>
          </div>
        </div>
      </div>
      <div className="w-[1060px] bg-gradient-to-l to-[#1f87c291] from-[#094d8d34]  ">
        <Hadding name={"Tranding"} lastname={"Song"} />
        <div className=" dates w-[70%] h-[31px] ml-auto flex justify-between pl-8 pr-10  items-center">
          <div>
            <h4 className="font-sans text-white text-[15px]">Relises Date</h4>
          </div>
          <div>
            <h4 className="font-sans text-white text-[15px]">Album </h4>
          </div>
          <div>
            <h4 className="font-sans text-white text-[15px]">Time</h4>
          </div>
        </div>
        {/* trandingcompont */}
        {data.map(({ name, artistname, relisedata, duration, Album, rank }) => {
          return (
            <Trandingcompont
              key={name}
              id={name}
              rank={rank}
              name={name}
              artistname={artistname}
              relisedata={relisedata}
              duration={duration}
              Album={Album}
            />
          );
        })}
        <div className="w-[216px] bg-[#3f303b] flex mb-10 transition-all ease-in-out  hover:shadow-pink-500 hover:shadow-md cursor-pointer hover:translate-x-[2px] gap-3 justify-center items-center rounded-lg m-4 ml-auto mt-7  mr-auto h-[63px]  ">
          <div className="text-white  text-2xl h-[38px]  flex justify-center items-center w-[26px]">
            <Link className="">
              <FaArrowLeft />
            </Link>
          </div>
          <div className="text-white text-xl h-[38px]  flex justify-center items-center w-[88px]">
            {" "}
            <strong className="">1 </strong>
          </div>
          <div className="text-white text-2xl h-[38px]  flex justify-center items-center w-[26px]">
            {" "}
            <Link className="">
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
