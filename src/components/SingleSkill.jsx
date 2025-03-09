import React from 'react';

const SingleSkill = ({ logo, title }) => {
  return (
    <div className='flex flex-col items-center gap-2 justify-center'>
      <img src={logo} height="80px" width="120px" alt={title} />
      <h4 className='text-2xl font-bold text-center'>{title}</h4>
    </div>
  );
};

export default SingleSkill;
