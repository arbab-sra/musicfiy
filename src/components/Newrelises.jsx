import { Link } from "react-router-dom";
import Card from "./Card";
import Hadding from "./Hadding";
import { FaCirclePlus } from "react-icons/fa6";
import image from "../assets/5.png";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { Allsong } from "../constext/useContext";
const Newrelises = () => {
  const [songs, setsongs] = useState([]);
  const { newRelisedsong } = useContext(Allsong);
  useEffect(() => {
    setsongs(newRelisedsong);
  }, [newRelisedsong, songs]);

  return (
    <div className="flex justify-center items-center w-[1060px] mt-6 mb-6 overflow-hidden ">
      <div className="cardsparant flex justify-between relative gap-1 w-full items-center">
        <div className="w-[92%] pr-8 pl-9  overflow-hidden ">
          <Hadding name={"New Release"} lastname={"Song"} />
          <div className="flex mt-9 m-auto  mb-9 justify-center items-center w-full  h-[245px]  ">
            {songs.length>0 &&
              songs.map((elem, index) => {
                 
                if (index < 5) {
                  return (
                    <Card
                      key={elem._id}
                      id={elem._id}
                      image={elem.themnail}
                      title={elem.title}
                      artist={elem.artist}
                      type={"newrelisesong"}
                      icon={
                        <IoMusicalNotesOutline color="white" size={"15px"} />
                      }
                    />
                  );
                }
              })}
          </div>
        </div>
        <div className=" absolute h-full  flex justify-center items-center top-0 right-0">
          <Link className="w-[85px] h-[90px] hover:text-purple-500 flex justify-center items-center flex-col   ">
            <FaCirclePlus size={"63px"} /> <h3>View All</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Newrelises;
