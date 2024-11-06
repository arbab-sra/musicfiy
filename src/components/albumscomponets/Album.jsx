import { Link } from "react-router-dom";
import image from "../../assets/trandingcover.png";
import { FaArrowLeft } from "react-icons/fa";
import Trandingcompont from "../Trandingcompont";
import { FaArrowRight } from "react-icons/fa";
import Hadding from "../Hadding";
import { useContext, useEffect, useState } from "react";
import { Allsong } from "../../constext/useContext";
import { formatDate } from "../../helper/format";
const Album = ({
  title = "tate mcree, nightmares, the neighberhood, doja cat and ...",
}) => {
  const [totlesong, settotalsong] = useState(0);
  const { Album } = useContext(Allsong);
  const [data, setdata] = useState([]);

  useEffect(() => {
    settotalsong(Album.length);
  }, [Album]);
  useEffect(() => {
    if (Album.length > 0) {
      setdata(Album);
      // console.log(data[0].songs[0]._id);
      // setplayall(data[0].songs[0]._id);
      // console.log(playall);
    }
  }, [Album, data]);

  return (
    <div className="w-[1060px] bg-gradient-to-tl to-[#178ccf91] from-[#094d8d34] ">
      <div className="h-[430px] bg-gradient-to-r from-[#0E9EEF] to-[#2779c559] w-full relative mt-4 mb-[40px]  overflow-x-hidden  ">
        <div className="w-full h-[60px]  flex justify-between items-center pr-3 pl-3 ">
          <div className="h-[60px] w-[60px]  flex justify-center items-center">
            <FaArrowLeft color={"white"} size={"30px"} />
          </div>
          <div className="h-full w-[45%]  flex justify-center items-center">
            <div className="btn w-full h-[38px] flex justify-center items-center   gap-[46px]">
              <Link
                to={"/about"}
                className="transition-all ease-in text-white text-xl hover:font-mono hover:text-xl hover:text-[#FF26C2] "
              >
                About
              </Link>
              <Link
                to={"/contact"}
                className="transition-all ease-in text-white text-xl  hover:font-mono hover:text-[19px] hover:text-[#FF26C2]  "
              >
                Contect
              </Link>
              <Link
                to={"/premium"}
                className="transition-all ease-in text-white text-xl  hover:font-mono hover:text-xl hover:text-[#FF26C2] "
              >
                Premium
              </Link>
              <Link to={"/profile"} className=" w-[35px] h-[35px]  ">
                {localStorage.getItem("profilpic") && (
                  <img
                    className="object-cover rounded-full w-full -2 -[#FF26C2] h-full"
                    src={localStorage.getItem("profilpic")}
                    alt=""
                  />
                )}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-9  w-[20%] h-[40%] flex justify-center items-center">
          <Link
            to={`/albums/`}
            className="text-[#EE10B0] font-serif text-4xl  p-3 hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-md hover:shadow-fuchsia-500"
          >
            Play all{" "}
          </Link>
        </div>
        <div className="absolute bottom-[13%] flex justify-center  gap-[2%] items-center  left-[5%] w-[65%] h-[60%]">
          <div className="w-[97%] h-full  ">
            <div className="w-[97%] h-[95%]  shadow-lg shadow-black ">
              <img className="w-full h-full object-fill" src={image} alt="" />
            </div>
          </div>
          <div className="w-[97%] p-4 h-full   flex justify-between flex-col items-center ">
            <h1 className=" text-center text-3xl font-bold text-white capitalize">
              Tranding songs <span className="text-[#FF26C2]">Mix</span>
            </h1>
            <h4 className="pr-5 pl-5  capitalize text-xl text-white">
              {title}
            </h4>
            <h4 className="text-center text-xl text-white pl-7 pb-5 mr-auto">
              {totlesong}
              <span className="text-[#FF26C2] text-[45px] mr-3 ml-3">
                .
              </span>{" "}
              1.5 hr
            </h4>
          </div>
        </div>
      </div>
      <div className="w-[1060px] bg-gradient-to-l to-[#1f87c291] from-[#094d8d34]  ">
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
          ? data
              .sort(() => 0.5 - Math.random())
              .map((ele, index) => {
                let date = formatDate(ele.songs[0].releaseDate);
                // console.log(date);
                if (index < 14) {
                  return (
                    <Trandingcompont
                      key={ele.songs[0]._id}
                      id={ele.songs[0]._id}
                      rank={index + 1}
                      name={ele.songs[0].title}
                      artistname={ele._id}
                      relisedata={date}
                      duration={
                        ele.views > 1000
                          ? (ele.views / 1000).toFixed(1) + "K"
                          : ele.views
                      }
                      Album={ele.songs[0].title}
                      tranding={ele.songs[0].themnail}
                      type={"album"}
                    />
                  );
                }
              })
          : "no data"}
        <div className="w-[216px] bg-[#3f303b] flex mb-10 transition-all ease-in-out  hover:shadow-pink-500 hover:shadow-md cursor-pointer hover:translate-x-[2px] gap-3 justify-center items-center rounded-lg m-4 ml-auto mt-7  mr-auto h-[63px]  ">
          <div className="text-white  text-2xl h-[38px]  flex justify-center items-center w-[26px]">
            <Link className="">
              <FaArrowLeft />
            </Link>
          </div>
          <div className="text-white text-xl h-[38px]  flex justify-center items-center w-[88px]">
            {" "}
            <strong className="">1 </strong>
          </div>
          <div className="text-white text-2xl h-[38px]  flex justify-center items-center w-[26px]">
            {" "}
            <Link className="">
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
