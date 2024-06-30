import image from "../assets/2.jpg";
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
    <div className="h-[330px] w-[1060px]  mb-14 overflow-hidden ">
      <Hadding name={"Album"} lastname={"List"} />
      <div className="mt-5 flex  justify-between items-center">
        {data.length > 0
          ? data.map((ele, index) => {
              if (index < 5) {
                return (
                  <Card
                    songid={ele.songs[0]._id}
                    key={index}
                    id={ele.songs[0].mood}
                    image={image}
                    title={ele._id}
                    artist={ele._id}
                    type={"album"}
                    icon={<MdOutlineAlbum color="steelblue" size={"18px"} />}
                  />
                );
              }
            })
          : "no data"}
        <div>
          <Link className="w-[85px] h-[90px] hover:text-purple-500 flex justify-center items-center flex-col   ">
            <FaCirclePlus size={"63px"} /> <h3>View All</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Album;
