import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import { NavLink, Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const NavbarMenu = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "Shop",
      path: "/shop",
    },

    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container flex justify-between items-center py-4 px-16">
          {/* Logo Section */}
          <div className="text-2xl flex gap-3">
            <FaShoppingBag />
            <p className="font-cormorant uppercase font-medium tracking-wide">
              Sanchita Enterprises
            </p>
          </div>
          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className="inline-block px-2 hover:underline font-work text-base font-medium"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-black hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-black hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>
            <button className="w-24 h-10 text-center font-medium font-work text-[#202025] border-[1px] border-[#202025] rounded-md hover:bg-[#202025] hover:text-white hidden md:block">
              Login
            </button>
          </div>

          {/* Mobile hamburder Menu Section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
