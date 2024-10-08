import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles2.css";

// import required modules
import { Pagination } from "swiper/modules";
import AshtrayArray from "../lib/ashtrayArray";
import TitleComp from "./TitleComp";
import { useTranslation } from "react-i18next";

const ProductSection = () => {
  const { t } = useTranslation();

  const ashArray = AshtrayArray();

  return (
    <section
      id="product"
      className="px-[20px] md:px-[50px] flex flex-col gap-[10px] max-w-[1440px] mx-auto"
    >
      <TitleComp title={t("titles.products")} />
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper2"
        >
          {ashArray.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-start gap-[20px]">
                  <img
                    src={item.image}
                    className="w-[300px] h-[300px]"
                    alt="ashtray img"
                  />
                  <h3 className="text-[20px] capitalize">{item.title}</h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSection;
