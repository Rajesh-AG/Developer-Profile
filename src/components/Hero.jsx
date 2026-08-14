import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import profileImg from '../assets/profile.png'

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16"
      style={{ background: '#0C0D14' }}
    >
      {/* Background glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Main content */}
      <div className="max-w-[1100px] w-full mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">

        {/* Left — Text */}
        <div className="flex-1 text-center md:text-left">

          {/* Availability / Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C63FF]/15 border border-[#6C63FF]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#6C63FF] animate-pulse" />
            <span className="text-xs font-medium text-[#A78BFA] tracking-wide">
              Available for Opportunities
            </span>
          </div>

          {/* Greeting */}
          <p className="text-[#C8CADE] text-sm font-semibold tracking-widest uppercase mb-2">
            👋 Hello, I&apos;m
          </p>

          {/* Name */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#EEEEF2] leading-tight mb-3"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Rajesh A
          </h1>

          {/* Role */}
          <h2
            className="text-xl sm:text-2xl font-medium mb-4"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              background: 'linear-gradient(90deg, #6C63FF, #A78BFA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Full Stack Web Developer & UI/UX Designer
          </h2>

          {/* Description */}
          <p className="text-[#C8CADE] text-base leading-relaxed max-w-lg mb-8 mx-auto md:mx-0">
            I craft high-performance, responsive web applications and intuitive digital experiences. Specializing in modern JavaScript frameworks and scalable backend systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">

            {/* View Work (Primary - Vibrant Fill) */}
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-7 py-3.5 rounded-xl text-sm font-semibold text-white cursor-pointer transition-all duration-200 hover:opacity-95 hover:scale-105 shadow-lg shadow-[#6C63FF]/25"
              style={{
                background:
                  'linear-gradient(135deg, #6C63FF, #A78BFA)',
              }}
            >
              Explore Projects
            </Link>

            {/* Contact (Secondary - Clean Outline) */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-7 py-3.5 rounded-xl text-sm font-semibold text-[#EEEEF2] bg-[#161821] border border-[#6C63FF]/40 cursor-pointer transition-all duration-200 hover:bg-[#6C63FF]/10 hover:border-[#6C63FF]"
            >
              Let's Connect
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 justify-center md:justify-start items-center">
            <span className="text-xs text-[#C8CADE]/60 uppercase tracking-widest">Follow:</span>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[#C8CADE] hover:text-[#6C63FF] transition-colors duration-200 p-2 rounded-lg bg-[#161821] border border-white/5"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[#C8CADE] hover:text-[#6C63FF] transition-colors duration-200 p-2 rounded-lg bg-[#161821] border border-white/5"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right — Profile Photo */}
        <div className="relative flex-shrink-0">

          {/* Outer glow ring */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(108,99,255,0.4) 0%, transparent 70%)',
              transform: 'scale(1.25)',
              filter: 'blur(25px)',
            }}
          />

          {/* Rotating dashed border */}
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed border-[#6C63FF]/40 animate-spin"
            style={{ animationDuration: '15s' }}
          />

          {/* Photo Container */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-[#6C63FF]/50 shadow-2xl bg-[#161821]">
            <img
              src={profileImg}
              alt="Rajesh A — Full Stack Web Developer"
              className="w-full h-full object-cover object-top filter brightness-105"
            />
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-80}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer text-[#C8CADE]/50 hover:text-[#6C63FF] transition-colors duration-200 z-10"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">
          Scroll
        </span>
        <HiArrowDown
          size={16}
          className="animate-bounce"
        />
      </Link>
    </section>
  )
}

export default Hero