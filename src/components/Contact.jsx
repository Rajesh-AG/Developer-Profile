import { useEffect, useRef, useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
const ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'

const INITIAL_FORM = { name: '', email: '', message: '' }
const INITIAL_ERRORS = { name: '', email: '', message: '' }

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState(INITIAL_ERRORS)
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
    }, 4000)
  }

  const validateField = (name, value) => {
    const trimmed = value.trim()
    let error = ''
    if (!trimmed) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
    } else if (name === 'name' && trimmed.length < 2) {
      error = 'Please enter at least 2 characters'
    } else if (name === 'email' && !isValidEmail(trimmed)) {
      error = 'Please enter a valid email address'
    } else if (name === 'message' && trimmed.length < 10) {
      error = 'Message should be at least 10 characters'
    }
    setErrors((prev) => ({ ...prev, [name]: error }))
    return !error
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
    validateField(name, value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    if (!validateForm()) {
      triggerToast('Please fix the errors in the form.', 'error')
      return
    }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      triggerToast('Email service configuration missing.', 'error')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            from_name: form.name.trim(),
            reply_to: form.email.trim(),
            message: form.message.trim(),
          },
        }),
      })
      if (!response.ok) throw new Error('Email failed')
      setStatus('success')
      setForm(INITIAL_FORM)
      setErrors(INITIAL_ERRORS)
      triggerToast('Message sent successfully. I will get back to you soon.', 'success')
    } catch {
      setStatus('error')
      triggerToast('Failed to send message. Please try again or email directly.', 'error')
    } finally {
      setStatus((prev) => (prev === 'sending' ? 'idle' : prev))
    }
  }

  return (
    <section id="contact" className="section-shell" style={{ borderTop: '1px solid var(--line)', paddingBottom: '10rem' }}>
      <div className="section-kicker">09 / CONTACT</div>
      
      {toast.show && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: toast.type === 'success' ? '#10B981' : '#EF4444',
            color: '#fff',
            padding: '12px 18px',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            zIndex: 1000,
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          }}
        >
          {toast.message.toUpperCase()}
        </div>
      )}

      <div className="thinking-grid">
        <div className="contact-editorial">
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--accent)', textTransform: 'uppercase' }}>
            HAVE A PROBLEM WORTH SOLVING?
          </span>
          <h2 className="display-heading display-heading--medium" style={{ margin: '12px 0 24px' }}>
            Let&apos;s build something useful.
          </h2>
          <p className="body-copy">
            Currently based in Chennai, India. Open to mobile engineering positions, UI/UX systems collaboration, and technical training projects.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '36px' }}>
            <a href="mailto:rajesh.ag.dev@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text)' }}>
              <FaEnvelope color="var(--accent)" />
              <span>rajesh.ag.dev@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/rajesh-ag" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text)' }}>
              <FaLinkedin color="var(--accent)" />
              <span>linkedin.com/in/rajesh-ag</span>
            </a>
            <a href="https://github.com/Rajesh-AG" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text)' }}>
              <FaGithub color="var(--accent)" />
              <span>github.com/Rajesh-AG</span>
            </a>
          </div>
        </div>

        {/* Minimal Editorial Contact Form */}
        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginTop: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
            <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--dim)' }}>NAME</span>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={status === 'sending'}
              placeholder="Your name"
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: errors.name ? '1px solid #EF4444' : '1px solid var(--line-strong)',
                color: 'var(--text)',
                padding: '8px 0',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.25s'
              }}
            />
            {errors.name && <span style={{ fontSize: '0.7rem', color: '#EF4444', marginTop: '4px' }}>{errors.name}</span>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
            <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--dim)' }}>EMAIL ADDRESS</span>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={status === 'sending'}
              placeholder="you@example.com"
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: errors.email ? '1px solid #EF4444' : '1px solid var(--line-strong)',
                color: 'var(--text)',
                padding: '8px 0',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.25s'
              }}
            />
            {errors.email && <span style={{ fontSize: '0.7rem', color: '#EF4444', marginTop: '4px' }}>{errors.email}</span>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
            <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--dim)' }}>MESSAGE</span>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={status === 'sending'}
              placeholder="Tell me about your product or role"
              rows={4}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: errors.message ? '1px solid #EF4444' : '1px solid var(--line-strong)',
                color: 'var(--text)',
                padding: '8px 0',
                fontSize: '0.95rem',
                outline: 'none',
                resize: 'none',
                transition: 'border-color 0.25s'
              }}
            />
            {errors.message && <span style={{ fontSize: '0.7rem', color: '#EF4444', marginTop: '4px' }}>{errors.message}</span>}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="button button-primary"
            style={{ width: 'fit-content', marginTop: '12px' }}
          >
            {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE ↗'}
          </button>
        </form>
      </div>
    </section>
  )
}