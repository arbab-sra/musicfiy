import image from "../assets/2.jpg";
import Hadding from "./Hadding";
import Card from "./Card";
import { MdOutlineAlbum } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
const Album = () => {
  return (
    <div className="h-[330px] w-[1060px]  mb-14 overflow-hidden ">
      <Hadding  name={"Album"} lastname={"List"}  />
      <div className="mt-5 flex  justify-between items-center">
        <Card
          image={image}
          title="Adrilen 21"
          discription="Adrilen"
          icon={<MdOutlineAlbum color="steelblue" size={"18px"} />}
        />
        <Card
          image={image}
          title="beauty behing its beauty 21"
          discription="the weekend"
          icon={<MdOutlineAlbum color="steelblue" size={"18px"} />}
        />
        <Card
          image={image}
          title="Suspention "
          discription="dadken"
          icon={<MdOutlineAlbum color="steelblue" size={"18px"} />}
        />
        <Card
          image={image}
          title="Harry's house "
          discription="harry style"
          icon={<MdOutlineAlbum color="steelblue" size={"18px"} />}
        />
        <Card
          image={image}
          title="burn to die "
          discription="lana dal roay"
          icon={<MdOutlineAlbum color="steelblue" size={"18px"} />}
        />
        <div>
          <Link className="w-[85px] h-[90px] hover:text-purple-500 flex justify-center items-center flex-col   ">
            <FaCirclePlus size={"63px"}  /> <h3>View All</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Album;
