import React from "react";
import bigpic1 from "./../../../assets/bigpic1.webp";
import bigpic2 from "./../../../assets/bigpic2.webp";
import { motion } from "motion/react";

const BigBanners = () => {
  return (
    <section>
      <div className="flex">
        {/* Left pic */}
        <div className="relative overflow-hidden">
          <motion.img
            src={bigpic1}
            alt="BigPic1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <div className="absolute bottom-6 left-6 p-5">
            <h3 className="text-4xl text-white font-medium pb-3">
              High Performance Meets Purpose
            </h3>
            <button className="uppercase text-white underline font-semibold">
              shop now
            </button>
          </div>
        </div>
        {/* Right pic */}
        <div className="relative overflow-hidden">
          <motion.img
            src={bigpic2}
            alt="BigPic2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <div className="absolute bottom-6 left-6 p-5">
            <h3 className="text-4xl text-white font-medium pb-3">
              Skin Decoder Quiz
            </h3>
            <button className="uppercase text-white underline font-semibold">
              shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigBanners;
