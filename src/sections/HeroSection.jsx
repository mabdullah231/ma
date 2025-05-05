import React from 'react';
import { Header } from '../components';
// import heroPerson from '../assets/images/heroPerson.png'
import heroPerson from '../assets/images/heroPerson2.png'
import { Twitter, Github, Facebook, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
<section className="h-screen px-[12vw] flex flex-col relative bg-[#C4C4C4] overflow-hidden" id='hero'>
  {/* Header */}
  <Header />

  {/* Skewed Black Background */}
  <div className="absolute top-0 lg:left-1/2 md:left-[60%] sm:left-[65%] w-full h-full lg:bg-black md:bg-black transform lg:-skew-x-12 md:-skew-x-12  origin-top-left z-10"></div>

  {/* Content Container */}
  <div className="relative z-20 flex flex-grow justify-between items-center w-full  mx-auto">
    {/* Left Side: Text Content */}
    <div className="text-black z-20  w-1/2">
      <h2 className="text-2xl font-bold raleway mb-1">Hi, I am</h2>
      <h2 className="text-4xl font-bold raleway">Muhammad Abdullah.</h2>
      <p className="text-gray-600 text-lg raleway mb-10">Your Next Full Stack Developer</p>
      
      {/* Social Icons */}
      <div className="flex space-x-4 mt-4">
        <a href="https://www.facebook.com/profile.php?id=100095232774649" className="p-3 bg-[#B1B1B1]  rounded-lg transition shadow hover:bg-gray-200">
          <Facebook/>
        </a>
        <a href="https://github.com/mabdullah231" className="p-3 bg-[#B1B1B1] rounded-lg transition shadow hover:bg-gray-200">
        <Github/>
        </a>
        <a href="https://www.linkedin.com/in/macodes/" className="p-3 bg-[#B1B1B1] rounded-lg transition shadow hover:bg-gray-200">
        <Linkedin/>
        </a>
      </div>
    </div>

    {/* Right Side: Image */}
    <div className="w-1/2 hidden sm:flex self-end justify-center relative">
  <img
    src={heroPerson}
    alt="Muhammad Abdullah"
    className="w-auto h-[500px] z-30"
  />
</div>

  </div>
</section>

  );
};

export default HeroSection;