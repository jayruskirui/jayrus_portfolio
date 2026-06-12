import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithubSquare, FaInstagramSquare, FaFacebookSquare} from 'react-icons/fa';
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className='space-y-10 px-4'>
      
        <hr className='border-gray-600 mt-10'/>

      <a href="#" className='text-blue-400 hover:text-sky-300 transitionduration-200 text-2xl flex justify-center'>Jayrus Kiprotich</a>
      <ul className='flex flex-col sm:flex-row items-center text-center justify-center gap-7 sm:gap-7'>
        <li><a href="#" className='text-gray-300 hover:text-sky-400 '>Home</a></li>
        <li><a href="#about" className='text-gray-300 hover:text-sky-400 '>About</a></li>
        <li><a href="#projects" className='text-gray-300 hover:text-sky-400 '>Projects</a></li>
        <li><a href="#competencies" className='text-gray-300 hover:text-sky-400 '>Competencies</a></li>
        <li><a href="#reviews" className='text-gray-300 hover:text-sky-400 '>Reviews</a></li>
        <li><a href="#contact" className='text-gray-300 hover:text-sky-400 '>Contact</a></li>

      </ul>
      <div className="flex flex-wrap justify-center gap-14">
        <a href="https://www.linkedin.com/in/jayrus-kiprotich-8344513b6/" target='_blank'><BsLinkedin color='#8F8D8D' size={30}/></a>
        <a href="https://github.com/jayruskirui" color='#4078c0' target='_blank'><FaGithubSquare color='#8F8D8D' size={30}/></a>
        <a href="https://x.com/jaykirui30" target='_blank'><FaSquareXTwitter  color='#8F8D8D' className='twitter' size={30}/></a>
        <a href="https://www.instagram.com/jay_official003/" target='_blank'><FaInstagramSquare color='#8F8D8D' size={30}/></a>
        <a href="https://www.facebook.com/profile.php?id=100082443201396" target='_blank'><FaFacebookSquare color='#8F8D8D' size={30}/></a>
        <a href="https://www.tiktok.com/@jaytechsolution3" target='_blank'><AiFillTikTok color='#8F8D8D' size={30}/></a>
        
      </div>
      

      <div className="flex text-gray-400 justify-center pb-7">
        <small>&copy; {new Date().getFullYear()} Jayrus, All rights reserved</small>
      </div>
     
    </footer>
  )
}

export default Footer