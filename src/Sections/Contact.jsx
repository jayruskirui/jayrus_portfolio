import React, { useState, useEffect } from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import { IoAlertCircleOutline } from "react-icons/io5";
import { GoCheckCircle } from "react-icons/go";




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

const [formData, setFormData] = useState({
  name:'',
  email:'',
  message:'',
})

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

const handleSubmit = async (e) => {
  e.preventDefault();

  setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

   await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully",
      });
      setFormData({ name: "", email: "", message: "" });
   
  }catch (err) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
        error.text || "Failed to send message. Please try again later.",
      });
  }finally {
    setIsLoading(false)
  }
};

useEffect(() => {
  if (submitStatus.type) {
    const timer = setTimeout(() => {
      setSubmitStatus({ type: null, message: "" });
    }, 5000);

    return () => clearTimeout(timer); // cleanup if component unmounts
  }
}, [submitStatus.type]);


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
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-400">
                Contact Information
              </h3>
              <div className="space-y-4 text-gray-300">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-700 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                      <item.icon className="w-7 h-7 text-gray-300" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-300">
                        {item.label}
                      </div>
                      <div className="font-medium text-gray-400">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        {/* Form Info */}
        <div className='bg-slate-800 p-8 rounded-3xl text-gray-300'>
          <form className='space-y-6' onSubmit={handleSubmit}>

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
              value={formData.name}
              onChange={(e)=>
                setFormData({...formData, name: e.target.value})
              }
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
              value={formData.email}
              onChange={(e)=>
                setFormData({...formData, email: e.target.value})
              }
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
              value={formData.message}
              onChange={(e)=>
                setFormData({...formData, message: e.target.value})
              }
              placeholder='Your message...'
              className='w-full px-4 py-3 bg-slate-700 rounded-xl border border-transparent focus:border-slate-500 focus:ring-1 focus:border-slate-500 outline-none transition-all resize-none'/>
            </div>

            <button 
            className="group flex items-center gap-2 rounded-lg px-4 py-2 font-medium ... bg-gradient-to-r from-sky-600 to-indigo-500 hover:from-sky-500 hover:to-indigo-400"
            type='submit'
            disabled={isLoading}>
              {isLoading ? (
                <>Sending...</>
              ) :(
                <>
                 Send Message
                 <FiSend/>
                </>
              )
              }
            </button>

            {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <GoCheckCircle  className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <IoAlertCircleOutline className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
          </form>
        </div>
       </div> 

    </div>
  </section>
  )
}

export default Contact