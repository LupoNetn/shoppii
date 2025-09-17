import { Menu, Search, SearchIcon, Settings, ShoppingCart, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const navLinks = [
  { name: "Shop", link: "#" },
  { name: "On Sale", link: "#" },
  { name: "New Arrivals", link: "#" },
  { name: "Brands", link: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // controls if element is mounted
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const openMenu = () => {
    // animate the icon whenever toggled
    gsap.fromTo(
      iconRef.current,
      { rotate: 0, scale: 1 },
      { rotate: 180, scale: 1.2, duration: 0.3, ease: "power1.inOut" }
    );

    if (open) {
      // trigger close animation first
      gsap.to(menuRef.current, {
        opacity: 0,
        x: 400,
        duration: 0.6,
        ease: "power1.inOut",
        onComplete: () => {
          setShowMenu(false); // unmount after animation
          setOpen(false);
        },
      });
    } else {
      // mount and animate in
      setShowMenu(true);
      setOpen(true);
    }
  };

  // run open animation after the element is mounted
  useEffect(() => {
    if (showMenu && open) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, x: 400 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power1.inOut" }
      );
    }
  }, [showMenu, open]);

  return (
    <>
      <nav className="py-5">
        <div className="flex items-center justify-between gap-6">
          <div className="flex gap-6 items-center">
            {/* MOBILE MENU */}
            <div className="block md:hidden">
              <div className="relative">
                <button
                  onClick={openMenu}
                  ref={iconRef}
                  className="cursor-pointer mt-2 transition-transform duration-300"
                >
                  {open ? <X /> : <Menu />}
                </button>

                {/* Animate this div in/out */}
                {showMenu && (
                  <div
                    ref={menuRef}
                    className="absolute bg-white left-4 py-8 w-[200px] px-2 border border-gray-400 rounded-2xl"
                  >
                    <ul className="flex flex-col items-left gap-5">
                      {navLinks.map((link) => (
                        <li
                          key={link.name}
                          className="text-gray-900 text-sm md:text-lg"
                        >
                          {link.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div>
              <p className="font-bold text-xl lg:text-3xl">SHOPPII.CO</p>
            </div>
          </div>

          {/* DESKTOP NAV */}
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