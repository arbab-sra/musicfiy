// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../index.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from '../assets/crasul.png'
import img1 from '../assets/1.png'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Crasul = () => {
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
        
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        
        
      </Swiper>
    </div>
  );
};

export default Crasul;
