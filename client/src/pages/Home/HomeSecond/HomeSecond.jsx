import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../../context/ShopContext";

const HomeSecond = () => {
  const { products } = useContext(ShopContext);
  const [randomProducts, setRandomProducts] = useState([]);
    // console.log("products", products);

  useEffect(() => {
    if (products.length > 0) {
      const burgerProducts = products.filter(product => product.categories === "burger");
      const getRandomProducts = () => {
        const selectedProducts = new Set();
        while (selectedProducts.size < 4) {
          const randomIndex = Math.floor(Math.random() * burgerProducts.length);
          selectedProducts.add(burgerProducts[randomIndex]);
        }
        return Array.from(selectedProducts);
      };
      setRandomProducts(getRandomProducts());
    }
  }, [products]);

  return (
    <div className="flex flex-col h-[100%] w-[100%] justify-around items-center mt-[40px] py-6 gap-[60px]">
      <div className="w-[100%] text-center h-[20%]">
        <span className="font-medium text-lg">OUR BURGERS</span>
        <div>
          <h1 className="text-[40px] font-bold leading-2">
            UNLEASH YOUR BURGER
          </h1>
          <h1 className="text-[40px] font-bold">CRAVINGS WITH OUR MENU</h1>
        </div>
      </div>
      <div className="flex  items-center justify-around  w-[100%] gap-3 px-7">
        {randomProducts.map((product) => (
          <div key={product.id} className="flex flex-col rounded-lg p-6 shadow-2xl justify-between items-center h-[30%] gap-4">
            <img
              className="w-[250px] h-[230px] object-cover bg-gray-200 rounded-lg"
              src={`http://localhost:1145/${product.images}`}
              alt="no images"
            />
            <div className="flex flex-col items-center gap-3">
              <span className="text-lg">{product.name}</span>
              <span className="text-md text-slate-600">$ {product.price}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-[163px] h-[57px] bg-customOrange hover:bg-white text-white hover:text-black hover:border-[1px] hover:border-black transition duration-300">
        View More
      </button>
    </div>
  );
};

export default HomeSecond;
