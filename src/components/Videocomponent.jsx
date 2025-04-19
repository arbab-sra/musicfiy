import { Link, useParams } from "react-router-dom";
import PropTypes from 'prop-types';


const Videocomponent = ({ image, name, views, title, id }) => {
  const {id:_id } = useParams()

  return (
    <Link
  
      to={`/video/${name}/${id}`}
      className={` bg-[#1F1F1F] capitalize hover:shadow-md ${id === _id && "shadow-xl shadow-white"} hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-purple-300 transition-all ml-auto mr-auto ease-in-out flex justify-center mt-6 items-center gap-4`}
    >
      <div className="w-[300px] h-[236px]   ">
        <div className="w-full h-[70%]  relative overflow-hidden">
          <div className="w-[80%] z-50 absolute top-[40%] left-[10%] h-[50%] flex justify-center items-center ">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-pink-500 text-2xl font-bold whitespace-nowrap">
              {" "}
              {name}
            </p>
          </div>
          <img className="object-cover w-full h-full contrast-150 " src={image} alt="" />
        </div>
        <div className=" w-full h-[30%] flex justify-between items-center pl-4 pr-4 flex-col">
          <marquee className=" w-full h-[60%]  flex justify-between items-center overflow-hidden text-white whitespace-nowrap font-mono text-xl pl-4 pr-4 ">
            {title}
          </marquee>
          <div className=" w-full h-[40%] flex justify-between items-center pl-4 pr-4 ">
            {" "}
            <h2
              className="text-white text-sm
              whitespace-nowrap font-mono"
            >
              {name}
            </h2>
            <h5 className="text-white text-sm">Views {views}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Videocomponent;
Videocomponent.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  views: PropTypes.number,
  title: PropTypes.string,
  id: PropTypes.string
};
