import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get("/item.json")
      .then((res) => {
        const found = res.data.find((p) => p.id === parseInt(id));
        setItem(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const [rating, setRating] = useState(5);

  if (!item) return <div className="p-8">Loading...</div>;

  return (
    <div className="flex flex-wrap gap-10 px-8 py-10">
      {/* Thumbnail */}
      <div className="w-20 h-20 border-2 border-cyan-500 rounded p-1">
        <img
          src={item.image}
          alt={item.name}
          className="object-contain h-full w-full"
        />
      </div>

      {/* Main image */}
      <div className="flex-1 max-w-sm">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Product info */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-2xl font-bold mb-2">{item.name}</h1>

        {/* Rating */}
        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />

        {/* Price */}
        <p className="text-cyan-500 text-2xl font-bold mb-4">
          {item.price} taka
        </p>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          {item.description.slice(0, 200)}...
        </p>

        {/* Details */}
        <div className="border-b-2 border-cyan-500 w-24 mb-4" />
        <p>
          <strong>Brand:</strong> {item.brand}
        </p>
        <p>
          <strong>Category:</strong> {item.category}
        </p>
        <p>
          <strong>Stock Quantity:</strong> {item.stockQuantity}
        </p>
        <p>
          <strong>Availability:</strong> {item.availability}
        </p>

        {/* Quantity & Buttons */}
        <div className="flex items-center gap-4 mt-6">
          <div className="border border-gray-300 flex items-center">
            <button onClick={decrease} className="px-3 py-1">
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button onClick={increase} className="px-3 py-1">
              +
            </button>
          </div>

          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded">
            ADD TO CART
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded">
            BUY IT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
