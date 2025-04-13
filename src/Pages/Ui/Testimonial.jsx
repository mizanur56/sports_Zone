import testimonialBg from "../../assets/testimonial.jpg";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3-BcstlkdK.jpg";
import avatar4 from "../../assets/avatar4.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Testimonial = () => {
  const people = [
    {
      name: "Alice Johnson",
      position: "Product Manager",
      description:
        "SportFlex is my go-to website for all my sports needs. The product descriptions are accurate, and the items I have purchased so far have exceeded my expectations. The yoga mat I ordered is perfect for my daily practice",
      image: avatar1,
    },
    {
      name: "Brian Lee",
      position: "Senior Developer",
      description:
        "SportFlex has an amazing range of sports goods. The quality is top-notch, and the customer service is excellent. I recently bought a pair of running shoes and they are incredibly comfortable and durable.perfect for my training sessions",
      image: avatar2,
    },
    {
      name: "Carmen Diaz",
      position: "UX Designer",
      description:
        "I love shopping at SportFlex. The website is user-friendly, and the product quality is excellent. I recently bought a set of tennis rackets, and they have greatly improved my game",
      image: avatar3,
    },
    {
      name: "Daniel Smith",
      position: "Marketing Director",
      description:
        "I am very impressed with the variety of sports equipment available at SportFlex. The prices are competitive, and the delivery was quick. I bought a new basketball, and it's perfect for my training sessions.",
      image: avatar4,
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${testimonialBg})` }}
      className="bg-cover bg-center min-h-screen text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-12"
    >
      {/* Left Side Text Section */}
      <div className="bg-transparent w-full lg:w-1/3 p-6 lg:p-8 rounded-xl shadow-lg mb-10 lg:mb-0">
        <h3 className="text-2xl font-medium mb-2 border-l-8 border-teal-600 pl-4">
          Our Testimonial
        </h3>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          What they’re talking about our policy
        </h1>
        <p className="text-base lg:text-lg">
          Our policy emphasizes transparency and fairness, aiming to create a
          trustworthy relationship with our valued customers.
        </p>
      </div>

      {/* Swiper Slider Section */}
      <div className="w-full lg:w-2/3 lg:pl-10">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {people.map((person, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-black p-5 rounded-lg shadow-md text-center h-full flex flex-col items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-3 items-center mb-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{person.name}</h3>
                    <p className="text-sm text-gray-800">{person.position}</p>
                  </div>
                </div>
                <p className="text-base text-gray-600">{person.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
