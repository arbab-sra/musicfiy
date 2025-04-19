import { Link } from "react-router-dom";

const Card = ({ image, icon, title, artist, id, type, songid = "" }) => {
  return (
    <Link
      to={`/${type}/${id}/${songid}`}
      className="w-[180px] hover:shadow-sm hover:shadow-purple-500  m-2 p-1 flex flex-col justify-center items-center pt-4 h-full bg-[#1F1F1F] "
    >
      <div className="w-[150px] h-[150px]  overflow-hidden  ">
        <img
          className=" object-fill overflow-hidden w-full h-full contrast-150"
          src={image}
          alt=""
        />
      </div>
      <div className="songtitle m-auto w-[90%]  h-[25px] pr-[2px] mt-[9px] mb-[6px] ">
        {" "}
        <marquee className="text-start font-mono whitespace-nowrap overflow-hidden ] text-white capitalize">
          {title}
        </marquee>
      </div>
      <div className="flex justify-between  m-auto w-[90%] items-center">
        <div className="capitalize w-[82%] flex justify-center  h-full overflow-hidden  ">
          <p className="text-white text-sm font-serif overflow-hidden pl-[1px] pr-[1px] whitespace-nowrap ">
            {artist}
          </p>
        </div>
        <div className="w-[15%] h-full  flex justify-center items-center">
          {icon}
        </div>
      </div>
    </Link>
  );
};
export default Card;
