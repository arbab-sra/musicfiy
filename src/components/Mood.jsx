import { Link } from "react-router-dom";
import Hadding from "./Hadding";
import Moodcomponet from "./Moodcomponet";
import { FaCirclePlus } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { Allsong } from "../constext/useContext";
const Mood = () => {
  const { Moodplylist } = useContext(Allsong);
  const [data, setdata] = useState([]);
  useEffect(() => {
    if (Moodplylist.length > 0) {
      setdata(Moodplylist);
    }
  }, [Moodplylist]);
  return (
    <>
      <div className=" mt-14 mb-14 ">
        <Hadding name={"Mood"} lastname={"playlist"} />
        <marquee className="flex justify-between overflow-x-scroll no-scrollbar items-center">
          <div className="flex justify-center mt-6 items-center m-auto">
            {data.length > 0
              ? data.sort(() => 0.5 - Math.random()).map((ele, index) => {
                // console.log(ele);
                  let id = ele.songs[0]._id;

                  if (index < 5)
                    return <Moodcomponet id={id} image={ele.songs[0].themnail} key={index} mood={ele.mood} />;
                })
              : "no data"}
          </div>
          
        </marquee>
      </div>
    </>
  );
};

export default Mood;
