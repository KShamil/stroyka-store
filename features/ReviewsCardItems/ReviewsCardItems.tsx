'use client'

import React, { FC } from "react";
import { ReviewsCardItemsProps } from "./ReviewsCardItems.props";
import styles from "./ReviewsCardItems.module.css";
import { reviewsCardData } from "@/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlidePrevButton } from '@/shared/SlidePrevButton/SlidePrevButton';
import { SlideNextButton } from '@/shared/SlideNextButton/SlideNextButton';
import { Htag } from '@/shared/Htag/Htag';
import { ReviewsCard } from '@/entities/ReviewsCard/ReviewsCard';


export const ReviewsCardItems: FC<ReviewsCardItemsProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.top}>
            <Htag tag="h2">Отзывы</Htag>
          </div>
          <div className={styles.slider}>
            <Swiper
              navigation={false}
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={4}
              centeredSlides={true}
              spaceBetween={16}
              className={styles.swiper}
              speed={800}
            >
              {reviewsCardData &&
                reviewsCardData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <ReviewsCard data={item} />
                  </SwiperSlide>
                ))}
              <div className={styles.btns}>
                <SlidePrevButton className={styles.prevBtn} />
                <SlideNextButton className={styles.nextBtn} />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
