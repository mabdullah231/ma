import React from 'react'

const SectionHeading = ({title}) => {
  return (
    <div className='border uppercase text-2xl text-center cursor-pointer hover:bg-gray-100 transition font-bold tracking-widest border-4 border-black py-4 px-14'>
        {title}
    </div>
  )
}

export default SectionHeading