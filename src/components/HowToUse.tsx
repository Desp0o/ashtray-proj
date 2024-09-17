import { howToUseArray } from '../lib/howToUse'
import TitleComp from './TitleComp'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles2.css";
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

const HowToUse = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-[50px] px-[20px] md:px-[50px] max-w-[1440px] mx-auto'>
        <TitleComp title={t("titles.howToUse")} />

        <div className='flex justify-between'>
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
          className="mySwiper2 mySwiper3"
        >
          {howToUseArray.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-start gap-[20px]">
                  <img
                    src={item.img}
                    className="w-[300px] h-[300px]"
                    alt="ashtray img"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        </div>
    </div>
  )
}

export default HowToUse