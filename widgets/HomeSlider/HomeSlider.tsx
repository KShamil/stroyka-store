"use client";

import React, { FC } from "react";
import { HomeSliderProps } from "./HomeSlider.props";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./HomeSlider.module.css";
import { homeSliderData } from "@/data/data";
import { SlidePrevButton } from "@/shared/SlidePrevButton/SlidePrevButton";
import { SlideNextButton } from "@/shared/SlideNextButton/SlideNextButton";
import { HomeSliderItems } from "@/features/HomeSliderItems/HomeSliderItems";

export const HomeSlider: FC<HomeSliderProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.homeSlider}>
        <Swiper
          navigation={false}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          className={styles.swiper}
          speed={800}
        >
          {homeSliderData &&
            homeSliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <HomeSliderItems data={item} />
              </SwiperSlide>
            ))}
          <div className={styles.btns}>
            <SlidePrevButton className={styles.prevBtn} />
            <SlideNextButton className={styles.nextBtn} />
          </div>
        </Swiper>
      </section>
    </>
  );
};
