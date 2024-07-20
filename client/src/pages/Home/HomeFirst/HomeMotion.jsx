import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../App.css";
import { Autoplay, Pagination } from "swiper/modules"; // Add Pagination module
import burger from "../../../assets/home/burger.png";
import beefBurger from "../../../assets/home/beefburger.png";
import deliBurger from "../../../assets/home/deli-burger.png";
import grillBurger from "../../../assets/home/grillburger.png";

const HomeMotion = () => {
  const imgRefs = useRef([]);

  useEffect(() => {
    const handleMouseEnter = (e, imgElement) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = imgElement.getBoundingClientRect();

      const horizontalMidpoint = left + width / 2;
      const verticalMidpoint = top + height / 2;

      let x = 0,
        y = 0;

      if (clientX < horizontalMidpoint) {
        x = 30; // Move right
      } else {
        x = -30; // Move left
      }

      if (clientY < verticalMidpoint) {
        y = 30; // Move down
      } else {
        y = -30; // Move up
      }

      gsap.to(imgElement, {
        x,
        y,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = (imgElement) => {
      gsap.to(imgElement, {
        x: 0,
        y: 0,
        ease: "power3.out",
      });
    };

    const imgElements = imgRefs.current;

    imgElements.forEach((imgElement) => {
      if (imgElement) {
        imgElement.addEventListener("mouseenter", (e) =>
          handleMouseEnter(e, imgElement)
        );
        imgElement.addEventListener("mouseleave", () =>
          handleMouseLeave(imgElement)
        );
      }
    });

    imgElements.forEach((imgElement) => {
      if (imgElement) {
        const timeline = gsap.timeline({ repeat: -1, yoyo: true });
        timeline
          .to(imgElement, { x: 10, y: -10, duration: 3, ease: "power1.inOut" })
          .to(imgElement, { x: -10, y: 10, duration: 3, ease: "power1.inOut" })
          .to(imgElement, { x: -10, y: -10, duration: 3, ease: "power1.inOut" })
          .to(imgElement, { x: 10, y: 10, duration: 3, ease: "power1.inOut" });
      }
    });

    return () => {
      imgElements.forEach((imgElement) => {
        if (imgElement) {
          imgElement.removeEventListener("mouseenter", (e) =>
            handleMouseEnter(e, imgElement)
          );
          imgElement.removeEventListener("mouseleave", () =>
            handleMouseLeave(imgElement)
          );
        }
      });
    };
  }, []);

  const imagesWithNames = [
    { src: burger, name: "Classic Burger" },
    { src: deliBurger, name: "Deli Burger" },
    { src: grillBurger, name: "Grill Burger" },
    { src: beefBurger, name: "Beef Burger" },
  ];

  return (
    <div className="flex justify-center items-center h-[100vh] w-[39.2%]">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true, type: "progressbar" }} // Use progressbar for pagination
        modules={[Autoplay, Pagination]} // Add Pagination module
      >
        {imagesWithNames.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[100vh] flex items-center flex-col justify-center">
              <img
                ref={(el) => (imgRefs.current[index] = el)}
                src={image.src}
                alt="Food"
                className="w-[400px] h-[300px]"
              />
              <span className="text-[30px] font-semibold text-white">{image.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeMotion;
