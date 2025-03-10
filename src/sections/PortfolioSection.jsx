import React from "react";
import { PortfolioTabs, SectionHeading } from "../components";
import portfolioBG from "../assets/images/PortfolioBG.png";

const PortfolioSection = () => {
  return (
    <section id="portfolio">
      <div
        className="pt-[10vh] flex justify-center items-center flex-col gap-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${portfolioBG})` }}
      >
        <SectionHeading title="Portfolio" />
        <PortfolioTabs />
      </div>
    </section>
  );
};

export default PortfolioSection;
