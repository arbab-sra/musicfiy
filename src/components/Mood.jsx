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
        <div className="flex justify-between items-center">
          <div className="flex justify-center mt-6 items-center m-auto">
            {data.length > 0
              ? data.map((ele, index) => {
                // console.log(ele);
                  let id = ele.songs[0]._id;

                  if (index < 5)
                    return <Moodcomponet id={id} image={ele.songs[0].themnail} key={index} mood={ele.mood} />;
                })
              : "no data"}
          </div>
          <Link className="w-[85px] h-[90px] hover:text-purple-500 flex justify-center items-center flex-col   ">
            <FaCirclePlus size={"63px"} /> <h3>View All</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Mood;
