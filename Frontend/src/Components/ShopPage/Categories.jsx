import React from "react";
import category_pic from "./../../assets/category_pic.webp";
import { motion } from "motion/react";

const Categories = () => {
  const CategoryList = [
    {
      img: category_pic,
      title: "Dyeing Agents",
    },
    {
      img: category_pic,
      title: "Printing Chemicals",
    },
    {
      img: category_pic,
      title: "Finishing Agents",
    },
    {
      img: category_pic,
      title: "Pretreatment Chemicals",
    },
    {
      img: category_pic,
      title: "Auxiliary Chemicals",
    },
  ];
  return (
    <div>
      <div className="mx-20 my-10">
        {/* Heading Section */}
        <div className="mb-10">
          <p className="text-[#7e7e84] font-work uppercase mb-2">
            Explore Cadiant
          </p>
          <h1 className="text-[44px] font-cormorant italic">
            Shop By Categories
          </h1>
        </div>

        {/* Images Section */}
        <div className="flex gap-8">
          {CategoryList.map((item, index) => (
            <div key={index} className="relative text-center">
              <motion.img
                src={category_pic}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              {/* Centered Content */}
              <div className="absolute flex flex-col inset-0 items-center justify-center">
                <p className="font-work font-normal text-base text-white">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
