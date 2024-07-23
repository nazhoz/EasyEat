import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Search = () => {
  return (
    <div>
      <div className="p-2 overflow-hidden w-[45px] h-[40px] hover:w-[270px] bg-[#fff]/20 backdrop-blur-sm shadow-md rounded-full flex group items-center hover:duration-300 duration-300">
        <div className="flex items-center justify-center fill-white ">
          <RiSearchLine size={28} className="text-white" />
        </div>
        <input
          type="text"
          className="outline-none text-[13px] bg-transparent w-full text-white font-normal px-4"
        />
      </div>
    </div>
  );
};

export default Search;
