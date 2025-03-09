import React from 'react'
import MoreButton from './MoreButton'

const Berries = () => {
  return (
    <div className='py-[5vh] text-white px-[6vw] bg-black/90 flex flex-col gap-8'>
        <h3 className='text-xl font-bold'>IT BERRIES</h3>
        <p className='text-sm mr-0 lg:mr-50 md:mr-40 text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas dolorem quae tempore iste, soluta temporibus, minima eos perspiciatis eaque accusantium quibusdam ratione dicta. Excepturi non veritatis id quos ex magnam modi eius voluptates qui, eos nam consectetur exercitationem in minima sed amet accusamus eum laboriosam. Deleniti quisquam id cumque vitae, amet, libero dicta ratione dignissimos quia omnis quod placeat illo fuga fugit quis? Sapiente, esse odio. Cupiditate suscipit nesciunt ad!</p>
        <MoreButton title="Read More" border="gray-300" text="white" padding="2"/>
    </div>
  )
}

export default Berries