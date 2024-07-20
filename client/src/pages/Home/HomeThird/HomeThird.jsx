import React from "react";

const HomeThird = () => {
  return (
    <div className="flex w-[100%] justify-around items-center px-1 py-6">
      <div className="w-[40%] flex items-center justify-center">
        <img className="w-[440px] h-[600px]" src={require("../../../assets/home/chef.jpg")} alt="" />
      </div>
      <div className="w-[60%] flex flex-col items-center justify-around gap-[120px]"> 
        <div className=" w-[70%] ">
        <span className="mb-3">GOURMET BURGERS</span>
        <h1 className="text-[45px] leading-[50px]">DELICIOUS BURGERS MADE</h1>
        <h1 className="text-[45px] leading-[50px] ">MADE FROM THE FRESHEST</h1>
        <h1 className="text-[45px] leading-[50px] mb-3">INGREDIENTS</h1>
        <span className="">
          Nibh venenatis cras sed felis eget velit aliquet sagittis. Faucibus
          purus in massa tempor nec feugiat nisl pretium fusce.
        </span>
        </div>
        <div>
          <img className="w-[539px] h-[365px]" src={require("../../../assets/home/bundle.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeThird;
