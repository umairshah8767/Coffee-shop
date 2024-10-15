"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import Button from './Button'; // Import the Button component

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 30000, // Adjusted to a more reasonable time for demo purposes
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper bg-gray-100" // Set background color to gray
      >
        <SwiperSlide>
          <div className="container mx-auto py-10 bg-gray-100"> {/* Gray background */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
              <div className="text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
                  <span className="text-amber-900">Alowishus</span> Delicious Coffee 
                  <Image src={"/cafe.png"} width={80} height={80} alt="logo" className="inline-block ml-4"/>
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                  Sed sagittis sodales lobortis. Curabitur in eleifend turpis, 
                  id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.
                </p>
                <div className="flex justify-center md:justify-start gap-4 py-4">
                  <Button onClick={() => console.log('Download App Clicked')} className="bg-black text-white hover:bg-gray-800">Download App</Button>
                  <Button onClick={() => console.log('Shop Coffee Clicked')} variant="secondary">Shop Coffee</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image 
                  src={"/side1.png"} 
                  width={600} 
                  height={600} 
                  alt="Coffee" 
                  className="rounded-lg transition-transform duration-300 transform hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
        <SwiperSlide>
          <div className="container mx-auto py-10 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
              <div className="text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
                <span className="text-amber-900">Alowishus</span> Delicious Coffee 
                  <Image src={"/cafe.png"} width={80} height={80} alt="logo" className="inline-block ml-4"/>
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                  Sed sagittis sodales lobortis. Curabitur in eleifend turpis, 
                  id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.
                </p>
                <div className="flex justify-center md:justify-start gap-4 py-4">
                  <Button onClick={() => console.log('Download App Clicked')} className="bg-black text-white hover:bg-gray-800">Download App</Button>
                  <Button onClick={() => console.log('Shop Coffee Clicked')} variant="secondary">Shop Coffee</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image 
                  src={"/bnnr2.png"} 
                  width={600} 
                  height={600} 
                  alt="Coffee" 
                  className="rounded-lg transition-transform duration-300 transform hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto py-10 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
              <div className="text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
                <span className="text-amber-900">Alowishus</span> Delicious Coffee 
                  <Image src={"/cafe.png"} width={80} height={80} alt="logo" className="inline-block ml-4"/>
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                  Sed sagittis sodales lobortis. Curabitur in eleifend turpis, 
                  id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.
                </p>
                <div className="flex justify-center md:justify-start gap-4 py-4">
                  <Button onClick={() => console.log('Download App Clicked')} className="bg-black text-white hover:bg-gray-800">Download App</Button>
                  <Button onClick={() => console.log('Shop Coffee Clicked')} variant="secondary">Shop Coffee</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image 
                  src={"/slide3.png"} 
                  width={600} 
                  height={600} 
                  alt="Coffee" 
                  className="rounded-lg transition-transform duration-300 transform hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx>{`
        .hover:scale-105 {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
};

export default Banner;
