import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import cricketImage from "../../assets/Bat.png";
import badmintonImage from "../../assets/Badminton.png";
import hockeyImage from "../../assets/Hockey.png";
import rugbyImage from "../../assets/Rugby-Ball.png";
import bicycleImage from "../../assets/bicycle.png";
import bagImage from "../../assets/Bag.jpg";
import pantImage from "../../assets/m-removebg-preview.png";
import shoesImage from "../../assets/shoes.png";
import jerseyImage from "../../assets/jersey.png";

const categories = [
  {
    name: "Cricket",
    image: cricketImage,
  },
  {
    name: "Badminton",
    image: badmintonImage,
  },
  {
    name: "Hockey",
    image: hockeyImage,
  },
  {
    name: "Rugby Ball",
    image: rugbyImage,
  },
  {
    name: "Sport's Bike",
    image: bicycleImage,
  },
  {
    name: "Sport's Bag",
    image: bagImage,
  },
  {
    name: "Men's Wear",
    image: pantImage,
  },
  {
    name: "Shoes",
    image: shoesImage,
  },
  {
    name: "Jersey",
    image: jerseyImage,
  },
];

const Category = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    container.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow"
      >
        <FaArrowLeft />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-hidden no-scrollbar gap-20 px-10 py-6 scroll-smooth"
      >
        {categories.map((category, idx) => (
          <div key={idx} className="flex-shrink-0 w-40 text-center">
            <div className="border-2 border-cyan-400 rounded-full p-4 h-40 w-40 mx-auto flex items-center justify-center bg-white">
              <img
                src={category.image}
                alt={category.name}
                className="h-20 object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold mt-4">{category.name}</h3>
            <Link className="text-sm text-gray-500">View More</Link>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Category;
