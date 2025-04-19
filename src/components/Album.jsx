import Hadding from "./Hadding";
import Card from "./Card";
import { MdOutlineAlbum } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import { Allsong } from "../constext/useContext";
import { useContext, useEffect, useState } from "react";
const Album = () => {
  const { Album } = useContext(Allsong);

  const [data, setdata] = useState([]);
  useEffect(() => {
    if (Album.length > 0) {
      setdata(Album);
    }
  }, [Album]);
  return (
    <div className="h-[330px]  mb-14 overflow-x-scroll no-scrollbar ">
      <Hadding name={"Album"} lastname={"List"} />
      <marquee className="mt-5 flex justify-between items-center">
        <div className="flex justify-center items-center">
          {data.length > 0
            ? data
                .sort(() => 0.5 - Math.random())
                .map((ele, index) => {
                  // console.log(ele.songs[0].themnail);

                  return (
                    <Card
                      songid={ele.songs[0]._id}
                      key={index}
                      id={ele.songs[0].mood}
                      image={ele.songs[0].themnail}
                      title={ele._id}
                      artist={ele._id}
                      type={"album"}
                      icon={<MdOutlineAlbum color="steelblue" size={"18px"} />}
                    />
                  );
                })
            : "no data"}
        </div>
        <div></div>
      </marquee>
    </div>
  );
};

export default Album;
