import React, { useState, useEffect } from "react";
import carousel_pic1 from "./../../../assets/carousel_pic1.jpg";
import carousel_pic2 from "./../../../assets/carousel_pic2.webp";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "motion/react";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      name: carousel_pic1,
    },
    {
      id: 2,
      name: carousel_pic2,
    },
  ];
  const [curr, setCurr] = useState(0);
  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  // Auto-slide logic
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }, 5000); // Change slides every 3 seconds

    return () => clearInterval(autoSlide); // Cleanup on component unmount
  }, [slides.length]);
  return (
    <section className="overflow-hidden relative">
      <div>
        {/* Images */}
        <div
          className="relative flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((item) => (
            <motion.img
              key={item.id}
              src={item.name}
              alt={`Slide ${item.id}`}
              className="w-full h-full object-cover  top-0 left-0"
              animate={{ scale: [1.2, 1] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        {/* Left & Right Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-8 m-6">
          <button
            className="p-2 rounded-full shadow bg-gray-400/20"
            onClick={prev}
          >
            <FiChevronLeft size={30} />
          </button>
          <button
            className="p-2 rounded-full shadow bg-gray-400/20"
            onClick={next}
          >
            <FiChevronRight size={30} />
          </button>
        </div>

        {/* Slider  */}
        <div className="absolute bottom-3 right-0 left-0">
          <div className="flex items-center justify-center gap-2 ">
            {slides.map((_, i) => (
              <div className="w-16 h-[2px] bg-gray-400 relative overflow-hidden">
                {/* Active slider animation */}
                {curr === i && (
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gray-900"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 5,
                      ease: "linear",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
