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
    <nav className='bg-slate-800 shadow-lg flex items-center justify-around py-3 justify-between pl-10 pr-30 fixed top-0 left-0 w-full'>
      
      {/* LOGO */}
        <Link to  ={'/'}>
          <span className='font-semibold text-lg flex items-center gap-3 text-blue-400'>
            <House size={22}/>
            <span className='font-semibold text-2xl'>Home</span>
          </span>
        </Link>

        {/* Desktop links */}
      <div className='hidden sm:flex items-center gap-1'>
        {navLinks.map(({to, label})=>(
          <Link
          key={to}
          to={to}
          className="py-1 px-3 text-lg font-light text-gray-300 hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-200"
          >
          {label}
          </Link>
        ))}
      </div>

      {/* Hamburger button */}
        <button
        className='sm:hidden'
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle menu'
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
    </nav>
  );
};

export default Navbar
