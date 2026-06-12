import React from 'react'
import {GiAchievement} from 'react-icons/gi';
import {FcBriefcase} from 'react-icons/fc';
import { MdReviews} from 'react-icons/md';
import { Zoom } from 'react-awesome-reveal';
import profile from "../assets/profile.png.png";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen items-center overflow-hidden pr-7">
    <div className='container mx-auto px-10 pt-20 pb-20 relative z-10'>
     <div className='flex grid justify-center text-gray-300 pt-10 font-medium place-items-center'>
      <h5 className='text-sm text-gray-400'>Get To Know</h5>
      <h2 className='text-2xl text-sky-500 pb-5'>About Me</h2>
      </div>
      <Zoom duration = {500} delay= {20}>
      <div className="grid lg:grid-cols-2 items-center gap-3 px-10">
        <div className="w-full aspect-square rounded-[2rem] bg-[linear-gradient(45deg transparent var(--color-primary) transparent)] grid place-items-center">
          <div className="w-90 h-120 rounded-2xl overflow-hidden hover:rotate-[10deg] duration-900 grid place-items-center">
            <img src={profile} alt="About Image" />
          </div>
        </div>
        <div className="text-gray-300 space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-5">
            <a href="#projects">
            <article className='bg-blue-900 hover:bg-slate-900 border border-transparent hover:border-sky-900 duration-700 rounded-2xl p-8 text-center h-60 w-45 flex flex-col items-center justify-center gap-8'>
              <GiAchievement color='#ff3300' size = {50} className='about_icon'/>
              <h3>1+ year of Experience</h3>

            </article>
            </a>
            <a href='#reviews'>
            <article className='bg-blue-900 hover:bg-slate-900 border border-transparent hover:border-sky-900 duration-700 rounded-2xl p-8 text-center h-60 w-45 flex flex-col items-center justify-center gap-8'>
              <MdReviews color='#FF6F00' size = {50}/>
              <h3>Clients Reviews<br/> 12+</h3>

            </article>
            </a>
            <a href="#projects">
            <article className='bg-blue-900 hover:bg-slate-900 border border-transparent hover:border-sky-900 duration-700 rounded-2xl p-8 text-center h-60 w-45 flex flex-col items-center justify-center gap-8'>
              <FcBriefcase size = {50} className='about_icon'/>
              <h3>Completed<br/> Projects<br/> 10+</h3>
            </article>
            </a>
          </div>
          <p className="text-justify">
          I have completed more than 10 projects and have gained over 1 years of valuable experience in the field. Throughout my career, I have received 12 reviews from clients and colleagues, which is a testament to my dedication to delivering high-quality work and meeting the needs of stakeholders. I continue to build on this experience and expertise to provide optimized solutions that help organizations achieve their objectives.
          </p>
          <a href='#contact'> <button className="group flex items-center gap-2 rounded-lg px-4 py-2 font-medium ... bg-gradient-to-r from-sky-600 to-indigo-500 hover:from-sky-500 hover:to-indigo-400">
            Let's Talk
            </button></a>

        </div>
      </div>
      </Zoom>
    </div>

    </section>
  )
}

export default About