import { ChevronUp, FacebookIcon, InstagramIcon, LinkedinIcon, Mail } from 'lucide-react'
import React from 'react'


const Footer = () => {
  return (
    <footer className='section-padding flex flex-col items-center bg-[#1A1A1A]'>
       <a href="#hero"><ChevronUp className='text-white' /></a>
       <a href="#hero" className='text-white tracking-widest mt-2 font-bold uppercase'>Back To Top</a>
       <div className="socials text-white flex gap-6 my-8">
       <FacebookIcon className='hover:text-gray-300 cursor-pointer transition'/>
       <LinkedinIcon className='hover:text-gray-300 cursor-pointer transition'/>
       <InstagramIcon className='hover:text-gray-300 cursor-pointer transition'/>
       <Mail className='hover:text-gray-500 cursor-pointer transition'/>
       </div>
       <span className='text-md text-white'><span className='font-bold'>©2024 Muhammad A.</span> &nbsp; All Rights Reserved.</span>
    </footer>
  )
}

export default Footer