'use client'
import React from 'react'
import s from './Slider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Autoplay, Navigation } from 'swiper/modules';



import { slide1, slide2, slide3} from '@/utils/images'


let images = [slide1, slide2, slide3]

const Slider = () => {
  return (
    <Swiper
      className={s.swiper}
      effect={'creative'}
      grabCursor={true}
      centeredSlides={true}
      loop
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      creativeEffect={{
        prev: {
          shadow: false,
          translate: ['-120%', 0, -500],
        },
        next: {
          shadow: false,
          translate: ['120%', 0, -500],
        },
      }}
      spaceBetween={30}
      slidesPerView={1}
      modules={[Autoplay, Navigation]}
    >
      {images.map((img, i) => (

        <SwiperSlide
          key={i}
          className={s.swiper__item}
        >
          <img src={img.src} alt="" className={s.swiper__item_img} />
        </SwiperSlide>
      ))}

    </Swiper>
  )
}

export default Slider