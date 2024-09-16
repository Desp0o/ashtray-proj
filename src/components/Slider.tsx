import { Swiper, SwiperSlide } from "swiper/react";
import cover from "/images/banner-image.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={cover} />
      </SwiperSlide>

      <SwiperSlide>
        <img src={cover} />
      </SwiperSlide>

      <SwiperSlide>
        <img src={cover} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
