import { Mail, Phone, PhoneCall } from 'lucide-react'
import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";


const Contact = () => {
  return (
  <section id="contact" className="py-10 relative overflow-hidden">
   <div  className='container mx-auto px-4 sm:px-8 relative z-10'>
       
       {/* Headings */}
    <div className='text-center mb-16'>
      <h2 className='text-gray-400 text-sm font-medium tracking-wider uppercase'>
        GET IN TOUCH
      </h2>

      <p className='text-sky-500 text-4xl md:text-5xl font-bold mt-4'>
        Contact
      </p>
    </div>

        {/* contact */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>

      {/* left */}
      <div className='space-y-8'>
        <h3 className='text-gray-400 text-2xl font-semibold mb-6'>
          Contact Information
        </h3>
      
      <div  className='space-y-10 justify-center'>
        <div className='flex items-start space-x-4'>
          <div className='bg-slate-800 p-3 rounded-full'>
            <Mail className='h-6 w-6 text-gray-400'/>
          </div>
          <div>
            <h4 className='text-gray-300 font-medium'>Email</h4>
            <a href='malto:jayruskirui@gmail.com'
            className='text-gray-400 hover:text-gray-300 transition-colors'
            >
              jayruskirui@gmail.com
            </a>
          </div>
        </div>

        <div className='flex items-start space-x-4'>
          <div className='bg-slate-800 p-3 rounded-full'>
            <PhoneCall className='h-6 w-6 text-gray-400'/>
          </div>
          <div>
            <h4 className='text-gray-300 font-medium'>Phone</h4>
            <a href='tell:+254 724 168 604'
            className='text-gray-400 hover:text-gray-300 transition-colors'
            >
              +254 724 168 604
            </a>
          </div>
        </div>

        <div className='flex items-start space-x-4'>
          <div className='bg-slate-800 p-3 rounded-full'>
            <FaMapMarkerAlt className='h-6 w-6 text-gray-400'/>
          </div>
          <div>
            <h4 className='text-gray-300 font-medium'>Location</h4>
            <a className='text-gray-400 hover:text-gray-300 transition-colors' >
              Nairobi, Kenya
            </a>
          </div>
        </div>

       <div className='border border-transparent bg-slate-800 p-4 rounded-2xl'>
        <div className='flex items-center gap-3'>
          <div className='bg-green-600 h-3 w-3 rounded-full animate-pulse duration-[-1]'/>
          <h2 className='text-gray-300 font-medium'>Available for work</h2>
        </div>
       </div>
      </div>
      </div>

      <div className='bg-slate-800 p-8 rounded-lg shadow-xs'>
        <h3 className='text-gray-300 text-2xl font-semibold mb-6'>Send Message</h3>

        <form className='space-y-6'>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-gray-400">
               Name
            </label>
            <input type="text" id="name" value={name} required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition"
            />
          </div>
        </form>
      </div>

    </div>

   </div>
  </section>
  )
}

export default Contact