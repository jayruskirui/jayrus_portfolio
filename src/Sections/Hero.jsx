import React from 'react'
import Button from '../Components/Button'
import { ArrowDown, Download } from 'lucide-react'
import { GitBranch, Link } from 'lucide-react'
import profile from '../assets/profile.png.png'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">
     
     {/* content */}
    <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
      <div className='grid lg:grid-cols-2 gap-12 items-center justify-between'>
       {/* Left column */}
       <div className='space-y-8'>
         <div className='animate-fade-in'>
            <span className="inline-flex items-center gap-2 px-3 py-2 border border-gray-600 text-gray-300 rounded-full text-sm font-medium">
           <span className="w-2 h-2 bg-blue-500 rounded-full rounded-full animate-pulse"/> 
            Software Developer <span className='w-2 h-2 bg-gray-300 rounded-full'/> React Specialist
            </span>
        </div>

        {/* Headline */}
        <div>
          <p className="text-lg text-gray-300 text-justify animate-fade-in animation-delay-200">
            Software developer focused on building scalable,
high-performance web applications that deliver seamless user experiences.
I enjoy writing clean, maintainable code and turning complex ideas into simple,
intuitive solutions. I am driven by curiosity, continuous learning, 
and a commitment to creating reliable, impactful digital products.
          </p>
        </div>

        {/* CTAs */}
        <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-400'>
         <button className="group flex items-center gap-2 rounded-lg px-4 py-2 font-medium ... bg-gradient-to-r from-sky-600 to-indigo-500 hover:from-sky-500 hover:to-indigo-400">
         View my work
        <ArrowDown
        size={16}
        className="group-hover:animate-bounce"
         />
        </button>

        <button className="group flex items-center gap-2 px-5 py-2 text-gray-400 hover:text-gray-200 border border-gray-400 hover:border-gray-600 rounded-lg font-medium transition-opacity hover:opacity-85">
         Download CV
        <Download
        size={16}/>
        </button>
        </div>

        {/* social links */}
        <div className='flex items-center gap-4 text-gray-300 animate-fade-in animation-delay-600'>
          <span className='text-sm text-gray-400'>Follow:</span>
          {[{ icon: GitBranch, href:"" },
            { icon: Link, href:"" },
            ].map((social, index) => (
              <a key={index} href={social.href}
              className='p-2 hover:bg-sky-700 border border-gray-600 rounded-full hover:border-sky-700 transition duration-200 text-gray-300 hover:text-gray-100'
              >
                {<social.icon className="w-4 h-4"/>}
              </a>
            ))}
        </div>
       </div>
        {/* Right column */}
      
      <div className='relative animate-fade-in animation-delay-300'>
      {/* profile image */}
      <div className='relative max-w-md mx-auto'>
        <div>
          <img src={profile} alt="Jayrus Kiprotich" className="w-full aspect-[7/8] object-cover rounded-full" />

          {/* Floating badge */}
          <div className='absolute -bottom-12 -right-4'>
            <div className='flex items-center gap-3'>
              <div className='w-3 h-3 rounded-full bg-green-500 animate-pulse'/>
              <span className='text-gray-300 font-medium text-sm'>Available for Work</span>
            </div>
          </div>
          
          {/* stats badge */}
          <div className='absolute flex items-center gap-3 -bottom-13 left-20'>
            <div className='text-gray-300 text-2xl font-bold'>1+</div>
            <div className='text-gray-400 text-xs'>Years Exp</div>
            <div className="w-px h-6 bg-white/60" />
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
    </section>
  )
}

export default Hero