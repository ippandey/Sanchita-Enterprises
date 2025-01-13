import React, { useEffect, useState } from "react";
import carousel_pic2 from "./../../../assets/carousel_pic2.webp";
import CarouselPic1 from "./../../../assets/CarouselPic1.jpg";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

const ImageSlider = () => {
  const images = [carousel_pic2, CarouselPic1];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };
  const next = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-96 sm:h-[400px] md:h-[600px] overflow-hidden">
      {/* Image Section */}
      <motion.div
        key={currentIndex}
        className="w-full h-full absolute"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        exit={{ scale: 1.2 }}
        transition={{ duration: 2 }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </motion.div>

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
          {images.map((_, i) => (
            <div
              key={i}
              className="w-16 h-[2px] bg-gray-400 relative overflow-hidden"
            >
              {/* Active slider animation */}
              {currentIndex === i && (
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
  );
};

export default ImageSlider;
