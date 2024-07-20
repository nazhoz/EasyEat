import React from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../../features/cart/cartSlice";

const Counters = ({id, quantity}) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-slate-600 text-white w-[245px] h-[50px] flex justify-around items-center border-[1px] border-white">
      <div onClick={()=> dispatch(decreaseQuantity(id))} className="w-[35%] border-r-[1px] h-[50px] flex items-center justify-center border-white">
        <BiSolidLeftArrow />
      </div>
      <div className="w-[35%]  h-[50px] flex items-center justify-center border-white" >
        <span>{quantity}</span>
      </div>
      <div onClick={()=> dispatch(increaseQuantity(id))} className="w-[35%] border-l-[1px] h-[50px] flex items-center justify-center border-white">
        <BiSolidRightArrow />
      </div>
    </div>
  );
};

export default Counters;
