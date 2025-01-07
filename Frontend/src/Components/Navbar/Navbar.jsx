import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Shop",
      link: "#",
    },
    {
      id: 3,
      title: "Products",
      link: "#",
    },
    {
      id: 4,
      title: "Blogs",
      link: "#",
    },
    {
      id: 5,
      title: "Contact",
      link: "#",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaShoppingBag />
            <p>Sanchita</p>
            <p className="text-secondary">Enterprises</p>
          </div>
          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons Section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>
            <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
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
