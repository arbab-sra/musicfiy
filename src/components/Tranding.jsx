import Hadding from "./Hadding";

import { IoAdd } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { Allsong } from "../constext/useContext";
import Trandingcompont from "./Trandingcompont";
import { formatDate } from "../helper/format";

const Tranding = () => {
  const [data, setData] = useState([]);
  const { Trandingsong } = useContext(Allsong);

  useEffect(() => {
    if (Trandingsong.length > 0) {
      setData(Trandingsong);
    }
  }, [Trandingsong]);

  return (
    <div className="max-w-screen">
      <Hadding name={"Tranding"} lastname={"Song"} />
      
      {/* trandingcompont */}
      {data.length > 0
        ? data.sort(() => 0.5 - Math.random()).map((ele, index) => {
            const date = formatDate(ele.releaseDate);
            
              return (
                <Trandingcompont
                  key={ele._id}
                  id={ele._id}
                  rank={index + 1}
                  name={ele.title}
                  artistname={ele.artist}
                  relisedata={date}
                  duration={ele.views >1000 ? (ele.views / 1000).toFixed(1) + "K" : ele.views}
                  Album={ele.title}
                  tranding={ele.themnail}
                  type={"tranding"}
                />
              );
          })
        : "no data"}
      <div className=" bg-black flex mb-10 transition-all ease-in-out  hover:shadow-pink-500 hover:shadow-md cursor-pointer hover:translate-x-[2px] gap-3 justify-center items-center rounded-lg m-4 ml-auto mr-auto h-[63px]  ">
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
