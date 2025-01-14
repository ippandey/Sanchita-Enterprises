import React from "react";
import ProdPics1 from "./../../assets/ProdPics1.jpg";
import ProdPics2 from "./../../assets/ProdPics2.jpg";

const NewArrivals = () => {
  const NewArrivalsCard = [
    {
      id: 1,
      img1: ProdPics2,
      img2: ProdPics2,
      title: "Versed Skin",
      productName: "Total Transformation",
      stars: 2,
      price: 4,
      originalPrice: 5,
      sale: 10,
    },
    {
      id: 1,
      img1: ProdPics2,
      img2: ProdPics2,
      title: "Versed Skin",
      productName: "Total Transformation",
      stars: 2,
      price: 4,
      originalPrice: 5,
      sale: 10,
    },
    {
      id: 1,
      img1: ProdPics1,
      img2: ProdPics2,
      title: "Versed Skin",
      productName: "Total Transformation",
      stars: 2,
      price: 4,
      originalPrice: 5,
      sale: 10,
    },
    {
      id: 1,
      img1: ProdPics1,
      img2: ProdPics2,
      title: "Versed Skin",
      productName: "Total Transformation",
      stars: 2,
      price: 4,
      originalPrice: 5,
      sale: 10,
    },
    {
      id: 1,
      img1: ProdPics1,
      img2: ProdPics2,
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
          <p className="text-[#7e7e84] font-work text-sm uppercase mb-4">
            New Arrivals
          </p>
          <h1 className="text-[44px] font-cormorant capitalize text-[#202025]">
            Shop Top Sellers
          </h1>
        </div>

        {/* Products section */}
        <div className="h-80 flex gap-5">
          {NewArrivalsCard.map((item, index) => (
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
                <p className="text-gray-500 line-through">
                  ${item.originalPrice}
                </p>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
