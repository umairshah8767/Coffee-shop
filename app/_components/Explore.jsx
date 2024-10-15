import React from 'react';
import Image from 'next/image';

const Explore = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-semibold text-amber-900">Explore Our Alowishus</h1>
        <p className="text-gray-500 py-6 text-lg max-w-xl mx-auto">
          Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. 
          Donec pulvinar tellus eget magna aliquet ultricies.
        </p>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Our Catering",
            description: "Delicious drop-off catering for any event.",
            imgSrc: "/icon1.png",
            buttonText: "Order Catering"
          },
          {
            title: "The Food",
            description: "Explore our mouthwatering food options.",
            imgSrc: "/icon2.png",
            buttonText: "Explore Menu"
          },
          {
            title: "The Gelato",
            description: "Indulge in our creamy gelato treats.",
            imgSrc: "/icon3.png",
            buttonText: "Discover Gelato"
          }
        ].map((item, index) => (
          <div key={index} className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400">
            <h2 className="text-3xl font-semibold py-4 text-amber-900 text-center">{item.title}</h2>
            <p className="text-gray-600 mb-4 text-center">{item.description}</p>
            <Image className="py-4 mx-auto" src={item.imgSrc} height={150} width={150} alt={item.title} />
            <button className="mt-4 bg-black text-white py-2 px-6 rounded-md shadow-lg hover:bg-gray-800 transition block mx-auto">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
