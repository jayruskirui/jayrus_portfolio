import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { FiSend } from "react-icons/fi";



const contactInfo = [
  {
    icon: MdOutlineMailOutline,
    label: 'Email',
    value: 'jayruskirui@gmail.com',
    href: 'malto:jayruskirui@gmail.com',
  },
  {
    icon: MdPhoneInTalk,
    label: 'Phone',
    value: '+254 724 168 604',
    href: 'tel:+254724168604',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: '#',  
  }
];


const Contact = () => {
  return (
  <section id="contact" className="py-32 relative overflow-hidden">

    <div className='container mx-auto px-6 relative z-10'>
      {/* Section header */}
        <div className='text-center mx-auto max-w-2xl mb-16'>
          <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">
            GET IN TOUCH</span>
          <h2 className="text-sky-500 text-4xl md:text-5xl font-bold mt-4">CONTACT</h2>
        </div>


       <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
        {/* Contact Info */}
        <div className='bg-slate-800 p-8 rounded-3xl text-gray-300'>
          <form className='space-y-6'>

            <div>
              <label 
              htmlFor='name'
              className='block text-sm font-medium mb-2'
              >
                Name
              </label>
              <input 
              id='name'
              type='text'
              autoComplete='off'
              required
              placeholder='Your name...'
              className='w-full px-4 py-3 bg-slate-700 rounded-xl border border-transparent focus:border-slate-500 focus:ring-1 focus:border-slate-500 outline-none transition-all'/>
            </div>

            <div>
              <label 
              htmlFor='email'
              className='block text-sm font-medium mb-2'
              >
                Email
              </label>
              <input
              type='email'
              autoComplete='new-password'
              required
              placeholder='your@gmail.com'
              className='w-full px-4 py-3 bg-slate-700 rounded-xl border border-transparent focus:border-slate-500 focus:ring-1 focus:border-slate-500 outline-none transition-all'/>
            </div>

            <div>
              <label 
              htmlFor='message'
              className='block text-sm font-medium mb-2'
              >
                Message
              </label>
              <textarea
              rows={5}
              required
              placeholder='Your message...'
              className='w-full px-4 py-3 bg-slate-700 rounded-xl border border-transparent focus:border-slate-500 focus:ring-1 focus:border-slate-500 outline-none transition-all resize-none'/>
            </div>

            <button 
            className="group flex items-center gap-2 rounded-lg px-4 py-2 font-medium ... bg-gradient-to-r from-sky-600 to-indigo-500 hover:from-sky-500 hover:to-indigo-400"
            type='submit'>
              Send Message
              <FiSend/>
            </button>
          </form>
        </div>
       </div> 

    </div>
  </section>
  )
}

export default Contact