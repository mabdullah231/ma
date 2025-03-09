import React from 'react';
import { SectionHeading, Skills } from "../components";
import reactLogo from "../assets/images/react.png";
import bootstrapLogo from "../assets/images/bootstrap.png";
import tailwindLogo from "../assets/images/tailwind.png";
import laravelLogo from "../assets/images/laravel.png";
import fastapiLogo from "../assets/images/Fastapi.png";
import mysqlLogo from "../assets/images/mysql.png";
import htmlLogo from "../assets/images/html.png";
import postgresLogo from "../assets/images/postgresql.png";
import cssLogo from "../assets/images/css.png";
import jsLogo from "../assets/images/js.png";
import vapiLogo from "../assets/images/vapi.png";
import langchainLogo from "../assets/images/langchain.png";

const SkillsSection = () => {
  // Define an array of skills with logo and title
  const skillsDataUsing = [
    { logo: reactLogo, title: "React" },
    { logo: bootstrapLogo, title: "Bootstrap" },
    { logo: tailwindLogo, title: "Tailwind" },
    { logo: laravelLogo, title: "Laravel" },
    { logo: jsLogo, title: "JavaScript" },
    { logo: mysqlLogo, title: "MySQL" },
    { logo: htmlLogo, title: "HTML5" },
    { logo: cssLogo, title: "CSS3" },
  ];
  const skillsDataLearning = [
    { logo: postgresLogo, title: "PostgreSQL" },
    { logo: fastapiLogo, title: "FastAPI" },
    { logo: vapiLogo, title: "VAPI" },
    { logo: langchainLogo, title: "LangChain" },
  ];

  return (
    <section className='section-padding' id='skills'>
      <div className="flex justify-center items-center flex-col gap-4 w-full px-4 md:px-8 lg:px-16">
        <SectionHeading title="Skills" />
        {/* Pass skills data to the Skills component */}
        <Skills text="Using Now:" skillsData={skillsDataUsing} />
        <Skills text="Learning:" skillsData={skillsDataLearning} />
      </div>
    </section>
  );
};

export default SkillsSection;
