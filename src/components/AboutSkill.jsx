import { Code } from "lucide-react";
import React from "react";

const AboutSkill = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col gap-1 w-[375px]">
      <div className="flex items-center flex-wrap">
        {Icon ? (
          <Icon size={64} className="inline text-gray-400/65" />
        ) : (
          <Code size={64} className="inline text-gray-400/65" />
        )}
        <h4 className="text-xl font-bold uppercase ml-[-25px]">
          {title || "DEVELOPMENT"}
        </h4>
      </div>
      <p className="text-gray-400 text-xs open-sans">
        {description ||
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, ipsum. Consequatur, quisquam."}
      </p>
    </div>
  );
};

export default AboutSkill;
