import React from 'react'
import salesImg from "../assets/projects/sales.png.png"
import ecommerceImg from "../assets/projects/ecommerce.png.png"
import universityImg from "../assets/projects/university.png.png"


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
     <div className='absolute top-1/4 right-0 w-96 h-96 bg-blue-900 rounded-full blur-3xl'/>
      <div className='absolute top-1/4 left-0 w-96 h-96 bg-blue-900 rounded-full blur-3xl'/>
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
            className='group rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
            style={{animationDelay: `${(index+1)*100}ms`}}>
              
              {/* image */}
              <div className='relative overflow-hidden aspect-video'>
                <img
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects