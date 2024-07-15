import { Swiper, SwiperSlide } from "swiper/react";
import "../index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import { Allsong } from "../constext/useContext";

import {useNavigate} from "react-router-dom"
const Crasul = () => {
  const { Trandingsong } = useContext(Allsong);
  const [data, setdata] = useState([]);
  const navgate = useNavigate()
  useEffect(() => {
    if (Trandingsong.length > 0) {
      setdata(Trandingsong);
    }
  }, [Trandingsong]);
  return (
    <div className="h-[400px] mt-4 mb-[50px] w-[1060px] overflow-x-hidden ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data &&
          data.map((ele, index) => {
            console.log(ele);
            return (
              <SwiperSlide onClick={() => (navgate(`/weeklytopsong/${ele._id}`))} key={ele._id}>
                <img
                  className="contrast-150"
                  src={ele.themnail}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Crasul;
