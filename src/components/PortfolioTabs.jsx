import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import PortfolioCard1 from "../assets/images/PortfolioCard1.png";
import PortfolioCard2 from "../assets/images/PortfolioCard2.jpg";
import PortfolioCard3 from "../assets/images/PortfolioCard3.jpg";
import PortfolioCard4 from "../assets/images/PortfolioCard4.png";
import PortfolioCard5 from "../assets/images/PortfolioCard5.jpg";
import PortfolioCard6 from "../assets/images/PortfolioCard6.jpg";

const portfolioItems = [
  {
    id: 1,
    category: "php",
    image: PortfolioCard1,
    title: "Zentrofy - The Tech Shop",
    tech: "PHP, CSS, jQuery, Bootstrap",
    url: "https://zentrofy.macodes.dev",
  },
  {
    id: 2,
    category: "react",
    image: PortfolioCard2,
    title: "Banking App",
    tech: "React, Tailwind CSS",
  },
  {
    id: 3,
    category: "react",
    image: PortfolioCard3,
    title: "AI Landing Page",
    tech: "React, CSS",
  },
  {
    id: 4,
    category: "php",
    image: PortfolioCard4,
    title: "Resortex - Your Resort Stop",
    tech: "PHP, CSS, jQuery, Bootstrap",
    url: "https://resortex.macodes.dev",
  },
  {
    id: 5,
    category: "php",
    image: PortfolioCard5,
    title: "MHM Real Estate",
    tech: "PHP, Bootstrap, Jquery",
    url: "https://mhm.macodes.dev",
  },
  {
    id: 6,
    category: "react",
    image: PortfolioCard6,
    title: "MyFolio",
    tech: "React, Tailwind CSS",
  },
];

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [tappedItemId, setTappedItemId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile/tablet based on screen width
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Consider devices below 1024px as mobile/tablet
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const filteredItems =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  // Handle tap on mobile devices
  const handleItemTap = (id) => {
    if (!isMobile) return; // Only apply to mobile/tablet

    // If tapping the same item again, close it
    if (tappedItemId === id) {
      setTappedItemId(null);
    } else {
      setTappedItemId(id);
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-[#1A1A1A] pt-[5vh] mt-8">
      {/* Tabs */}
      <div className="flex space-x-8 md:space-x-16 border-b border-gray-600">
        {["all", "react", "php"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`uppercase pb-2 font-semibold transition-all
                text-xs md:text-base lg:text-lg 
                w-[40px] md:w-[100px] lg:w-[120px] 
                ${
                  activeTab === tab
                    ? "border-b-2 border-white text-white"
                    : "text-gray-400 hover:text-white"
                }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-md shadow-md
                ${!isMobile ? "group" : ""}`}
            onClick={() => handleItemTap(item.id)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[300px] object-contain p-4"
            />

            {/* Overlay - shown on hover for desktop, on tap for mobile */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-4
                ${
                  isMobile
                    ? tappedItemId === item.id
                      ? "opacity-100"
                      : "opacity-0"
                    : "opacity-0 group-hover:opacity-100"
                } 
                transition-opacity duration-300`}
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm mb-4">{item.tech}</p>
              {item.url && (
                <a href={`${item.url}`} target="_blank">
                  <ArrowRight className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <h4 className="text-md py-5 text-center text-white">
        And many more to come!
      </h4>
    </div>
  );
};

export default PortfolioTabs;
