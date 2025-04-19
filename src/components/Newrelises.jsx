import Card from "./Card";
import Hadding from "./Hadding";
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
    <div className="flex justify-center items-center w-[100%] overflow-x-scroll mb-7 no-scrollbar ">
      <div className="w-full">
        <Hadding name={"New Release"} lastname={"Song"} />
        <marquee scrollamount="10"  behavior="scroll" direction="right" className="w-full ">
          <div className="flex mt-9 m-auto  mb-9 justify-center items-center w-full  h-[245px]  ">
            {songs.length > 0
              ? songs
                  .sort(() => 0.5 - Math.random())
                  .map((elem) => {
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
                  })
              : "No Data"}
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Newrelises;
