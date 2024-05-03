import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../styles/slides.css";


import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import slide_image_1 from '../assets/Atari-1.png';
import slide_image_2 from "../assets/Gb-2.jpg";
import slide_image_3 from "../assets/Gb-3.jpg";
import slide_image_4 from "../assets/Gb-4.jpg";
import slide_image_5 from "../assets/Gb-5.jpg";
import slide_image_6 from "../assets/Gb-1.jpg";
import slide_image_7 from "../assets/Gba-1.jpg";
import slide_image_8 from "../assets/Gba-2.jpg";
import slide_image_9 from "../assets/Gba-3.jpg";
import slide_image_10 from "../assets/Gba-4.jpg";


function HomeSlide() {
  return (
    <div className='Container-Slide'>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" />
        </SwiperSlide>

        </Swiper>
            <div className="slider-controler">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
   
  );
}

export default HomeSlide;
