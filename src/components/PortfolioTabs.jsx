import React, { useState } from "react";
import PortfolioCard1 from "../assets/images/PortfolioCard1.png";
import PortfolioCard2 from "../assets/images/PortfolioCard2.png";
import PortfolioCard3 from "../assets/images/PortfolioCard3.png";
import PortfolioCard4 from "../assets/images/PortfolioCard4.jpeg";
import PortfolioCard5 from "../assets/images/PortfolioCard5.png";
import PortfolioCard6 from "../assets/images/PortfolioCard6.png";

const portfolioItems = [
  { id: 1, category: "php", image: PortfolioCard1 },
  { id: 2, category: "react", image: PortfolioCard2 },
  { id: 3, category: "react", image: PortfolioCard3 },
  { id: 4, category: "php", image: PortfolioCard4 },
  { id: 5, category: "php", image: PortfolioCard5 },
  { id: 6, category: "react", image: PortfolioCard6 },
];

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <div className="w-full flex flex-col items-center bg-[#1A1A1A] pt-[5vh] mt-8">
      {/* Tabs */}
      <div className="flex space-x-16 border-b border-gray-600">
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

      {/* Portfolio Grid (inside PortfolioTabs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 ">
        {filteredItems.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt="Portfolio"
            className="w-full h-[300px] shadow-md"
          />
        ))}
      </div>
      <h4 className="text-md py-5 text-center text-white">And many more to come!</h4>
    </div>
  );
};

export default PortfolioTabs;
