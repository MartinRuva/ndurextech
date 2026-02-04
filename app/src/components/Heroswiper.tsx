'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      loop
      className="w-full md:w-[80%] h-[60vh] flex justify-center mb-8"
    >
      <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src="/slide1.webp"
            alt="Phone Repair"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold">Fast Electronics Repairs</h1>
            <p className="mt-4">Same-day service available</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full cover relative">
          <Image
            src="/slide2.jpg"
            alt="Laptop Repair"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold">Fridge and Tv Repairs</h1>
            <p className="mt-4">Affordable & reliable solutions</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src="/slide3.webp"
            alt="Electronics Repair"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold">All Electronics Fixed</h1>
            <p className="mt-4">Quality guaranteed</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
