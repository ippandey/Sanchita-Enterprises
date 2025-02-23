import React from "react";
import category_pic from "./../../assets/category_pic.webp";
import { motion } from "motion/react";

const ShopByCategories = () => {
  const CategoryList = [
    {
      id: 1,
      img: category_pic,
      title: "Dyeing Agents",
    },
    {
      id: 2,
      img: category_pic,
      title: "Printing Chemicals",
    },
    {
      id: 3,
      img: category_pic,
      title: "Finishing Agents",
    },
    {
      id: 4,
      img: category_pic,
      title: "Pretreatment Chemicals",
    },
    {
      id: 5,
      img: category_pic,
      title: "Auxiliary Chemicals",
    },
  ];
  return (
    <section className="overflow-hidden relative bg-[#f9f7f0]">
      <div className="mx-20 my-12">
        {/* Heading Section */}
        <div className="mb-12">
          <p className="text-[#7e7e84] font-work uppercase mb-2">
            Explore Cadiant
          </p>
          <h1 className="text-[44px] font-cormorant italic">
            Shop By Categories
          </h1>
        </div>

        {/* Images Section */}
        <div className="h-72 flex gap-4">
          {CategoryList.map((item, index) => (
            <div key={index} className="relative overflow-hidden">
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
              />
              <p className="text-center p-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategories;
