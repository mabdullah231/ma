import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navBar px-[12vw] fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled
          ? "py-[2vh] bg-black/90 backdrop-blur-md border-b border-gray-800"
          : "py-[5vh] md:bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center">
        {/* Brand Logo */}
        <div className="navBrand text-[#D9D9D9]">
          <Logo isScroll={isScrolled} />
        </div>

        {/* Desktop Nav */}
        {/* <div className="navList hidden md:flex text-white">
          <ul className="flex items-center space-x-10">
            {["About Me", "Skills", "Portfolio", "Contact"].map((item) => (
              <li
                key={item}
                className={`px-4 py-1 cursor-pointer transition rounded-2xl ${
                  item === "Contact"
                    ? "bg-gray-200 text-black"
                    : "hover:bg-gray-200 hover:text-black text-inherit"
                }`}
              >
                <a href={`#${item.toLowerCase().replace(" ", "")}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="navList hidden md:flex text-white shad">
          <ul className="flex items-center space-x-10">
            {["About Me", "Skills", "Portfolio", "Contact"].map((item) => {
              const isContact = item === "Contact";
              const href = `#${item.toLowerCase().replace(/\s+/g, "")}`;
              return (
                <li key={item}>
                  <a
                    href={href}
                    className={`px-4 py-1 rounded-2xl transition 
              ${
                isContact
                  ? "bg-gray-200 text-black"
                  : "hover:bg-gray-200 hover:text-black text-inherit [text-shadow:_0_2px_4px_black]"
              }`}
              
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
            isScrolled ? "bg-white text-black" : "bg-black text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden z-20 transition-all duration-300 overflow-hidden bg-black text-white px-6 ${
          isOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col space-y-6 text-center">
          {["About Me", "Skills", "Portfolio", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <a href={`#${item.toLowerCase().replace(" ", "")}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
