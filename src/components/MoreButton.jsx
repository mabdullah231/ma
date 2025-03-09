import React from 'react'

const MoreButton = ({title, border, text, padding, margin}) => {
  return (
    <>
    <button className={`w-auto mx-${margin} uppercase text-${text} self-start px-${padding} border border-2 border-l-${border} border-r-${border} border-t-0 border-b-0 cursor-pointer hover:text-gray-400 transition`}>{title}</button>
    </>
  )
}

export default MoreButton