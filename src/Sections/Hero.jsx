import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Hero = () => {

  const socials = [
    { icon: 'Github', href: 'https://github.com/yourhandle', label: 'GitHub' },
    { icon: 'Linkedin', href: 'https://linkedin.com/in/yourhandle', label: 'LinkedIn' },
    { icon: 'Twitter', href: 'https://twitter.com/yourhandle', label: 'Twitter' },
    { icon: 'Instagram', href: 'https://instagram.com/yourhandle', label: 'Instagram' },
  ];

  return (
    <section className="min-h-screen bg-[#0a0f1e] flex items-center px-10 sm:px-20 py-24 gap-12">

      {/* Left */}
      <div className="flex-1">
        <h1 className="font-extrabold text-5xl leading-tight text-[#f0f4ff] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
          Hi, I'm <span className="text-[#3884ff]">Alex.</span><br />
          I build things<br />for the web.
        </h1>

        <p className="text-[#8892a4] font-light text-lg leading-relaxed max-w-md mb-8">
          Full-stack developer crafting clean, performant digital experiences.
          Turning complex problems into elegant, user-friendly solutions.
        </p>

        <div className="flex items-center gap-4 flex-wrap mb-8">
          <button className="bg-[#3884ff] hover:bg-[#2a6fe0] text-white text-sm font-medium px-7 py-3 rounded-lg transition duration-200">
            View my work ↗
          </button>
          <button className="border border-white/20 text-[#8892a4] hover:text-white hover:border-white/40 text-sm px-6 py-3 rounded-lg transition duration-200">
            Download CV
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <span className="text-[#8892a4] text-xs tracking-wide">Find me on</span>
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#8892a4] hover:text-white hover:border-white/30 hover:-translate-y-0.5 transition duration-200"
            >
              {icon === 'Github' && <Github size={16} />}
              {icon === 'Linkedin' && <Linkedin size={16} />}
              {icon === 'Twitter' && <Twitter size={16} />}
              {icon === 'Instagram' && <Instagram size={16} />}
            </a>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex-shrink-0 flex flex-col items-center gap-5">
        <div className="relative w-52 h-52">
          <div className="absolute -inset-6 rounded-full border border-[#63e6be]/10" />
          <div className="absolute -inset-3 rounded-full border border-dashed border-[#3884ff]/30 animate-spin" style={{ animationDuration: '18s' }} />
          <div className="w-52 h-52 rounded-full bg-[#1a2340] border-2 border-[#3884ff]/25 overflow-hidden">
            <img src="/your-photo.jpg" alt="Alex" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Swinging badge */}
        <div style={{ transformOrigin: 'top center', animation: 'swing 2.5s ease-in-out infinite' }}>
          <div className="flex items-center gap-2 bg-[#101c32] border border-[#63e6be]/25 rounded-full px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-[#63e6be] text-sm font-medium">Available for work</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6">
          {[['20+', 'Projects'], ['15+', 'Clients']].map(([num, label], i, arr) => (
            <div key={label} className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-[#f0f4ff] font-extrabold text-2xl" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {num.slice(0, -1)}<span className="text-[#3884ff]">+</span>
                </div>
                <div className="text-[#8892a4] text-xs tracking-wide mt-1">{label}</div>
              </div>
              {i < arr.length - 1 && <div className="w-px h-9 bg-white/10" />}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero