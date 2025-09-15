import { Menu, Search, SearchIcon, Settings, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { name: "Shop", link: "#" },
  { name: "On Sale", link: "#" },
  { name: "New Arrivals", link: "#" },
  { name: "Brands", link: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen((prev) => !prev);
  };

  useGSAP(() => {
  if (open) {
    gsap.from("#mobile-menu", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power1.inOut",
    });
  }
}, [open]); // run again when open changes


  return (
    <>
      <nav className="py-5">
        <div className="flex items-center justify-between gap-6">
          <div className="flex gap-6 items-center">
            {/* MOBILE MENU */}
            <div className="block md:hidden">
              {open ? (
                <div className="relative">
                  <button onClick={openMenu} className="cursor-pointer mt-2">
                    <X />
                  </button>

                  <div id="mobile-menu" className="absolute bg-white left-4 py-8 w-[200px] px-2 border border-gray-400 rounded-2xl">
                    <ul className="flex flex-col items-left gap-5">
                      {navLinks.map((link) => (
                        <li
                          key={link.name}
                          className="text-gray-900 text-md md:text-lg"
                        >
                          {link.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  <button onClick={openMenu} className="cursor-pointer mt-2">
                    <Menu />
                  </button>
                </div>
              )}
            </div>
            <div>
              <p className="font-bold text-xl lg:text-3xl">SHOPPII.CO</p>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:gap-4">
            <ul className="flex items-center gap-5">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="text-gray-900 text-md md:text-sm xl:text-lg"
                >
                  {link.name}
                </li>
              ))}
            </ul>

            <div className="flex relative md:w-[280px]  xl:w-[600px]">
              <Search className="absolute top-2 left-1 text-gray-800" />
              <input
                type="text"
                className="rounded-2xl w-full px-8 py-[.4rem] border outline-none focus:border-gray-900 border-gray-500"
                placeholder="Search for items here..."
              />
            </div>

            <div className="flex gap-3 items-center">
              <div>
                <ShoppingCart />
              </div>
              <div>
                <Settings />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <div>
              <SearchIcon />
            </div>
             <div>
                <ShoppingCart />
              </div>
              <div>
                <Settings />
              </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
