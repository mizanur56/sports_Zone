// import axios from "axios";
// import { useEffect, useState } from "react";
import FeaturedCard from "../Ui/Featured/FeaturedCard";
import useProducts from "../../Hooks/useProducts";

const Products = () => {
  //   const [allProducts, setAllProducts] = useState([]);
  const [products] = useProducts();

  //   useEffect(() => {
  //     axios.get("item.json").then((res) => {
  //       setAllProducts(res.data);
  //     });
  //   });
  return (
    <div className="my-10 max-w-7xl mx-auto px-4 lg:px-8 py-3">
      <h1 className="text-5xl font-semibold text-center my-5">ALL PRODUCTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {products.map((item, index) => (
          <FeaturedCard key={index} item={item}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
