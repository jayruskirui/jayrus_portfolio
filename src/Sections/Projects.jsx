import React from 'react'
import salesImg from "../assets/projects/sales.png.png"
import ecommerceImg from "../assets/projects/ecommerce.png.png"
import universityImg from "../assets/projects/university.png.png"
import { FaGithubSquare }from 'react-icons/fa';
import { PiArrowSquareOutBold } from "react-icons/pi";


const projects = [
  {
    title: "Sales Platform",
    description:
      "Crafted a visually refined fashion store homepage that blends elegant typography with a balanced layout, drawing attention to new arrivals while creating a smooth and engaging browsing flow.",
    image: salesImg,
    tags: ["React", "HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/jayruskirui/SALES-APP",
    demo: "https://sales-app-one-theta.vercel.app/",
  },

  {
    title: "E-Commerce Platform",
    description:
      "Built a stylish fashion store homepage with a clean layout, highlighting new arrivals and improving user browsing experience.",
    image: ecommerceImg,
    tags: ["React", "HTML/CSS", "JavaScript"],
    github: "https://github.com/jayruskirui/e-commerce",
    demo: "https://e-commerce-nine-dusky-5efwmgyyk6.vercel.app/",

  },
  {
    title: "University Management System",
    description:
      "Created an educational website interface showcasing university information and organized navigation for easy access.",
    image: universityImg,
    tags: ["HTML", "CSS"],
    github: "https://github.com/jayruskirui/University-web",
    demo: "file:///C:/Users/Hp/OneDrive/Desktop/Projects/university/index.html",

  },
];





const Projects = () => {
  return (
    <section id="projects" className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>

        {/* Section header */}
        <div className='text-center mx-auto max-w-2xl mb-16'>
          <span className='text-sm text-gray-400 mb-6'>
            Project Universe</span>
          <h2 className='text-2xl text-sky-500 font-medium'>Web Developement Projects</h2>
        </div>

        {/* project grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index)=>(
            <div
            key={index}
            className='group rounded-2xl overflow-hidden animate-fade-in md:row-span-1 text-gray-300'
            style={{animationDelay: `${(index+1)*100}ms`}}>
              
              {/* image */}
              <div className='relative overflow-hidden aspect-video'>
                <img
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'/>
                {/* <div className='absolute insert-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60'/> */}

                {/* overlay links */}
                <div className='absolute insert-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                </div>
              </div>

              {/* content */}
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-xl font-semibold group-hover:text-sky-300 transition-colors'>
                    {project.title}
                  </h3>
                </div>
                <p className='text-gray-400 text-sm text-justify'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, tagIdx)=>(
                    <span
                    key={tagIdx}
                    className='px-4 py-1.5 rounded-full bg-blue-900 text-xs font-medium border border-gray-600 text-gray-400 hover:border-gray-400 hover:text-gray-300 transition-all duration-300'>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions buttons */}
                <div className='flex gap-3 pt-2'>
                  <a
                  href={project.github}
                  target='_blank'
                  rel="noopener noreferrer"
                  className='flex-1 flex items-center justify-center gap-2 px-4 py-2.4 rounded-full border border-gray-600 text-gray-300 text-sm font-medium hover:bg-blue-900 hover:border-gray-400 transition-all duration-300'
                  >
                    <FaGithubSquare className='w-4 h-4'/>
                    Github
                  </a>

                  <a
                  href={project.demo}
                  target='_blank'
                  rel="noopener noreferrer"
                  className='flex-1 flex items-center justify-center gap-2 px-4 py-2.4 rounded-full border border-gray-600 text-gray-300 text-sm font-medium hover:bg-blue-900 hover:border-gray-400 transition-all duration-300'
                  >
                    <PiArrowSquareOutBold  className='w-4 h-4'/>
                    Live Demo
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects