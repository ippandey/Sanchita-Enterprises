import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Shop from "../Pages/Shop";
import ProductPage from "../Pages/ProductPage";
import CartPage from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckoutPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default Routers;
