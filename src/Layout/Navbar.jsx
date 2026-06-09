import { House, Menu, X } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const navLinks =[
    { to: '/about', label: 'About' },  
    { to: '/projects', label: 'Projects' },
    { to: '/competencies', label: 'Competencies' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/contact', label: 'Contact' },
  ]


  return (
  <div  className="fixed top-0 left-0 bg-slate-900 w-full z-50">
    <nav className='bg-transparent shadow-lg flex items-center justify-around py-6 justify-between pl-12 pr-30 fixed top-0 left-0 w-full relative'>
      
      {/* LOGO */}
        <Link to  ={'/'}>
          <span className='font-semibold text-sm flex items-center gap-3 text-blue-400 hover:text-sky-300 transition duration-200'>
            <House size={22}/>
            <span className='font-semibold text-xl'>Home</span>
          </span>
        </Link>

        {/* Desktop links */}
      <div className='hidden sm:flex items-center gap-4'>
        {navLinks.map(({to, label})=>(
          <Link
          key={to}
          to={to}
          className="py-1 px-3 text-sm border border-gray-800 hover:border-sky-300 font-medium text-gray-300 hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-200"
          >
          {label}
          </Link>
        ))}
      </div>

      {/* Hamburger button */}
        <button
        className='sm:hidden p-2 rounded-lg text-gray-300 hover:bg-slate-700 transition duration-200 absolute right-4'
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle menu'
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
    </nav>

    {/* Mobile menu */}
      {isOpen && (
      <div className="sm:hidden fixed top-[60px] left-0 w-full bg-slate-900/85 backdrop-blur-md hover:text-slate-700 transition duration-200 flex flex-col z-40">
        {navLinks.map(({to, label})=>(
          <Link
          key={to}
          to={to}
          onClick={() => setIsOpen(false)}
          className="py-4 px-8 font-medium text-gray-300 hover:text-sky-300 hover:bg-white/5 transition duration-200"
          >
          {label}
          </Link>
      ))}
      </div>
     )}
  </div>
  );
};

export default Navbar
