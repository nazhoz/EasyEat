import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../../context/ShopContext";

const HomeFour = () => {
  const { products } = useContext(ShopContext);

  const [selectedCategory, setSelectedCategory] = useState("meat_&_fish");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    filterProducts(selectedCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, products]);

  const filterProducts = (category) => {
    let categoryProducts = [];
    switch (category) {
      case "meat_&_fish":
        categoryProducts = products
          .filter((product) => product.categories === "meat_&_fish")
          .slice(0, 4);
        break;
      case "teas":
        categoryProducts = products
          .filter((product) => product.categories === "teas")
          .slice(0, 4);
        break;
      case "popular_dishes":
        categoryProducts = products
          .filter((product) => product.categories === "popular_dishes")
          .slice(0, 4);
        break;
      default:
        categoryProducts = products
          .filter((product) => product.categories === "meat_&_fish")
          .slice(0, 4);
    }
    setFilteredProducts(categoryProducts);
  };

  return (
    <div className="w-[100%] py-20 flex flex-col justify-around items-center gap-[40px]">
      <div className="w-[60%] flex justify-evenly items-center ">
        <button
          onClick={() => setSelectedCategory("meat_&_fish")}
          className={`w-[163px] h-[57px] ${
            selectedCategory === "meat_&_fish"
              ? "bg-customOrange text-white"
              : "bg-white text-black border-[1px] border-black"
          } hover:bg-customOrange hover:text-white transition duration-300`}
        >
          Meat & Fish
        </button>
        <button
          onClick={() => setSelectedCategory("teas")}
          className={`w-[163px] h-[57px] ${
            selectedCategory === "teas"
              ? "bg-customOrange text-white"
              : "bg-white text-black border-[1px] border-black"
          } hover:bg-customOrange hover:text-white transition duration-300`}
        >
          Teas
        </button>
        <button
          onClick={() => setSelectedCategory("popular_dishes")}
          className={`w-[163px] h-[57px] ${
            selectedCategory === "popular_dishes"
              ? "bg-customOrange text-white"
              : "bg-white text-black border-[1px] border-black"
          } hover:bg-customOrange hover:text-white transition duration-300`}
        >
          Popular Dishes
        </button>
      </div>
      <div className="flex items-center justify-around w-[100%] gap-3 px-7">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col rounded-lg p-6 shadow-2xl justify-between items-center h-[30%] gap-4"
            >
              <img
                className="w-[250px] h-[230px] object-cover bg-gray-200 rounded-lg"
                src={`http://localhost:1145/${product.images}`}
                alt={product.name}
              />
              <div className="flex flex-col items-center gap-3">
                <span className="text-lg">{product.name}</span>
                <span className="text-md text-slate-600">
                  $ {product.price}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default HomeFour;
