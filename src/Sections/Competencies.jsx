import React from 'react'

const ShieldCheck = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    // fill="currentColor"
    className="w-5 h-5 text-white flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3A5.25 5.25 0 0012 1.5zm-1.5 14.25a.75.75 0 011.5 0v2.25a.75.75 0 01-1.5 0v-2.25zm6.75-9a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75v3h10.5v-3z"
      clipRule="evenodd"
    />
    <path d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3h10.5v-3A5.25 5.25 0 0012 1.5z" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    // fill="currentColor"
    className="w-5 h-5 text-white flex-shrink-0 mt-0.5"
  >
    <path
      fillRule="evenodd"
      d="M12 1.5a.75.75 0 01.694.464l2.25 5.25a.75.75 0 01-.088.803l-3.75 4.5a.75.75 0 01-1.157-.015l-3.5-4.5a.75.75 0 01-.063-.807l2.25-5.25A.75.75 0 0112 1.5zM3.75 9a.75.75 0 01.567.26l3.5 4.5a.75.75 0 01.039.849l-3 5.25A.75.75 0 014.5 20.25H3a.75.75 0 01-.75-.75v-9a.75.75 0 01.5-.707A11.25 11.25 0 013.75 9zm16.5 0a11.25 11.25 0 01.25.543.75.75 0 01.5.707v9a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.644-.362l-3-5.25a.75.75 0 01.04-.848l3.5-4.5A.75.75 0 0120.25 9z"
      clipRule="evenodd"
    />
  </svg>
);



const frontendSkills = [
  { name: "HTML & CSS", level: "Experienced" },
  { name: "React", level: "Experienced" },
   { name: "Next.js", level: "Experienced" },
  { name: "JavaScript", level: "Experienced" },
  { name: "Tailwind CSS", level: "Experienced" },
  { name: "TypeScript", level: "Experienced" },
];

const backendSkills = [
  { name: "Node.js", level: "Experienced" },
  { name: "REST API Design", level: "Experienced" },
  { name: "Database Design", level: "Experienced" },
  { name: "Authentication & Security", level: "Experienced" },
  { name: "Express js", level: "Intermediate" },
];

const databaseSkills = [
  { name: "PostgreSQL", level: "Experienced" },
  { name: "MongoDB", level: "Experienced" },
  { name: "MySQL", level: "Experienced" },
  { name: "GraphQL", level: "Intermediate" },
];

const DevOpstools = [
  { name: "Git & GitHub", level: "Experienced" },
  { name: "GitLab", level: "Experienced" },
  { name: "Docker", level: "Experienced" },
  { name: "Kubernetes", level: "Experienced" },
  { name: "Vercel & Render", level: "Intermediate" },
];

const softSkills = [
  { name: "Problem Solving", level: "Experienced" },
  { name: "Attention to Detail", level: "Experienced" },
  { name: "Time Management", level: "Experienced" },
  { name: "Adaptability", level: "Experienced" },
  { name: "Communication", level: "Experienced" },
  { name: "Self-Motivation", level: "Experienced" },
];


const SkillItem = ({ name, level }) => (
  <div className="flex items-start gap-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-white flex-shrink-0 mt-3"
    >
      <path
        fillRule="evenodd"
        d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
    <div>
      <p className="text-gray-300 text-1xl mt-3 mb-2">{name}</p>
      {/* <p className="text-gray-500 text-xs mt-0.5">{level}</p> */}
    </div>
  </div>
);


const Competencies = () => {
  return (
    <section id='competencies' className='py-10 relative overflow-hidden'>
      {/* <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-blue-900 rounded-full blur-3xl'/> */}

      <div className='container mx-auto px-8 relative z-10'>

        {/* Section Header */}
        <div className='text-center mb-16'>
          <span className='text-gray-400 text-sm font-medium tracking-wider uppercase'>
            My Core Competencies
          </span>
          <h2 className='text-gray-300 text-4xl md:text-5xl font-bold mt-4'>
            Web Developement
          </h2>
        </div>

        {/* Cards */}
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Frontend card */}
          <div className='border border-transparent rounded-3xl bg-slate-800 p-7'>
            <h3 className='text-gray-300 text-xl font-bold mb-8'>
              Frontend
            </h3>
            <div >
              {frontendSkills.map((item,i)=>(
                <SkillItem key={i} name={item.name} level={item.level}/>
              ))}
            </div>
          </div>
              
          {/* Backend Card */}
          <div className='border border-transparent rounded-3xl bg-slate-800 p-5'>
            <h3 className='text-gray-300 text-xl font-bold text-center mb-8'>
              Backend
            </h3>
            <div>
              {backendSkills.map((item,i)=>(
                <SkillItem key={i} name={item.name} level={item.level}/>
              ))}
            </div>
          </div>

              {/* Database */}
          <div className='border border-transparent rounded-3xl bg-slate-800 p-5'>
            <h3 className='text-gray-300 text-xl font-bold text-center mb-8'>
              Database
            </h3>
            <div>
              {databaseSkills.map((item,i)=>(
                <SkillItem key={i} name={item.name} level={item.level}/>
              ))}
            </div>
          </div>

            {/* DevOps */}
          <div className='border border-transparent rounded-3xl bg-slate-800 p-5'>
            <h3 className='text-gray-300 text-xl font-bold text-center mb-8'>
              DevOps Tools
            </h3>
            <div>
              {DevOpstools.map((item,i)=>(
                <SkillItem key={i} name={item.name} level={item.level}/>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className='border border-transparent rounded-3xl bg-slate-800 p-5'>
            <h3 className='text-gray-300 text-xl font-bold text-center mb-8'>
              Soft Skills
            </h3>
            <div>
              {softSkills.map((item,i)=>(
                <SkillItem key={i} name={item.name} level={item.level}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Competencies