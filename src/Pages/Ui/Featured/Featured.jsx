import axios from "axios";
import React, { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

const Featured = () => {
  const [allItem, setAllItem] = useState([]);
  const [showItem, setShowItem] = useState(4);

  useEffect(() => {
    axios.get("item.json").then((res) => {
      // console.log(res.data);
      setAllItem(res.data);
    });
  });
  // console.log(allItem);
  const featuredItem = allItem.filter((item) => item.isFeatured === true);
  // console.log(featuredItem);

  const showAll = () => {
    setShowItem(featuredItem.length);
  };
  return (
    <div className="my-10 max-w-7xl mx-auto px-4 lg:px-8 py-3">
      <h1 className="text-5xl font-semibold text-center my-5">
        FEATURED PRODUCTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {featuredItem.slice(0, showItem).map((item, index) => (
          <FeaturedCard key={index} item={item}></FeaturedCard>
        ))}
      </div>
      {showItem < featuredItem.length && (
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={showAll}
            className="bg-teal-600 flex items-center gap-3 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
          >
            Show All <FaLongArrowAltRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Featured;
