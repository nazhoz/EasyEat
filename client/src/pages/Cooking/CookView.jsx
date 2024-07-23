import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";
import Counters from "../products/productsList/Counters";
import CookRelated from "./CookRelated";

const CookView = () => {
  const { id } = useParams();
  const { products } = useContext(ShopContext);
  const product = products.find((product) => product.id === parseInt(id));
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItem = cartItems.find((item) => item.id === parseInt(id));

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="text-slate-600">
            &#9733;
          </span>
        ); // Filled star
      } else {
        stars.push(
          <span key={i} className="text-white">
            &#9733;
          </span>
        ); // Empty star
      }
    }
    return stars;
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div className="flex flex-col items-center gap-6  bg-customerBackroundColor">
      <div className="mt-[50px] flex flex-col w-[100%]">
        <div className="flex w-[100%] h-[100vh] justify-around items-center ">
          <img
            className="w-[450px] h-[400px] object-cover bg-gray-200 rounded-lg"
            src={`http://localhost:1145/${product.images}`}
            alt="no images"
          />
          <div className="w-[40%] h-[400px] flex flex-col justify-between items-start">
            <div className="flex flex-col items-start gap-3 ">
              <span className="text-[35px] font-bold">{product.name}</span>
              <div className="flex w-[100%] justify-between items-center">
                <span className="text-[25px] font-bold text-slate-600">
                  $ {product.price}
                </span>
                <span className="text-[25px] font-bold text-slate-600  w-[32%] flex justify-around">
                  {" "}
                  {product.rating}{" "}
                  <span className="">{renderStars(product.rating)}</span>
                </span>
              </div>

              <span className="text-[18px] text-center text-slate-600">
                {product.description}
              </span>
              <div>
                <span className="font-bold text-slate-600 text-[20px] ">
                  Ingredients:
                </span>
                <div className="grid grid-cols-2">
                  {product.ingredients.map((ingre) => (
                    <li className="ml-8 text-slate-600">{ingre}</li>
                  ))}
                </div>
              </div>
            </div>
            <div className=" w-[100%] h-[130px] flex gap-3 justify-around items-center">
              <Counters
                id={product.id}
                quantity={cartItem ? cartItem.quantity : 0}
              />
              <button
                onClick={handleAddToCart}
                className="w-[245px] h-[50px] bg-white text-black hover:bg-black hover:text-white rounded-md"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div>
          <CookRelated category={product.categories} />
        </div>
      </div>
    </div>
  );
};

export default CookView;
