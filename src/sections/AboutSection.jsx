import React from "react";
import { AboutSkill, MoreButton, SectionHeading } from "../components";
import separator from "../assets/images/separatorBlack.png";
import { Code, Settings, Cloud } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding" id="about">
      <div className="flex justify-center items-center flex-col gap-12">
        <SectionHeading title="About me" />
        <p className="text-xs open-sans px-25 lg:px-50 md:px-40 text-center">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </p>
        <MoreButton
          title="Explore"
          border="black"
          text="black"
          padding="4"
          margin="auto"
        />
        <img src={separator} width="100px" alt="Separator" />

        <div className="aboutSkills flex justify-center mx-[0vw] md:mx-[2vw] lg:mx-[6vw] gap-6 flex-wrap">
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
        </div>
        <img src={separator} width="100px" alt="Separator" />
      </div>
    </section>
  );
};

export default AboutSection;
