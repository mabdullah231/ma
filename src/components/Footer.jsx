import { ChevronUp, FacebookIcon, InstagramIcon, LinkedinIcon, Mail } from 'lucide-react'
import React from 'react'


const Footer = () => {
  return (
    <footer className='section-padding flex flex-col items-center bg-[#1A1A1A]'>
       <a href="#hero"><ChevronUp className='text-white' /></a>
       <a href="#hero" className='text-white tracking-widest mt-2 font-bold uppercase'>Back To Top</a>
       <div className="socials text-white flex gap-6 my-8">
        <a href="https://www.facebook.com/profile.php?id=100095232774649" target='_blank'>
       <FacebookIcon className='hover:text-gray-300 cursor-pointer transition'/>
        </a>
        <a href="https://www.linkedin.com/in/macodes/" target='_blank'>
       <LinkedinIcon className='hover:text-gray-300 cursor-pointer transition'/>
        </a>

        <a href="https://github.com/mabdullah231" target='_blank'>
       <Mail className='hover:text-gray-500 cursor-pointer transition'/>
        </a>
       </div>
       <span className='text-md text-white'>©{new Date().getFullYear()} <span className='font-bold'><a target='_blank' href="//www.macodes.dev">macodes</a></span> &nbsp;All Rights Reserved.</span>
    </footer>
  )
}

export default Footer