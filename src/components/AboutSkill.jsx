import { Code } from "lucide-react";
import React from "react";

const AboutSkill = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col gap-2 w-[250px] md:w-[300px] lg:w-[325px] xl:w-[350px]">
      <div className="flex items-center flex-wrap ">
        {Icon ? (
          <Icon size={64} className="inline text-gray-400/65" />
        ) : (
          <Code size={64} className="inline text-gray-400/65" />
        )}
        <h4 className="text-lg sm:text-xl font-bold uppercase ml-[-20px]">
          {title || "DEVELOPMENT"}
        </h4>
      </div>
      <p className="text-sm sm:text-xs text-gray-400 open-sans">
        {description ||
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, ipsum. Consequatur, quisquam."}
      </p>
    </div>
  );
};

export default AboutSkill;
