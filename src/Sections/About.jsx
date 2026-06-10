import React from 'react'
import {GiAchievement} from 'react-icons/gi';
import {FcBriefcase} from 'react-icons/fc';
import { MdReviews} from 'react-icons/md';
import { Zoom } from 'react-awesome-reveal';
import profile from "../assets/profile.png.png";

const About = () => {
  return (
    <section className="relative min-h-screen items-center overflow-hidden">
     <div className='flex grid justify-center text-gray-300 pt-10 font-medium place-items-center'>
      <h5 className='text-sm'>Get To Know</h5>
      <h2 className='text-2xl'>About Me</h2>
      </div>
      <Zoom duration = {500} delay= {20}>
      <div className="grid lg:grid-cols-2 items-center gap-3 px-10 pt-7">
        <div className="w-full aspect-square rounded-[2rem] bg-[linear-gradient(45deg transparent var(--color-primary) transparent)] grid place-items-center">
          <div className="w-90 h-120 rounded-2xl overflow-hidden hover:rotate-[10deg] bg-[linear-gradient(45deg,transparent,var(--color-primary),transparent)] grid place-items-center transition-[var(--transition)]">
            <img src={profile} alt="About Image" />
          </div>
        </div>
        <div className="text-gray-300 space-y-8">
          <div className="grid grid-cols-3 gap-3">
            <a href="#projects">
            <article className='bg-[var(--color-bg-variant)] border border-gray-300 rounded-2xl px-8 py-8 place-text-center transition-[var(--transition)]'>
              <GiAchievement color='#ff3300' size = {50} className='about_icon'/>
              <h3>1+ year of Experience</h3>

            </article>
            </a>
            <a href='#reviews'>
            <article className='bg-[var(--color-bg-variant)] border border-transparent rounded-2xl p-8 place-text-center transition-[var(--transition)]'>
              <MdReviews color='#FF6F00' size = {50} className='about_icon'/>
              <h3>Clients Reviews 12+</h3>

            </article>
            </a>
            <a href="#projects">
            <article className='bg-[var(--color-bg-variant)] border border-transparent rounded-2xl p-8 place-text-center transition-[var(--transition)]'>
              <FcBriefcase size = {50} className='about_icon'/>
              <h3>Completed Projects 10+</h3>
            </article>
            </a>
          </div>
          <p>
          I have completed more than 10 projects and have gained over 1 years of valuable experience in the field. Throughout my career, I have received 12 reviews from clients and colleagues, which is a testament to my dedication to delivering high-quality work and meeting the needs of stakeholders. I continue to build on this experience and expertise to provide optimized solutions that help organizations achieve their objectives.
          </p>
          <a href='#contact'> <button className="group flex items-center gap-2 rounded-lg px-4 py-2 font-medium ... bg-gradient-to-r from-sky-600 to-indigo-500 hover:from-sky-500 hover:to-indigo-400">
            Let's Talk
            </button></a>

        </div>
      </div>
      </Zoom>

    </section>
  )
}

export default About