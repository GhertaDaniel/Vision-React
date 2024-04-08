import React, { Component } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import { swiperData } from '../../assets/images/carousel/';

const swiperSlides = [];
for (let i = 0; i < swiperData.length; i++) {
  const data = swiperData[i];
  swiperSlides.push(
    <SwiperSlide key={i}>
      {i === swiperData.length - 1 ? (
        <>
          <img src={data.imageSrc} alt="image" />
          <div>
            <h3>{data.title}</h3>
            <h2>{data.subtitle}</h2>
            <h3>only in vision</h3>
          </div>
        </>
      ) : (
        <>
          <img src={data.imageSrc} alt="image" />
          {data.title && <h1>{data.title}</h1>}
          {data.subtitle && <h3>{data.subtitle}</h3>}
          {data.quote && (
            <div>
              <p>{data.quote}</p>
              <p>
                <span>style</span> is what you do with it".
              </p>
            </div>
          )}
          {data.logoSrc && <img src={data.logoSrc} alt="logo" id="logo" />}
        </>
      )}
    </SwiperSlide>,
  );
}

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      observer={true}
      observeParents={true}
      slidesPerView={1}
      autoHeight={true}
      speed={800}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {swiperSlides}
    </Swiper>
  );
};

export default Carousel;
