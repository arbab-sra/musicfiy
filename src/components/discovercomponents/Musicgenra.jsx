import { Link } from "react-router-dom";
import Hadding from "../Hadding";
import { FaCirclePlus } from "react-icons/fa6";
import image from "../../assets/5.png";
import Musicgenracomponets from "./Musicgenracomponets";

const Musicgenra = () => {
  return (
    <div className="h-[240px]  w-[1073px]  mb-14 overflow-hidden ">
      <Hadding name={"Music"} lastname={"genra"} />
      <div className="w-[100%] h-[163px]  flex justify-between items-center pr-2 mt-2 pl-2">
       <Musicgenracomponets id={"dafk"} tille={'klajsfl'} image={image}/>
       <Musicgenracomponets id={"dafk"} tille={'klajsfl'} image={image}/>
       <Musicgenracomponets id={"klf"} tille={'klajsfl'} image={image}/>
       <Musicgenracomponets id={"dkdf "} tille={'klajsfl'} image={image}/>
        <div className="  h-full flex justify-center items-center">
          <Link className="w-[85px] h-[90px] hover:text-purple-500 flex justify-center items-center flex-col   ">
            <FaCirclePlus size={"63px"} /> <h3>View All</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Musicgenra;
