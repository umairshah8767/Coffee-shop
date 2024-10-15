"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import Button from './Button'; // Import the Button component

const Deals = () => {
  return (
    <>
      <div className="mySwiper bg-gray-100">
        <SwiperSlide>
          <div className="container mx-auto py-10 bg-gray-100"> {/* Gray background */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
              <div className="text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
                  <span className="text-amber-900"> Become our dealer</span>
                  <Image src={"/cafe.png"} width={80} height={80} alt="logo" className="inline-block ml-4"/>
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                  Curabitur sollicitudin ultrices tortor, eget pulvinar risus cursus eu. 
                  Vivamus sit amet odio massa. Vivamus dapibus elementum tellus nec fermentum. 
                  Sed blandit condimentum molestie. 
                  In hac habitasse platea dictumst. 
                  Etiam fringilla a elit at ornare.
                </p>
                <div className="flex justify-center md:justify-start gap-4 py-4">
                  <Button onClick={() => console.log('Download App Clicked')} className="bg-black text-white hover:bg-gray-800">Download App</Button>
                  <Button onClick={() => console.log('Shop Coffee Clicked')} variant="secondary">Shop Coffee</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <h3 className="text-gray-500 font-semibold text-3xl">More than</h3>
                  <h1 className="text-amber-900 font-semibold text-7xl">5400</h1>
                  <h2 className="text-gray-500 font-semibold text-5xl">customers trust us</h2>
                  <Image 
                    src={"/cup1.png"} 
                    width={600} 
                    height={600} 
                    alt="Coffee" 
                    className="rounded-lg transition-transform duration-300 transform hover:scale-105 mt-4" 
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>

      <style jsx>{`
        .hover:scale-105 {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
};

export default Deals;
