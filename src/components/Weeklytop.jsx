import { FaCirclePlus } from "react-icons/fa6";
import { WeeklyTopSongContext } from "../constext/useContext";

import Card from "./Card";
import Hadding from "./Hadding";
import { Link } from "react-router-dom";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { useContext } from "react";

const Weeklytop = ({ secondhadding, firsthadding }) => {
  const { song } = useContext(WeeklyTopSongContext);
  return (
    <div className="flex justify-center items-center w-[1060px] mb-7 overflow-hidden ">
      <div className="cardsparant flex justify-between relative gap-1 w-full items-center">
        <div className="w-[92%] pr-8 pl-9  overflow-hidden ">
          <Hadding name={firsthadding} lastname={secondhadding} />
          <div className="flex mt-9 m-auto  mb-9 justify-center items-center w-full  h-[245px]  ">
            {song &&
              song.map((e, index) => {
                if (index < 5) {
                  {
                    return (
                      <Card
                        key={e._id}
                        image={e.themnail}
                        icon={
                          <IoMusicalNotesOutline color="white" size={"15px"} />
                        }
                        title={e.title}
                        discription={e.artist}
                        id={e._id}
                        url={e.url}
                      />
                    );
                  }
                }
              })}
          </div>
        </div>
        <div className=" absolute h-full  flex justify-center items-center top-0 right-0">
          <Link className="w-[85px] h-[90px] flex justify-center items-center flex-col hover:text-purple-500  ">
            <FaCirclePlus size={"63px"} /> <h3>View All</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Weeklytop;
