import { Link } from "react-router-dom";
import Hadding from "../Hadding";
import { FaCirclePlus } from "react-icons/fa6";
import image from "../../assets/5.png";
import Musicgenracomponets from "./Musicgenracomponets";

const Musicgenra = () => {
  return (
    <div className="h-[240px] w-[80%]   mb-14 overflow-x-auto ">
      <Hadding name={"Music"} lastname={"genra"} />
      <div className="w-[30%] h-[163px]  flex justify-between items-center pr-2 mt-2 pl-2 ">
       <Musicgenracomponets id={"dafk"} tille={'klajsfl'} image={image}/>
       <Musicgenracomponets id={"dafk"} tille={'klajsfl'} image={image}/>
       <Musicgenracomponets id={"klf"} tille={'klajsfl'} image={image}/>
       <Musicgenracomponets id={"dkdf "} tille={'klajsfl'} image={image}/>
       <Musicgenracomponets id={"dkdf "} tille={'klajsfl'} image={image}/>
       <Musicgenracomponets id={"dkdf "} tille={'klajsfl'} image={image}/>
        
      </div>
    </div>
  );
};

export default Musicgenra;
