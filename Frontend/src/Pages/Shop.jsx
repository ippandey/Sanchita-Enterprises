import React, { useState } from "react";
import AllProducts from "./../assets/AllProducts.webp";
import Categories from "./../Components/ShopPage/Categories";

const Shop = () => {
  return (
    <section className="border-b border-[#202025]">
      {/* Image section */}
      <div className="h-80 relative text-center">
        <img
          src={AllProducts}
          alt="All Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Breadcrumb */}
        <div className="absolute top-5 left-6 text-white text-base font-work ">
          Home / Shop
        </div>

        {/* Centered Content */}
        <div className="absolute flex flex-col inset-0 items-center justify-center">
          <h3 className="font-cormorant text-[44px] text-white font-medium">
            All Products
          </h3>
          <p className="font-work font-normal text-base text-white">
            Shop now, not later. Browse the best of our favorite sale styles and
            brands.
          </p>
        </div>
      </div>

      {/* Categories */}
      <Categories />

      {/* Main Content */}
      <div className="flex flex-wrap m-20"></div>
    </section>
  );
};

export default Shop;
