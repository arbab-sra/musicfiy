import Artistcard from "./Artistcard";
import Hadding from "./Hadding";
import image from "../assets/3.png";
import { Allsong } from "../constext/useContext.jsx";
import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
const Artists = ({ firstname, lastname }) => {
  const { PopularArtist } = useContext(Allsong);
  const [data, setdata] = useState([]);
  // console.log(PopularArtist);
  useEffect(() => {
    if (PopularArtist.length > 0) {
      setdata(PopularArtist);
    }
  }, [PopularArtist]);
  return (
    <div className="w-full mb-14 h-[262px]">
      <Hadding name={firstname} lastname={lastname} />
      <div className="flex justify-center items-center overflow-x-scroll no-scrollbar p-3 h-[262px]">
        <div className="w-full h-full  p-1   gap-5 flex justify-center items-center">
          {data.length > 0
            ? data.map((ele, index) => {
                  return (
                    <Artistcard
                      key={index}
                      image={ele.songs[0].themnail}
                      songid={ele.songs[0]._id}
                      name={ele._id}
                    />
                  );
              })
            : "no data"}
        </div>
       
      </div>
    </div>
  );
};

export default Artists;
