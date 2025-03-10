import React from 'react';
import SingleSkill from './SingleSkill';

const Skills = ({ text, skillsData }) => {
  return (
    <div className='flex w-full flex-col self-start my-[6vh] '>
      <h2 className='uppercase my-12 tracking-widest text-2xl font-bold'>{text}</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skillsData.map((skill, index) => (
          <SingleSkill key={index} logo={skill.logo} title={skill.title} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
