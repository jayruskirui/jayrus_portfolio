import React from 'react'
import Button from '../Components/Button'
import { ArrowDown, Download } from 'lucide-react'
import { GitBranch, Link } from 'lucide-react'
import profile from '../assets/profile.png.png'
import Greetings from '../Components/Greetings'


const skills =[
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "𝙏𝙎" },
  { name: "Node.js", icon: "🟢" },
  { name: "GraphQL", icon: "◈" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Redis", icon: "🔴" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Vercel", icon: "▲" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Prisma", icon: "◭" },
  { name: "Jest", icon: "🃏" },
  { name: "Cypress", icon: "🌲" },
  { name: "Figma", icon: "🎨" },
  { name: "Git", icon: "🔀" },
  { name: "GitHub Actions", icon: "⚙️" },
];


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">

     {/* content */}
    <div className='container mx-auto px-1 pt-1 pb-10 relative z-10'>
      <div className='grid lg:grid-cols-2 gap-12 items-center justify-between'>
       {/* Left column */}
       <div className='space-y-8'>
       
        <Greetings/>
         
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

          </div>
        </div>
      </div>
    </div>
    </div>

{/* Skills Sections */}
<div className="mt-20 animate-fade-in animation-delay-600">
  <p className="text-md font-bold text-sky-300 mb-6 text-center">Technologies I work with</p>
  <div className="relative overflow-hidden">
    <div className="flex animate-marquee">
      {[...skills, ...skills].map((skill, idx) => (
        <div key={idx} className="flex-shrink-0 px-8 py-4 flex items-center gap-2 text-gray-300">
          <span className="text-xl">{skill.icon}</span>
          <span className="text-xl font-semibold text-gray-500 hover:text-gray-300 transition-colors">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>
</div>
    </section>
  )
}

export default Hero