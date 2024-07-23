import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../features/cart/cartSlice";
import Skelton from "../../components/animation/Skelton";


const Carts = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="cart p-4">
      <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>
      {loading ? (
        <>
          <Skelton />
          <Skelton />
          <Skelton />
        </>
      ) : cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="mb-4">
              <div className="flex space-x-4 border-b pb-4">
                <img
                  src={`http://localhost:1145/${item.images}`}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="px-2 py-1 border rounded hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="px-2 py-1 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="mt-2 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carts;
