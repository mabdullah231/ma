import React from "react";
import { Header } from "../components";
// import heroPerson from '../assets/images/heroPerson.png'
import heroPerson from "../assets/images/heroPerson2.png";
import { Twitter, Github, Facebook, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="px-[12vw] pt-[2vh] sm:pt-[4vh] md:pt-[8vh] lg:pt-[16vh] flex flex-col relative bg-[#C4C4C4] overflow-hidden"
      id="hero"
    >
      {/* Header */}
      <Header />

      {/* Skewed Black Background */}
      <div className="absolute top-0 lg:left-1/2 md:left-[60%] sm:left-[65%]  pb-[0vh] w-full h-full lg:bg-black md:bg-black transform lg:-skew-x-12 md:-skew-x-12  origin-top-left z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col sm:flex-row md:flex-row lg:flex-row flex-grow justify-between items-center w-full mx-auto py-[10vh] sm:py-0 md:py-0 lg:py-0 xs:py-[2vh]">
        {/* Left Side: Text Content */}
        <div
          className="z-20 w-full order-2 md:order-1 lg:order-1 xl:order-1
  bg-black text-white rounded-xl p-6 -mt-16 shadow-lg
  sm:bg-transparent sm:text-black sm:rounded-none sm:p-0 sm:mt-0 sm:shadow-none
  md:w-1/2 lg:w-1/2 xl:w-1/2 transition-all duration-300"
        >
          <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold raleway mb-1">
            Hi, I am
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold raleway">
            Muhammad Abdullah.
          </h2>
          <p className="text-gray-200 sm:text-gray-600 md:text-gray-600 lg:text-gray-600 xl:text-gray-600 text-md md:text-lg lg:text-xl xl:text-2xl raleway mb-4 md:mb-6 lg:mb-8 xl:mb-10">
            Your Next Full Stack Developer
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 ">
            <a
              href="https://www.facebook.com/profile.php?id=100095232774649"
              className="p-3 bg-[#B1B1B1] rounded-lg transition shadow hover:bg-gray-200"
              target="_blank"
            >
              <Facebook className="text-black" />
            </a>
            <a
              href="https://github.com/mabdullah231"
              className="p-3 bg-[#B1B1B1] rounded-lg transition shadow hover:bg-gray-200"
              target="_blank"
            >
              <Github className="text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/macodes/"
              className="p-3 bg-[#B1B1B1] rounded-lg transition shadow hover:bg-gray-200"
              target="_blank"
            >
              <Linkedin className="text-black" />
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="sm:flex self-end order-1 md:order-2 lg:order-2 xl:order-2 justify-center relative">
          <img
            src={heroPerson}
            alt="Muhammad Abdullah"
            className="w-[450px] h-[340px] md:w-[400px] md:h-[420px] lg:w-[450px] lg:h-[480px] xl:w-[480px] xl:h-[520px] z-30"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
