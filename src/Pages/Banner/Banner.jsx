import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImage1 from "../../assets/The-Gym-Pump-scaled.jpeg";
import sliderImage2 from "../../assets/pexels-anush-1229356.jpg";
import sliderImage3 from "../../assets/built-by-golds-serious-traning-brand-hero-e1699369298805.webp";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        freeMode={true}
        autoplay={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={sliderImage1}
            alt=""
            className="h-[500px] object-cover w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderImage2}
            alt=""
            className="h-[500px] object-cover w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderImage3}
            alt=""
            className="h-[500px] object-cover w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
