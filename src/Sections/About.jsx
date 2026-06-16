import React from 'react'
import {GiAchievement} from 'react-icons/gi';
import {FcBriefcase} from 'react-icons/fc';
import { MdReviews} from 'react-icons/md';
import { Zoom } from 'react-awesome-reveal';
import profile from "../assets/profile.png.png";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-20 relative z-10">

    {/* Section heading */}
    <div className="flex flex-col items-center text-gray-300 pt-10 font-medium">
      <h5 className="text-sm text-gray-400">Get To Know</h5>
      <h2 className="text-2xl text-sky-500 pb-5">About Me</h2>
    </div>

    <Zoom duration={500} delay={20}>
      <div className="grid lg:grid-cols-2 items-center gap-8 mt-4">

        {/* Profile image */}
        <div className="flex justify-center">
          <div className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] rounded-2xl overflow-hidden hover:rotate-[5deg] transition-transform duration-700">
            <img src={profile} alt="About Image" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right column */}
        <div className="text-gray-300 space-y-8">

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <a href="#projects">
              <article className="bg-blue-900 hover:bg-slate-900 border border-transparent hover:border-sky-900 duration-700 rounded-2xl p-4 sm:p-6 text-center flex flex-col items-center justify-center gap-3 sm:gap-5 h-40 sm:h-52">
                <GiAchievement color="#ff3300" size={50} className="shrink-0 sm:w-12 sm:h-12" />
                <h3 className="text-xs sm:text-sm leading-snug">1+ Year<br />Experience</h3>
              </article>
            </a>

            <a href="#reviews">
              <article className="bg-blue-900 hover:bg-slate-900 border border-transparent hover:border-sky-900 duration-700 rounded-2xl p-4 sm:p-6 text-center flex flex-col items-center justify-center gap-3 sm:gap-5 h-40 sm:h-52">
                <MdReviews color="#FF6F00" size={50} className="shrink-0 sm:w-12 sm:h-12" />
                <h3 className="text-xs sm:text-sm leading-snug">Client Reviews<br />12+</h3>
              </article>
            </a>

            <a href="#projects">
              <article className="bg-blue-900 hover:bg-slate-900 border border-transparent hover:border-sky-900 duration-700 rounded-2xl p-4 sm:p-6 text-center flex flex-col items-center justify-center gap-3 sm:gap-5 h-40 sm:h-52">
                <FcBriefcase size={50} className="shrink-0 sm:w-12 sm:h-12" />
                <h3 className="text-xs sm:text-sm leading-snug">Completed<br />Projects<br />10+</h3>
              </article>
            </a>
          </div>

          {/* Bio */}
          <p className="text-sm sm:text-base text-justify leading-relaxed">
            I have completed more than 10 projects and have gained over 1 year of valuable experience in the field.
            Throughout my career, I have received 12 reviews from clients and colleagues, which is a testament to my
            dedication to delivering high-quality work and meeting the needs of stakeholders. I continue to build on
            this experience and expertise to provide optimized solutions that help organizations achieve their objectives.
          </p>

          {/* CTA */}
          <a href="#contact">
            <button className="group flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium bg-gradient-to-r from-sky-600 to-indigo-500 hover:from-sky-500 hover:to-indigo-400 transition-all duration-300">
              Let's Talk
            </button>
          </a>
        </div>

      </div>
    </Zoom>
  </div>
</section>
  )
}

export default About