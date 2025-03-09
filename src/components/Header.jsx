import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`navBar px-[12vw] py-[1.5vh] fixed top-0 left-0 right-0 z-30 transition-all duration-300
        ${isScrolled ? "py-[2vh] bg-black" : "py-[5vh] md:bg-transparent"}
      `}
    >
      <nav className="flex justify-between items-center">
        <div className="navBrand text-[#D9D9D9]">
          <Logo isScroll={isScrolled} />
        </div>

        {/* Desktop Navigation List */}
        <div className="navList hidden md:flex text-white">
          <ul className="flex items-center space-x-10">
            <li
              className="px-4 py-1 cursor-pointer transition 
                hover:bg-gray-200 hover:text-black rounded-2xl 
                text-inherit"
            >
              <a href="#about">About Me</a>
            </li>
            <li
              className="px-4 py-1 cursor-pointer transition 
                hover:bg-gray-200 hover:text-black rounded-2xl 
                text-inherit"
            >
              <a href="#skills">Skills</a>
            </li>
            <li
              className="px-4 py-1 cursor-pointer transition 
                hover:bg-gray-200 hover:text-black rounded-2xl 
                text-inherit"
            >
              <a href="#portfolio">Portfolio</a>
            </li>
            <li
              className="px-4 py-1 cursor-pointer transition 
                bg-gray-200 text-black rounded-2xl"
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-gray-300 lg:text-black md:text-black cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-[15vh] bg-black left-0 right-0 text-white p-4 md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-6 text-center">
          <li
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <a href="#about">About Me</a>
          </li>
          <li
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <a href="#portfolio">Portfolio</a>
          </li>
          <li
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
