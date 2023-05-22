'use client'

import React, { FC } from 'react'
import { SlidePrevButtonProps } from './SlidePrevButton.props'
import { useSwiper } from 'swiper/react';
import PrevIcon from './prevIcon.svg';

export const SlidePrevButton:FC<SlidePrevButtonProps> = ({...props}):JSX.Element => {
    const swiper = useSwiper();
  return (
    <button {...props} onClick={() => swiper.slidePrev()}>
        <PrevIcon/>
    </button>
  )
}