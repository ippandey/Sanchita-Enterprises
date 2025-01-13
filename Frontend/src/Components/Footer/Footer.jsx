import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">CONTACT US</h3>
          <p>
            Email:{" "}
            <a href="mailto:clientcare@oak.com" className="text-gray-600">
              clientcare@oak.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:18888383022" className="text-gray-600">
              1.888.838.3022
            </a>
          </p>
          <p>
            Hours: Monday – Thursday: 9AM – 7PM ET, <br />
            Friday: 9AM – 5PM ET
          </p>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-bold text-lg mb-4">INFORMATION</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Order History
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Specials
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Custom Care */}
        <div>
          <h3 className="font-bold text-lg mb-4">CUSTOM CARE</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Search
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Site Map
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Brands
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gift Vouchers
              </a>
            </li>
          </ul>
        </div>

        {/* Collections */}
        <div>
          <h3 className="font-bold text-lg mb-4">COLLECTIONS</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Shop All
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AcneProne
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Aging Skin
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                All Skin Types
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bundles
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4">
            GET GOOD SKIN AND GOOD EMAILS.
          </h3>
          <p className="text-gray-600 mb-4">
            Sign up for private sales, new launches, style tips, and more.
          </p>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2"
            />
            <button
              type="submit"
              className="w-full bg-gray-800 text-white rounded-md py-2 hover:bg-gray-700"
            >
              SUBSCRIBE
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
