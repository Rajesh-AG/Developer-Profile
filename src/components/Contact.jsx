import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'

const INITIAL_FORM = { name: '', email: '', message: '' }
const INITIAL_ERRORS = { name: '', email: '', message: '' }
const INITIAL_FOCUS = { name: false, email: false, message: false }

const contactLinks = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'rajesh.ag.dev@gmail.com',
    href: 'mailto:rajesh.ag.dev@gmail.com',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rajesh-ag',
    href: 'https://linkedin.com/in/rajesh-ag',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/Rajesh-AG',
    href: 'https://github.com/Rajesh-AG',
  },
]

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState(INITIAL_ERRORS)
  const [isFocused, setIsFocused] = useState(INITIAL_FOCUS)
  const [status, setStatus] = useState('idle')
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' })
  const toastTimerRef = useRef(null)

  useEffect(() => () => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
  }, [])

  const triggerToast = (message, type = 'success') => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    setToast({ show: true, message, type })
    toastTimerRef.current = setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' })
    }, 4500)
  }

  const validateField = (name, value) => {
    const trimmed = value.trim()
    let errorMessage = ''
    if (!trimmed) {
      errorMessage = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
    } else if (name === 'name' && trimmed.length < 2) {
      errorMessage = 'Please enter at least 2 characters'
    } else if (name === 'email' && !isValidEmail(trimmed)) {
      errorMessage = 'Please enter a valid email address'
    } else if (name === 'message' && trimmed.length < 10) {
      errorMessage = 'Message should be at least 10 characters'
    }
    setErrors((prev) => ({ ...prev, [name]: errorMessage }))
    return !errorMessage
  }

  const validateForm = () =>
    ['name', 'email', 'message'].every((field) => validateField(field, form[field]))

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) validateField(name, value)
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setIsFocused((prev) => ({ ...prev, [name]: false }))
    validateField(name, value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    if (!validateForm()) {
      triggerToast('Please fix the highlighted fields.', 'error')
      return
    }
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error')
      triggerToast('Email service is not configured yet.', 'error')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(EMAILJS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name.trim(),
            reply_to: form.email.trim(),
            message: form.message.trim(),
          },
        }),
      })
      if (!response.ok) throw new Error('Email could not be sent.')
      setStatus('success')
      setForm(INITIAL_FORM)
      setErrors(INITIAL_ERRORS)
      setIsFocused(INITIAL_FOCUS)
      triggerToast("Message sent! I'll get back to you soon.", 'success')
    } catch {
      setStatus('error')
      triggerToast('Something went wrong. Please try again.', 'error')
    } finally {
      setStatus((prev) => (prev === 'sending' ? 'idle' : prev))
    }
  }

  const fieldClass = (name) => {
    const base = 'w-full px-4 py-3 rounded-[var(--radius)] text-sm text-[var(--text-bright)] bg-[var(--bg)] border outline-none transition-all duration-200 placeholder:text-transparent'
    if (errors[name]) return `${base} border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/50`
    if (isFocused[name] || form[name]) return `${base} border-indigo-500/60 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50`
    return `${base} border-[var(--border)] hover:border-[var(--border-hover)]`
  }

  const labelClass = (name) => {
    const active = isFocused[name] || form[name]
    return `absolute left-3.5 pointer-events-none transition-all duration-200 px-1 rounded ${
      active ? '-top-2 text-[10px] text-indigo-400 bg-[var(--surface)]' : 'top-[13px] text-xs sm:text-sm text-[var(--text-muted)]'
    }`
  }

  return (
    <section id="contact" className="section bg-[var(--bg)]" aria-labelledby="contact-heading">
      {toast.show && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-5 left-5 right-5 sm:left-auto sm:right-6 sm:bottom-6 z-[100] flex items-center justify-between gap-3 rounded-[var(--radius)] border px-4 py-3 shadow-2xl animate-fade-in ${
            toast.type === 'success'
              ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
              : 'border-red-500/30 bg-red-500/10 text-red-300'
          }`}
        >
          <span className="text-xs font-semibold">{toast.message}</span>
        </div>
      )}

      <div className="section-inner px-6">
        <header className="section-header">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading" className="section-title">Get in touch</h2>
          <p className="section-subtitle">
            Open to freelance projects, full-time roles, and internship opportunities.
          </p>
          <div className="section-accent" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 max-w-4xl mx-auto">
          
          <div className="flex flex-col justify-between">
            <p className="text-sm sm:text-base text-[var(--text)] leading-relaxed mb-6">
              Have a project in mind or want to connect? Send a message and I&apos;ll respond within 24–48 hours.
            </p>

            <div className="flex flex-col gap-3 w-full" aria-label="Contact links">
              {contactLinks.map((link) => {
                const Icon = link.icon
                const isExternal = link.href.startsWith('http')
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="card card-interactive group flex items-center gap-4 p-4 hover:border-indigo-500/20"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--surface-2)] text-[var(--text-muted)] group-hover:text-indigo-400 group-hover:bg-indigo-500/5 transition-all">
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-0.5">
                        {link.label}
                      </p>
                      <p className="truncate text-xs sm:text-sm font-semibold text-[var(--text-bright)]">{link.value}</p>
                    </div>
                    <HiArrowRight
                      size={14}
                      aria-hidden="true"
                      className="text-indigo-400 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="card p-6 sm:p-7 border border-[var(--border)] bg-[var(--surface)]">
            <h3 className="font-[family-name:var(--font-display)] text-base sm:text-lg font-bold text-[var(--text-bright)] mb-1">
              Send a message
            </h3>
            <p className="text-xs text-[var(--text-muted)] mb-5">
              Tell me about your project or opportunity.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              {['name', 'email'].map((field) => (
                <div key={field} className="relative pt-2">
                  <input
                    id={`contact-${field}`}
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    onFocus={() => setIsFocused((p) => ({ ...p, [field]: true }))}
                    onBlur={handleBlur}
                    disabled={status === 'sending'}
                    autoComplete={field === 'email' ? 'email' : 'name'}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    aria-invalid={Boolean(errors[field])}
                    aria-describedby={errors[field] ? `${field}-error` : undefined}
                    className={fieldClass(field)}
                  />
                  <label htmlFor={`contact-${field}`} className={labelClass(field)}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {errors[field] && (
                    <p id={`${field}-error`} role="alert" className="mt-1 text-[11px] text-red-400">{errors[field]}</p>
                  )}
                </div>
              ))}

              <div className="relative pt-2">
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setIsFocused((p) => ({ ...p, message: true }))}
                  onBlur={handleBlur}
                  disabled={status === 'sending'}
                  placeholder="Message"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  rows={4}
                  className={`${fieldClass('message')} min-h-[100px] resize-y`}
                />
                <label htmlFor="contact-message" className={labelClass('message')}>Message</label>
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-1 text-[11px] text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                aria-busy={status === 'sending'}
                className="btn btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] transition-all py-2.5 text-xs font-semibold"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact
