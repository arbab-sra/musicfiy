import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Trandingcompont = ({
  Album = "Album",
  duration = "Duration",
  name = "Tranding",
  artistname = "Artist",
  relisedata = "Relised",
  rank = "Rank",
  id = "Id",
  tranding,
  type
}) => {

  function formatDate(inputDate) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Parse the input date string
    const date = new Date(inputDate);

    // Extract day, month, and year
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Format the date as "Mon DD YYYY"
    return `${month} ${day} ${year}`;
}

  const [play, setplay] = useState('red');
  const { id: prams } = useParams();
  useEffect(()=>{
    if (id == prams) {
      setplay("2px solid #00DDEB")
    } else{
      setplay('black')
    }
  },[prams , id])
  return (
    <Link
      to={`/${type}/` + id}
      className="w-full h-[60px] mt-4 flex justify-between items-center "
    >
      <div className="w-[4%] h-full  flex justify-center items-center ">
        <h2 className="font-sans text-white text-[22px]">
          <strong>{rank}</strong>
        </h2>
      </div>
      <div style={ { border: play }} className={`w-[96%] flex bg-[#1E1E1E]  transition-all ease-in-out duration-75 hover:bg-[#e966c4] hover:shadow-lg rounded-md hover:shadow-[#c7abbf] justify-between items-center h-full `}>
        <div className="w-[8%]  overflow-hidden  h-full bg-black ">
          <img src={tranding} width={"100%"} height={"100%"} alt="" />
        </div>
        <div className="w-[19%] h-full  ml-2  ">
          <div className="w-full h-full overflow-hidden text-white pl-2">
            <h3 className="whitespace-nowrap w-full overflow-hidden text-[22px]">
              {name}
            </h3>
            <p className="text-[12px]">{artistname}</p>
          </div>
        </div>
        <div className=" flex justify-end items-center  w-full h-full gap-3 ">
          <div className=" flex justify-center items-center w-[27%] h-full   ">
            <strong className="text-white"> {relisedata}</strong>
          </div>
          <div className="flex justify-center items-center w-[43%] whitespace-nowrap overflow-hidden h-full  ">
            {" "}
            <marquee className=" font-serif text-white whitespace-nowrap  overflow-hidden pr-2 w-[90%] ">
              {Album}
            </marquee>
          </div>
          <div className="flex justify-center items-center gap-3 w-[22%] h-full  mr-1  ">
            <div className="w-[29px] h-[29px]flex  justify-center items-center ">
              <CiHeart
                className="hover:text-[#150510] text-[#FF26C2]"
                size={30}
              />
            </div>
            <div className="w-[50px] h-[36px] text-white flex justify-center items-center">
              <h3>{duration}</h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Trandingcompont;
