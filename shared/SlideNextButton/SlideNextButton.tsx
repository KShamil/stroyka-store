'use client'

import React, { FC } from 'react'
import { SlideNextButtonProps } from './SlideNextButton.props'
import { useSwiper } from 'swiper/react';
import NextIcon from './nextIcon.svg';

export const SlideNextButton:FC<SlideNextButtonProps>= ({...props}):JSX.Element => {
    const swiper = useSwiper();
  return (
    <button {...props} onClick={() => swiper.slideNext()}>
        <NextIcon/>
    </button>
  )
}