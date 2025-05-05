import React from 'react'
import MoreButton from './MoreButton'

const Berries = () => {
  return (
    <div className='py-[5vh] text-white px-[6vw] bg-black/90 flex flex-col gap-8'>
        <h3 className='text-xl font-bold'>IT BERRIES</h3>
        <p className='text-sm mr-0 lg:mr-50 md:mr-40 text-justify'>IT BERRIES is the core of my development journey—a space where full stack innovation comes to life. I build modern, scalable web applications from front-end to back-end, including secure SaaS platforms designed for long-term growth and smart RAG AI systems that deliver dynamic, context-aware experiences. Every project blends clean code, thoughtful design, and practical functionality to turn ideas into impactful digital products.</p>
        <MoreButton
          href='#about'
          title="Explore"
          border="white"
          text="white"
          padding="4"
          margin="2"
        />
    </div>
  )
}

export default Berries