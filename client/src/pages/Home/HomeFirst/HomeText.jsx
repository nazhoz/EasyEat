import React, { useState } from "react";
import bbqY from "../../../assets/home/bbq.png";
import sauceY from "../../../assets/home/sauce.png";
import forkY from "../../../assets/home/fork.png";
import bbqW from "../../../assets/home/bbq-white.png";
import sauceW from "../../../assets/home/sauce-white.png";
import forkW from "../../../assets/home/fork-white.png";

const HomeText = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-[60%] mt-[110px] text-white flex items-center justify-center">
      <div className="flex flex-col justify-between h-[80%] w-[100%] items-start pl-[10%]">
        <div className="">
          <h1 className="text-[50px]">UNFORGETTABLE BURGERS,</h1>
          <h1 className="text-[50px]">UNFORGETTABLE MEMORIES</h1>
        </div>
        <div className="flex space-x-4 justify-start items-center gap-[15%] w-[90%] ">
          <div className=" p-2 flex flex-col justify-between items-center h-[120px] ">
            <img
              src={hovered === "bbq" ? bbqW : bbqY}
              alt="BBQ"
              onMouseEnter={() => setHovered("bbq")}
              onMouseLeave={() => setHovered(null)}
              className="transition duration-300"
            />
            <span className="text-yellow-300">Grilled</span>
          </div>
          <div className=" p-2 flex flex-col justify-between items-center h-[120px]">
            <img
              src={hovered === "sauce" ? sauceW : sauceY}
              alt="Sauce"
              onMouseEnter={() => setHovered("sauce")}
              onMouseLeave={() => setHovered(null)}
              className="transition duration-300"
            />
            <span className="text-yellow-300">Sauces</span>
          </div>
          <div className=" p-2 flex flex-col justify-between items-center h-[120px]">
            <img
              src={hovered === "fork" ? forkW : forkY}
              alt="Fork"
              onMouseEnter={() => setHovered("fork")}
              onMouseLeave={() => setHovered(null)}
              className="transition duration-300"
            />
            <span className="text-yellow-300">Forks</span>
          </div>
        </div>
        <button className="px-10 py-4 bg-customOrange hover:bg-white text-white hover:text-black rounded transition duration-300">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default HomeText;
