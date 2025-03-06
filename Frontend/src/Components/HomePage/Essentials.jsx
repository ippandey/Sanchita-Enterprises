import React, { useState } from "react";
import products from "../../data/products";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Dyeing Agents",
    products: products.filter((product) => product.category === "Dye"),
  },
  {
    id: 2,
    name: "Alkaline Agent",
    products: products.filter(
      (product) => product.category === "Alkaline Agent"
    ),
  },
  {
    id: 3,
    name: "Solvent",
    products: products.filter((product) => product.category === "Solvent"),
  },
  {
    id: 4,
    name: "Bleaching Agent",
    products: products.filter(
      (product) => product.category === "Bleaching Agent"
    ),
  },
];

const Essentials = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
  };

  const currentProducts =
    categories.find((cat) => cat.id === selectedCategory)?.products || [];

  const [hoveredProductId, setHoveredProductId] = useState(null);
  return (
    <section className="overflow-hidden relative">
      <div className="m-20">
        {/* Heading & Buttons Section */}
        <div className="items-center justify-center mb-8">
          <h2 className="text-center font-cormorant mb-8 text-[44px] font-medium">
            Our Essentials
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-3 py-2 text-base font-work font-medium transition-all
              ${
                selectedCategory === category.id
                  ? " text-black"
                  : " text-gray-500 hover:text-black"
              }
            `}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex gap-5">
          {currentProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block"
            >
              <div className="bg-[#f7f4f3] shadow-md rounded-md w-52 mb-10">
                <img src={product.image} />
                <h3 className="text-lg font-medium text-center rounded-md font-work text-[#333333]">
                  {product.title}
                </h3>
                <p className="text-[#555555] font-work text-center mb-2 text-sm">
                  {product.category}
                </p>
                <p className="text-[#666666] text-base flex justify-center gap-4 mb-4">
                  <span className="flex gap-[2px]">
                    {Array.from({ length: 5 }).map((_, index) =>
                      index < product.ratings ? (
                        <FaStar key={index} className="text-[#333333]" />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-[#666666] rounded-sm"
                        />
                      )
                    )}
                  </span>
                </p>
                <div className="flex gap-2 items-center justify-center mb-2">
                  <span className="text-xl font-semibold text-[#333333] font-work">
                    ₹{product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="font-semibold text-[#666666] font-work line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Button */}
        <Link to="/shop">
          <div className=" flex justify-center">
            <button className="uppercase text-[#252525] border-[1px] border-[#252525] rounded-md w-36 h-12 hover:bg-[#252525] hover:text-white text-base">
              Shop All
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Essentials;
