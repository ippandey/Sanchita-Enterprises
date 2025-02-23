import React from "react";
import prod1_1 from "./../../assets/prod1_1.webp";
import prod1_2 from "./../../assets/prod1_2.webp";

const BestSeller = () => {
  const BestSellerCard = [
    {
      id: 1,
      img1: prod1_1,
      img2: prod1_2,
      title: "Versed Skin",
      productName: "Total Transformation",
      stars: 2,
      price: 4,
      originalPrice: 5,
      sale: 10,
    },
    {
      id: 1,
      img1: prod1_1,
      img2: prod1_2,
      title: "Versed Skin",
      productName: "Total Transformation",
      stars: 2,
      price: 4,
      originalPrice: 5,
      sale: 10,
    },
    {
      id: 1,
      img1: prod1_1,
      img2: prod1_2,
      title: "Versed Skin",
      productName: "Total Transformation",
      stars: 2,
      price: 4,
      originalPrice: 5,
      sale: 10,
    },
    {
      id: 1,
      img1: prod1_1,
      img2: prod1_2,
      title: "Versed Skin",
      productName: "Total Transformation",
      stars: 2,
      price: 4,
      originalPrice: 5,
      sale: 10,
    },
    {
      id: 1,
      img1: prod1_1,
      img2: prod1_2,
      title: "Versed Skin",
      productName: "Total Transformation",
      stars: 2,
      price: 4,
      originalPrice: 5,
      sale: 10,
    },
  ];
  return (
    <section className="overflow-hidden relative">
      <div className="m-20">
        {/* Heading section */}
        <div className="mb-8">
          <p className="text-[#7e7e84] font-semibold uppercase mb-4">
            Angel Skin
          </p>
          <h1 className="text-4xl">Best Seller Skin</h1>
        </div>

        {/* Products section */}
        <div className="h-80 flex gap-5">
          {BestSellerCard.map((item, index) => (
            <div key={index} className="h-full w-52 bg-[#f7f4f3]">
              <img src={item.img1} className="" />
              <p
                className="uppercase text-sm 
                   text-gray-500 text-center"
              >
                {item.title}
              </p>
              <p className="text-lg text-center">{item.productName}</p>
              <p className="text-center">{item.stars}</p>
              <p className="flex items-center justify-center gap-2">
                ${item.price}
                <span className="text-gray-500 line-through">
                  ${item.originalPrice}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
