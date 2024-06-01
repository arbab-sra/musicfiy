import Hadding from "./Hadding";
import Trandingcompont from "./Trandingcompont";
import { IoAdd } from "react-icons/io5";

const Tranding = () => {
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
  ];
  return (
    <div className="w-[1060px]  ">
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
      <div className="w-[216px] bg-black flex mb-10 transition-all ease-in-out  hover:shadow-pink-500 hover:shadow-md cursor-pointer hover:translate-x-[2px] gap-3 justify-center items-center rounded-lg m-4 ml-auto mr-auto h-[63px]  ">
        <div className="text-white text-2xl h-[38px]  flex justify-center items-center w-[26px]">
          <strong>
            <IoAdd />
          </strong>
        </div>
        <div className="text-white text-xl h-[38px]  flex justify-center items-center w-[88px]">
          {" "}
          <strong>View All</strong>
        </div>
      </div>
    </div>
  );
};

export default Tranding;
