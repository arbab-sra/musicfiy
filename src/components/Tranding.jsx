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
          <h4 className="font-sans text-white text-[15px]">Views</h4>
        </div>
      </div>
      {/* trandingcompont */}
      {data.length > 0
        ? data.sort(() => 0.5 - Math.random()).map((ele, index) => {
            const date = formatDate(ele.releaseDate);
            if (index < 7)
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
