import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { TiTick } from "react-icons/ti";
import ProductDetails from "../Components/ProductPage/ProductDetails";
import FAQSection from "../Components/ProductPage/FAQSection";
import ReviewForm from "../Components/ProductPage/ReviewForm";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <p>Product not found!</p>;
  }

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const productDetails = {
    vendor: "Versed Skin",
    type: "Cleansing Balm",
    sku: "V002-50-0001",
    pickupAvailable: true,
    pickupLocation: "Shop location",
    readyTime: "24 hours",
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const shippingInfo = [
    "No EU import duties.",
    "Ships within 1-2 business days.",
    "Ships in our fully recyclable and biodegradable signature boxes.",
  ];

  const features = [
    { icon: "📦", text: "Free Shipping & Exchanges" },
    { icon: "🔒", text: "Flexible and secure payment, pay on delivery" },
    { icon: "🛡️", text: "2 Year Warranty" },
    { icon: "🎉", text: "600,000 happy customers" },
  ];

  return (
    <main className="p-8">
      {/* Breadcrumb */}
      <p className="text-sm mb-4 mx-10">Home / {product.title}</p>
      <div className="container flex flex-wrap lg:flex-nowrap gap-8">
        {/* Left Image section */}
        <aside className="h-screen w-1/2 mx-10">
          <div className="border">
            <img
              src={product.image}
              alt={product.title}
              className="w-full object-cover"
            />
          </div>
          <div className="flex gap-5 mt-8">
            {product.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index}`}
                className="w-20 h-20 border object-cover cursor-pointer"
              />
            ))}
          </div>
        </aside>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          {/* Product Title */}
          <h1 className="text-4xl font-medium mb-4 font-cormorant">
            {product.title}
          </h1>

          {/* Reviews */}
          <p className="text-gray-700 mb-8">
            <span className="text-yellow-500 font-work">★★★★★</span>{" "}
            {product.ratings} review
          </p>

          {/* Pricing */}
          <div className="flex items-center gap-5 mb-8 font-work text-lg">
            <p className="text-xl font-semibold">₹{product.price}</p>
            <p className="text-gray-500 line-through">
              ₹{product.originalPrice}
            </p>
            <p
              className="bg-[#d73f0f] 
              text-white rounded-sm p-1"
            >
              Sale {product.sale}
            </p>
          </div>

          {/* Stats */}
          <div className="border-b">
            <p className="text-base font-work mb-4">
              👀 {product.stats.viewers} customers are viewing this product
            </p>
            <p className="text-base font-work mb-8">
              🔥 {product.stats.sold} sold in the last 18 hours
            </p>
          </div>

          {/* Size Selector */}
          <div className="my-4 font-work">
            <p className="font-semibold mb-4">Size: {selectedSize}</p>
            <div className="flex gap-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? "border-black bg-gray-100"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex mb-8 gap-4">
            <div className="flex border-2 rounded">
              <button
                onClick={decrementQuantity}
                className="w-8 h-12 flex items-center justify-center font-semibold text-xl hover:bg-gray-100"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-8 h-12 text-center mx-1 text-xl"
              />
              <button
                onClick={incrementQuantity}
                className="w-8 h-12 flex items-center justify-center text-xl hover:bg-gray-100 font-semibold"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="bg-[#202025] font-work h-12 w-full text-white rounded hover:bg-gray-700">
              ADD TO CART
            </button>
          </div>

          {/* Buy It Now Button */}
          <button className="w-full bg-[#202025] font-work uppercase h-12 text-white rounded mb-12 hover:bg-gray-700">
            BUY IT NOW
          </button>

          {/* Pickup Information */}
          {productDetails.pickupAvailable && (
            <div className="text-sm text-gray-700 mb-4 border-b pb-8">
              <p className="flex items-center gap-1 mb-2 font-work text-base">
                <TiTick className="text-green-600 text-2xl rotate-6" /> Pickup
                available at {productDetails.pickupLocation}
              </p>
              <p className="ml-7 mb-2">
                Usually ready in {productDetails.readyTime}
              </p>
              <p className="text-gray-600 hover:text-[#202025] ml-7 underline cursor-pointer">
                View store information
              </p>
            </div>
          )}

          <div className="py-6">
            {/* Rewards Section */}
            <div className="bg-green-100 p-4 rounded-lg mb-6">
              <h3 className="flex font-cormorant text-xl items-center gap-2 font-semibold text-gray-800">
                ✨ Rewards
              </h3>
              <p className="text-gray-700 font-work">
                Join to earn 84 points from this item
              </p>
            </div>

            {/* Features Section */}
            <ul className="mb-6 space-y-4 font-work border-b pb-8">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-gray-800"
                >
                  <span className="text-xl">{feature.icon}</span>
                  {feature.text}
                </li>
              ))}
            </ul>

            {/* Shipping Information Section */}
            <div className="font-work">
              <h4 className="font-semibold text-gray-800 mb-2">
                Shipping Information
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {shippingInfo.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <ProductDetails />

      {/* FAQ Section */}
      <FAQSection />

      {/* Review Form Section */}
      <ReviewForm />
    </main>
  );
};

export default ProductPage;
