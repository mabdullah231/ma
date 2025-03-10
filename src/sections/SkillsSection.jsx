import React from 'react';
import { SectionHeading, Skills } from "../components";
import reactLogo from "../assets/images/react.png";
import bootstrapLogo from "../assets/images/bootstrap.png";
import tailwindLogo from "../assets/images/tailwind.png";
import laravelLogo from "../assets/images/laravel.png";
import fastapiLogo from "../assets/images/Fastapi.png";
import mysqlLogo from "../assets/images/mysql.png";
import vueLogo from "../assets/images/vue.png";
import postgresLogo from "../assets/images/postgresql.png";
import jsLogo from "../assets/images/js.png";
import vapiLogo from "../assets/images/vapi.png";
import langchainLogo from "../assets/images/langchain.png";
import nodeLogo from "../assets/images/node.png";
import mongoLogo from "../assets/images/mongo.png";

const SkillsSection = () => {
  // Define an array of skills with logo and title
  const skillsDataUsing = [
    { logo: reactLogo, title: "React" },
    { logo: vueLogo, title: "VUE" },
    { logo: bootstrapLogo, title: "Bootstrap" },
    { logo: tailwindLogo, title: "Tailwind" },
    { logo: laravelLogo, title: "Laravel" },
    { logo: mysqlLogo, title: "MySQL" },
    { logo: langchainLogo, title: "LangChain" },
    { logo: jsLogo, title: "JavaScript" },
  ];
  const skillsDataLearning = [
    { logo: postgresLogo, title: "PostgreSQL" },
    { logo: fastapiLogo, title: "FastAPI" },
    { logo: mongoLogo, title: "MongoDB" },   
    { logo: nodeLogo, title: "NODE" },

  ];

  return (
    <section className='section-padding' id='skills'>
      <div className="flex justify-center items-center flex-col gap-4 w-full px-4 md:px-8 lg:px-16">
        <SectionHeading title="Skills" />
        <Skills text="Using Now:" skillsData={skillsDataUsing} />
        <Skills text="Learning:" skillsData={skillsDataLearning} />
      </div>
    </section>
  );
};

export default SkillsSection;
