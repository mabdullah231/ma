import React from "react";
import { AboutSkill, MoreButton, SectionHeading } from "../components";
import separator from "../assets/images/separatorBlack.png";
import { Code, Settings, Cloud, Brain } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding" id="about">
      <div className="flex justify-center items-center flex-col gap-12">
        <SectionHeading title="About me" />
        <p className="text-xs open-sans px-6 sm:px-10 md:px-20 lg:px-40 xl:px-50 text-center">Full stack developer and SaaS expert crafting clean, scalable, and user-focused web applications that solve real problems.</p>

        {/* <MoreButton
          title="Explore"
          border="black"
          text="black"
          padding="4"
          margin="auto"
        /> */}
        <img src={separator} width="100px" alt="Separator" />

        <div className="aboutSkills flex justify-center mx-[0vw] md:mx-[2vw] lg:mx-[6vw] gap-9 flex-wrap">
          <AboutSkill
            icon={Code}
            title="Development"
            description="Building robust web applications with modern technologies and scalable architecture."
          />
          <AboutSkill
            icon={Settings}
            title="Maintenance"
            description="Ensuring smooth performance, updates, and troubleshooting for optimal software health."
          />
          <AboutSkill
            icon={Cloud}
            title="SaaS"
            description="Designing and deploying scalable Software-as-a-Service solutions tailored to user needs."
          />
          <AboutSkill
            icon={Brain}
            title="RAG AI"
            description="Building smart systems with RAG to fetch relevant data and generate accurate, context-aware responses."
          />
        </div>
        <img src={separator} width="100px" alt="Separator" />
      </div>
    </section>
  );
};

export default AboutSection;
