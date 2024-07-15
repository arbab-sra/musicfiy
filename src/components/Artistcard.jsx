import { Link } from "react-router-dom";

const Artistcard = ({ name, image, songid }) => {
  return (
    <Link
      to={`/artist/${name}/${songid}`}
      className="w-[160px] mr-1 ml-1 h-[250px] flex justify-center  flex-col items-center "
    >
      <div className="  rounded-[50%] bg-cover bg-center w-full h-1/2  z-10">
        <img
          className="w-full contrast-150 rounded-[50%] h-full"
          src={image}
          alt={name}
        />
      </div>
      <div className="min-w-[60%] max-w-[100%] h-1/6  flex justify-center items-center">
        <p className="text-2xl  overflow-hidden w-full capitalize text-white whitespace-nowrap font-sans">
          {name}
        </p>
      </div>
    </Link>
  );
};
export default Artistcard;
