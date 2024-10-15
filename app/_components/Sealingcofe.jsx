"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Sealingcofe = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold text-amber-900">Best Selling Coffee</h1>
        <p className="text-gray-600 mb-6 py-6 text-lg md:text-xl">
          Curabitur sollicitudin ultrices tortor, eget pulvinar risus cursus eu. Vivamus sit amet odio massa.
        </p>
      </div>

      <Swiper
        watchSlidesProgress={true}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
       
          <SwiperSlide >
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/order1.png"
                  height={200}
                  width={200}
                  alt="Double Espresso"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-500">#1 Selling</p>
                  <h1 className="font-semibold text-amber-900 text-3xl mt-2">Double Espresso</h1>
                </div>
              </div>
              <p className="text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore.
              </p>
              <button className="mt-4 bg-black text-white py-2 px-6 rounded-md shadow-lg transition hover:bg-gray-800">
                Learn More
              </button>
            </div>
          </SwiperSlide>
{/**2 */}
<SwiperSlide >
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/order1.png"
                  height={200}
                  width={200}
                  alt="Double Espresso"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-500">#1 Selling</p>
                  <h1 className="font-semibold text-amber-900 text-3xl mt-2">Double Espresso</h1>
                </div>
              </div>
              <p className="text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore.
              </p>
              <button className="mt-4 bg-black text-white py-2 px-6 rounded-md shadow-lg transition hover:bg-gray-800">
                Learn More
              </button>
            </div>
          </SwiperSlide>

          {/** */}

          <SwiperSlide >
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/order1.png"
                  height={200}
                  width={200}
                  alt="Double Espresso"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-500">#1 Selling</p>
                  <h1 className="font-semibold text-amber-900 text-3xl mt-2">Double Espresso</h1>
                </div>
              </div>
              <p className="text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore.
              </p>
              <button className="mt-4 bg-black text-white py-2 px-6 rounded-md shadow-lg transition hover:bg-gray-800">
                Learn More
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/order1.png"
                  height={200}
                  width={200}
                  alt="Double Espresso"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-500">#1 Selling</p>
                  <h1 className="font-semibold text-amber-900 text-3xl mt-2">Double Espresso</h1>
                </div>
              </div>
              <p className="text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore.
              </p>
              <button className="mt-4 bg-black text-white py-2 px-6 rounded-md shadow-lg transition hover:bg-gray-800">
                Learn More
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/order1.png"
                  height={200}
                  width={200}
                  alt="Double Espresso"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-500">#1 Selling</p>
                  <h1 className="font-semibold text-amber-900 text-3xl mt-2">Double Espresso</h1>
                </div>
              </div>
              <p className="text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore.
              </p>
              <button className="mt-4 bg-black text-white py-2 px-6 rounded-md shadow-lg transition hover:bg-gray-800">
                Learn More
              </button>
            </div>
          </SwiperSlide>

    
      </Swiper>
    </div>
  );
};

export default Sealingcofe;
