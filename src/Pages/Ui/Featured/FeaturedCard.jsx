import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const FeaturedCard = ({ item }) => {
  const [rating, setRating] = useState(5);
  //   console.log(item);
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden group transition-all duration-300">
      <div className="p-6 flex justify-center">
        <img
          src={item?.image}
          alt={item?.name}
          className="rounded-xl w-full max-w-[200px] object-cover"
        />
      </div>
      <div className="flex items-center justify-center py-2">
        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
      </div>
      <div className="px-4 pb-6 text-center">
        <h2 className="text-xl font-semibold mb-2">{item?.name}</h2>
        <p className="text-gray-600 mb-4">Brand: {item?.brand}</p>
        <p className="text-xl font-semibold mb-4">Price: {item?.price} taka</p>
      </div>

      {/* Buttons hidden by default, shown on hover */}
      <div className="flex items-center justify-between px-3 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-transparent border-2 border-teal-600 text-teal-600 text-2xl p-2 rounded-md hover:bg-red-700 hover:text-white hover:border-red-700 transition">
          <FaCartShopping />
        </button>
        <Link to={`/itemDetails/${item.id}`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            More Details
          </button>
        </Link>
        <button className="bg-red-600 text-white p-2 text-2xl rounded-md hover:bg-teal-700 transition">
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default FeaturedCard;
