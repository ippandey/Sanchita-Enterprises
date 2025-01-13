import React, { useState } from "react";
import prod1_1 from "./../../../assets/prod1_1.webp";
import prod1_2 from "./../../../assets/prod1_2.webp";

const categories = [
  {
    id: "category1",
    name: "Dying Agents",
    products: [
      {
        id: 1,
        img1: prod1_1,
        img2: prod1_2,
        title: "Dying Agents",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 2,
        img1: prod1_1,
        img2: prod1_2,
        title: "Dying Agents",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 3,
        img1: prod1_1,
        img2: prod1_2,
        title: "Dying Agents",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 4,
        img1: prod1_1,
        img2: prod1_2,
        title: "Dying Agents",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 5,
        img1: prod1_1,
        img2: prod1_2,
        title: "Dying Agents",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
    ],
  },
  {
    id: "category2",
    name: "Printing Chemicals",
    products: [
      {
        id: 1,
        img1: prod1_1,
        img2: prod1_2,
        title: "Printing Chemicals",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 2,
        img1: prod1_1,
        img2: prod1_2,
        title: "Printing Chemicals",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 3,
        img1: prod1_1,
        img2: prod1_2,
        title: "Printing Chemicals",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 4,
        img1: prod1_1,
        img2: prod1_2,
        title: "Printing Chemicals",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 5,
        img1: prod1_1,
        img2: prod1_2,
        title: "Printing Chemicals",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
    ],
  },
  {
    id: "category3",
    name: "Finishing Agents",
    products: [
      {
        id: 1,
        img1: prod1_1,
        img2: prod1_2,
        title: "Finishing Agents",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 2,
        img1: prod1_1,
        img2: prod1_2,
        title: "Finishing Agents",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 3,
        img1: prod1_1,
        img2: prod1_2,
        title: "Finishing Agents",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 4,
        img1: prod1_1,
        img2: prod1_2,
        title: "Finishing Agents",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 5,
        img1: prod1_1,
        img2: prod1_2,
        title: "Finishing Agents",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
    ],
  },
  {
    id: "category4",
    name: "Auxiliary Chemicals",
    products: [
      {
        id: 1,
        img1: prod1_1,
        img2: prod1_2,
        title: "Auxiliary Chemicals",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 2,
        img1: prod1_1,
        img2: prod1_2,
        title: "Auxiliary Chemicals",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 3,
        img1: prod1_1,
        img2: prod1_2,
        title: "Auxiliary Chemicals",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 4,
        img1: prod1_1,
        img2: prod1_2,
        title: "Auxiliary Chemicals",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
      {
        id: 5,
        img1: prod1_1,
        img2: prod1_2,
        title: "Auxiliary Chemicals",
        productName: "Total Transformation",
        stars: 2,
        price: 4,
        originalPrice: 5,
        sale: 10,
      },
    ],
  },
];

const Essentials = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
  };

  const currentProducts =
    categories.find((cat) => cat.id === selectedCategory)?.products || [];
  return (
    <section>
      <div className="container mb-16">
        {/* Heading & Buttons Section */}
        <div className="h-40 items-center justify-center p-8 m-8">
          <h2 className="text-center mb-8 text-5xl font-medium">
            Our Essentials
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-3 py-2  text-base font-medium transition-all
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
        <div className="h-80 flex gap-5 mb-8">
          {currentProducts.map((product, index) => (
            <div key={index} className="h-full w-52 bg-[#f7f4f3]">
              <img src={product.img1} />
              <p
                className="uppercase text-sm 
                 text-gray-500 text-center"
              >
                {product.title}
              </p>
              <p className="text-lg text-center">{product.productName}</p>
              <p className="text-center">{product.stars}</p>
              <p className="flex items-center justify-center gap-2">
                ${product.price}
                <p className="text-gray-500 line-through">
                  ${product.originalPrice}
                </p>
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className=" flex justify-center">
          <button className="uppercase text-[#252525] border-[1px] border-[#252525] rounded-md w-36 h-12 hover:bg-[#252525] hover:text-white text-base">
            Shop All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Essentials;
