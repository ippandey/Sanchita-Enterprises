import React from "react";
import banner from "./../../../assets/banner.webp";

const Banner = () => {
  return (
    <section>
      <div className="relative">
        <img src={banner} alt="Banner" className="w-full h-auto" />
        <div className="absolute right-16 top-36 bg-white h-1/2 w-2/5 p-9">
          <h3 className="uppercase text-[#7e7e84] text-sm font-normal pb-4">
            holiday gift guides
          </h3>
          <p className="text-3xl pb-4 font-normal">
            Last Chance to Save 20% Off.
          </p>
          <p className="pb-6 font-light">Excludes Mood Lighting</p>
          <button className="uppercase bg-black text-white text-sm rounded-md w-32 h-12 hover:opacity-75">
            shop gift
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
