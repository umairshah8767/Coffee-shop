"use client";
import React from "react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    rating: 5,
    comment: "Absolutely love this coffee! It’s rich and flavorful.",
    avatar: "/avatar1.png",
  },
  {
    id: 2,
    name: "Bob Smith",
    rating: 4,
    comment: "Great coffee, but I wish it had a stronger flavor.",
    avatar: "/avatar2.png",
  },
  {
    id: 3,
    name: "Charlie Brown",
    rating: 5,
    comment: "Best coffee I've ever tasted! Will buy again.",
    avatar: "/avatar3.png",
  },
];

const Reviews = () => {
  return (
    <div className="relative">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
      >
        <source src="/your-video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container mx-auto px-4 py-10 relative z-10">
        <h1 className="text-4xl font-bold text-center text-amber-900 mb-6">Customer Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Image
                src={"/man.png"}
                alt={"man"}
                width={100}
                height={100}
                className="rounded-full mb-4 mx-auto"
              />
              <h2 className="text-lg font-semibold text-gray-800">{review.name}</h2>
              <p className="text-yellow-500">{'⭐'.repeat(review.rating)}</p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
