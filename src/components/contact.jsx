import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

const contactLinks = [
  {
    icon: <FaEnvelope size={20} />,
    label: 'Email',
    value: 'your@email.com',
    href: 'mailto:your@email.com',
    color: '#6C63FF',
  },
  {
    icon: <FaLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    href: 'https://linkedin.com/in/yourprofile',
    color: '#0A66C2',
  },
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    value: 'github.com/Rajesh-AG',
    href: 'https://github.com/Rajesh-AG',
    color: '#EEEEF2',
  },
]

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      return
    }

    setStatus('sending')

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    )

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )

    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`

    setTimeout(() => {
      setStatus('opened')
    }, 800)
  }

  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ background: '#0C0D14' }}
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[#6C63FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-[#EEEEF2] mb-4"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            Contact Me
          </h2>

          <div
            className="w-12 h-[3px] rounded-full"
            style={{
              background: '#6C63FF',
            }}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — Text + Links */}
          <div className="flex flex-col justify-between gap-10">

            {/* Intro */}
            <div>
              <p className="text-[#C8CADE] text-[0.95rem] leading-[1.85] mb-3">
                I&apos;m currently open to freelance projects, full-time
                roles, and internship opportunities. If you have a project
                in mind or simply want to connect, feel free to reach out.
              </p>

              <p className="text-[#C8CADE] text-[0.95rem] leading-[1.85] opacity-70">
                I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith('mailto:')
                      ? undefined
                      : '_blank'
                  }
                  rel={
                    link.href.startsWith('mailto:')
                      ? undefined
                      : 'noreferrer'
                  }
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:border-[#6C63FF]/40 hover:translate-x-1 group"
                  style={{
                    background: '#13151F',
                    borderColor: 'rgba(108,99,255,0.12)',
                    textDecoration: 'none',
                  }}
                >

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    style={{
                      background: `${link.color}18`,
                      color: link.color,
                    }}
                  >
                    {link.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[#EEEEF2] text-xs font-semibold uppercase tracking-wider mb-0.5"
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                      }}
                    >
                      {link.label}
                    </p>

                    <p className="text-[#C8CADE] text-sm truncate opacity-70">
                      {link.value}
                    </p>
                  </div>

                  {/* Arrow */}
                  <HiArrowRight
                    size={16}
                    className="text-[#6C63FF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Message Form */}
          <div
            className="p-8 rounded-2xl border"
            style={{
              background: '#13151F',
              borderColor: 'rgba(108,99,255,0.12)',
            }}
          >
            <h3
              className="text-[#EEEEF2] text-lg font-semibold mb-6"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[#C8CADE] text-xs font-medium uppercase tracking-wider"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm text-[#EEEEF2] outline-none transition-all duration-200 focus:border-[#6C63FF]/60 placeholder:opacity-40"
                  style={{
                    background: '#0C0D14',
                    border: '1px solid rgba(108,99,255,0.2)',
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[#C8CADE] text-xs font-medium uppercase tracking-wider"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm text-[#EEEEF2] outline-none transition-all duration-200 focus:border-[#6C63FF]/60 placeholder:opacity-40"
                  style={{
                    background: '#0C0D14',
                    border: '1px solid rgba(108,99,255,0.2)',
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[#C8CADE] text-xs font-medium uppercase tracking-wider"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-sm text-[#EEEEF2] outline-none transition-all duration-200 focus:border-[#6C63FF]/60 placeholder:opacity-40 resize-none"
                  style={{
                    background: '#0C0D14',
                    border: '1px solid rgba(108,99,255,0.2)',
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={
                  status === 'sending' ||
                  status === 'opened'
                }
                className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background:
                    'linear-gradient(135deg, #6C63FF, #A78BFA)',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                {status === 'sending'
                  ? 'Opening Mail...'
                  : status === 'opened'
                  ? 'Mail App Opened'
                  : 'Send Message'}
              </button>

              {/* Status Message */}
              {status === 'opened' && (
                <p className="text-center text-xs text-[#A78BFA]">
                  Your email app should now be open. Please send the
                  message from there.
                </p>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact