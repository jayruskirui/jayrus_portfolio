import React from 'react'

const frontendSkills = [
  { name: "HTML & CSS" },
  { name: "React" },
  { name: "Next.js" },
  { name: "JavaScript" },
  { name: "Tailwind CSS" },
  { name: "TypeScript" },
];

const backendSkills = [
  { name: "Node.js" },
  { name: "REST API Design" },
  { name: "Database Design" },
  { name: "Authentication & Security" },
  { name: "Express.js" },
  { name: "Next.js" },
];

const databaseSkills = [
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "MySQL" },
  { name: "GraphQL" },
];

const DevOpstools = [
  { name: "Git & GitHub" },
  { name: "GitLab" },
  { name: "Docker" },
  { name: "Kubernetes" },
  { name: "Helm" },
  { name: "Terraform" },
];

const softSkills = [
  { name: "Problem Solving" },
  { name: "Attention to Detail" },
  { name: "Time Management" },
  { name: "Adaptability" },
  { name: "Communication" },
  { name: "Self-Motivation" },
];

const SkillItem = ({ name }) => (
  <div className="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-sky-300 flex-shrink-0"
    >
      <path
        fillRule="evenodd"
        d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
    <p className="text-gray-300 text-sm leading-snug">{name}</p>
  </div>
);

const SkillCard = ({ title, skills }) => (
  <div className="border border-transparent rounded-3xl bg-slate-800 p-6">
    <h3 className="text-sky-300 text-xl font-bold text-center mb-6">{title}</h3>
    <div className="grid grid-cols-2 gap-x-4 gap-y-4">
      {skills.map((item, i) => (
        <SkillItem key={i} name={item.name} />
      ))}
    </div>
  </div>
);

const Competencies = () => {
  return (
    <section id="competencies" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">
            My Core Competencies
          </span>
          <h2 className="text-sky-500 text-4xl md:text-5xl font-bold mt-4">
            Web Development
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="Frontend" skills={frontendSkills} />
          <SkillCard title="Backend" skills={backendSkills} />
          <SkillCard title="Database" skills={databaseSkills} />
          <SkillCard title="DevOps Tools" skills={DevOpstools} />
          <SkillCard title="Soft Skills" skills={softSkills} />
        </div>

      </div>
    </section>
  )
}

export default Competencies