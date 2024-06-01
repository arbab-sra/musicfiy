import { Link } from "react-router-dom";

const Videocomponent = ({ image, name, views, title }) => {
  return (
    <Link className=" bg-[#1F1F1F] hover:shadow-md hover:shadow-purple-300 transition-all ease-in-out flex justify-center items-center gap-5">
      <div className="w-[300px] h-[236px]   ">
        <div className="w-full h-[70%]  relative overflow-hidden">
          <div className="w-[80%]   z-50 absolute top-[40%] left-[10%] h-[50%] flex justify-center items-center ">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-pink-500 text-2xl font-bold whitespace-nowrap">
              {" "}
              {name}
            </p>
          </div>
          <img className="object-cover contrast-150 " src={image} alt="" />
        </div>
        <div className=" w-full h-[30%] flex justify-between items-center pl-4 pr-4 flex-col">
          <div className=" w-full h-[60%]  flex justify-between items-center text-white whitespace-nowrap font-mono text-xl pl-4 pr-4 ">
            {title}
          </div>
          <div className=" w-full h-[40%] flex justify-between items-center pl-4 pr-4 ">
            {" "}
            <h2
              className="text-white text-sm
              whitespace-nowrap font-mono"
            >
              {name}
            </h2>
            <h5 className="text-white text-sm">{views}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Videocomponent;
