"use client";
import React from "react";
import Image from "next/image";

const Ordercofe = () => {
  return (
    <>
      <style jsx>{`
        .image-container {
          transition: transform 0.5s ease;
        }
        .image-container:hover {
          transform: rotate(15deg);
          cursor: pointer; /* Pointer cursor */
        }
        .image-container:hover img {
          filter: drop-shadow(0 0 10px gold); /* Golden hover effect */
        }
        .header {
          color: #8B4513; /* Brown color */
        }
        .button {
          background-color: black; /* Black buttons */
        }
        .button:hover {
          background-color: #333; /* Darker shade on hover */
        }
      `}</style>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4"> {/* Responsive grid */}
            <div className="image-container flex justify-center mb-4 md:mb-0">
              <Image
                src="/order.png"
                height={600}
                width={600}
                alt="img"
                className="max-w-full h-auto"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-semibold text-amber-900">
                Order Your Favorite Coffee
              </h1>
              <p className="text-gray-600 mb-2 py-4 text-base sm:text-lg md:text-xl">
                Curabitur sollicitudin ultrices tortor, 
                eget pulvinar risus cursus eu. Vivamus sit amet odio massa. 
                Vivamus dapibus elementum tellus nec fermentum. Sed blandit condimentum molestie. 
                In hac habitasse platea dictumst. 
                Etiam fringilla a elit at ornare.
              </p>
              <button className="mt-4 button text-white py-2 px-6 sm:px-4 rounded-md shadow-lg transition block mx-auto md:mx-0">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ordercofe;
