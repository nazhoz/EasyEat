import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { RiShoppingBag2Line } from "react-icons/ri";
// import { FaRegUser } from "react-icons/fa";
import Login from "../../components/Login/Login";
import Search from "../../components/Search/Search";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`flex justify-between px-4 items-center p-4 fixed w-full top-0 z-10 transition-all duration-300 ${
          scroll ? "bg-gray-950" : "bg-transparent"
        }`}
      >
        <div className="flex  w-[50%] justify-around items-center">
          <div className="">
            <Link to="/">
              {" "}
              <img
                src={require("../../assets/navbar/logo-inverse.png")}
                alt=""
              />{" "}
            </Link>
          </div>
          <div className=" w-[65%] flex justify-evenly items-center">
            <Link className="text-white hover:text-yellow-400" to="/items">
              PRODUCTS
            </Link>
            <Link className="text-white hover:text-yellow-400" to="/cooking">
              COOKING
            </Link>
            <Link className="text-white hover:text-yellow-400" to="/contact">
              CONTACT US
            </Link>
          </div>
        </div>
        <div className=" flex gap-[30px] justify-center items-center">
        <div className="text-white hover:text-gray-900">
            <Search/>
          </div>
          <Link className="text-white hover:text-gray-900" to="/cart">
            <RiShoppingBag2Line size={28} />
          </Link>
          <div className="text-white hover:text-gray-900 mt-2" >
            <Login/>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
