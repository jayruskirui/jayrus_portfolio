import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">
     
     {/* content */}
    <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
      <div className='grid lg:grid-col-2 gap-12 items-center'>
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
       </div>
        {/* Right column */}
      </div>
    </div>
    </section>
  )
}

export default Hero