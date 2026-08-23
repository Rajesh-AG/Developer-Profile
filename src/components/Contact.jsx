import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

/*
|--------------------------------------------------------------------------
| EmailJS Configuration
|--------------------------------------------------------------------------
| Replace these values with your actual EmailJS credentials.
|
| Recommended for Vite:
|
| VITE_EMAILJS_SERVICE_ID=...
| VITE_EMAILJS_TEMPLATE_ID=...
| VITE_EMAILJS_PUBLIC_KEY=...
|
| Then access them using import.meta.env.
|--------------------------------------------------------------------------
*/

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || ''

const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''

const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

const EMAILJS_ENDPOINT =
  'https://api.emailjs.com/api/v1.0/email/send'

const INITIAL_FORM = {
  name: '',
  email: '',
  message: '',
}

const INITIAL_ERRORS = {
  name: '',
  email: '',
  message: '',
}

const INITIAL_FOCUS = {
  name: false,
  email: false,
  message: false,
}

const contactLinks = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'rajesh.ag.dev@gmail.com',
    href: 'mailto:rajesh.ag.dev@gmail.com',
    color: '#684BFF',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rajesh-ag',
    href: 'https://linkedin.com/in/rajesh-ag',
    color: '#0A66C2',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/Rajesh-AG',
    href: 'https://github.com/Rajesh-AG',
    color: '#EEEEF2',
  },
]

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState(INITIAL_ERRORS)
  const [isFocused, setIsFocused] = useState(INITIAL_FOCUS)

  const [status, setStatus] = useState('idle')
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success',
  })

  const toastTimerRef = useRef(null)

  /*
  |--------------------------------------------------------------------------
  | Cleanup toast timer
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current)
      }
    }
  }, [])

  /*
  |--------------------------------------------------------------------------
  | Toast
  |--------------------------------------------------------------------------
  */

  const triggerToast = (message, type = 'success') => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current)
    }

    setToast({
      show: true,
      message,
      type,
    })

    toastTimerRef.current = setTimeout(() => {
      setToast({
        show: false,
        message: '',
        type: 'success',
      })
    }, 4500)
  }

  /*
  |--------------------------------------------------------------------------
  | Field validation
  |--------------------------------------------------------------------------
  */

  const validateField = (name, value) => {
    const trimmedValue = value.trim()

    let errorMessage = ''

    if (!trimmedValue) {
      const labels = {
        name: 'Name',
        email: 'Email',
        message: 'Message',
      }

      errorMessage = `${labels[name]} is required`
    } else if (name === 'name' && trimmedValue.length < 2) {
      errorMessage = 'Please enter at least 2 characters'
    } else if (name === 'email' && !isValidEmail(trimmedValue)) {
      errorMessage = 'Please enter a valid email address'
    } else if (name === 'message' && trimmedValue.length < 10) {
      errorMessage = 'Message should be at least 10 characters'
    }

    setErrors((previous) => ({
      ...previous,
      [name]: errorMessage,
    }))

    return !errorMessage
  }

  const validateForm = () => {
    const nameValid = validateField('name', form.name)
    const emailValid = validateField('email', form.email)
    const messageValid = validateField('message', form.message)

    return nameValid && emailValid && messageValid
  }

  /*
  |--------------------------------------------------------------------------
  | Input handlers
  |--------------------------------------------------------------------------
  */

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))

    /*
     * Only revalidate fields that already have an error.
     * This prevents aggressive validation while typing.
     */
    if (errors[name]) {
      validateField(name, value)
    }
  }

  const handleFocus = (name) => {
    setIsFocused((previous) => ({
      ...previous,
      [name]: true,
    }))
  }

  const handleBlur = (event) => {
    const { name, value } = event.target

    setIsFocused((previous) => ({
      ...previous,
      [name]: false,
    }))

    validateField(name, value)
  }

  /*
  |--------------------------------------------------------------------------
  | Submit
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (status === 'sending') {
      return
    }

    const valid = validateForm()

    if (!valid) {
      triggerToast(
        'Please fix the highlighted fields.',
        'error'
      )
      return
    }

    /*
     * Configuration check
     */
    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      console.error(
        'EmailJS configuration is missing.'
      )

      setStatus('error')

      triggerToast(
        'Email service is not configured yet.',
        'error'
      )

      return
    }

    setStatus('sending')

    try {
      const response = await fetch(EMAILJS_ENDPOINT, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

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

      if (!response.ok) {
        const errorText = await response.text()

        console.error(
          'EmailJS error:',
          errorText
        )

        throw new Error(
          'Email could not be sent.'
        )
      }

      setStatus('success')

      setForm(INITIAL_FORM)
      setErrors(INITIAL_ERRORS)
      setIsFocused(INITIAL_FOCUS)

      triggerToast(
        "Message sent successfully! I'll get back to you soon.",
        'success'
      )
    } catch (error) {
      console.error(
        'Contact form error:',
        error
      )

      setStatus('error')

      triggerToast(
        'Something went wrong. Please try again.',
        'error'
      )
    } finally {
      setStatus((previous) =>
        previous === 'sending'
          ? 'idle'
          : previous
      )
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Dynamic field class
  |--------------------------------------------------------------------------
  */

  const getFieldClass = (name) => {
    const hasError = Boolean(errors[name])
    const focused = isFocused[name]
    const hasValue = Boolean(form[name])

    const base =
      'w-full px-4 py-3.5 rounded-xl text-sm text-[#EEEEF2] bg-[#0C0D14] border outline-none transition-all duration-300 placeholder:text-transparent'

    if (hasError) {
      return `${base} border-[#EF4444] focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/10`
    }

    if (focused || hasValue) {
      return `${base} border-[#684BFF] shadow-[0_0_0_3px_rgba(104,75,255,0.08)]`
    }

    return `${base} border-[#6C63FF]/15 hover:border-[#6C63FF]/30 focus:border-[#684BFF]`
  }

  const getLabelClass = (name) => {
    const active =
      isFocused[name] ||
      Boolean(form[name])

    return `
      absolute
      left-3.5
      pointer-events-none
      transition-all
      duration-200
      px-1.5
      rounded-md
      ${
        active
          ? '-top-2 text-[11px] text-[#A78BFA] bg-[#13151F]'
          : 'top-[18px] text-sm text-[#9CA3AF]'
      }
    `
  }

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#0C0D14]
        px-5
        py-12
        sm:px-6
        md:py-16
      "
      aria-labelledby="contact-heading"
    >
      {/* =========================================================
          Background Decoration
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-[#684BFF]/5
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-72
          w-72
          rounded-full
          bg-[#8B5CF6]/5
          blur-3xl
        "
      />

      {/* =========================================================
          Toast
      ========================================================== */}

      {toast.show && (
        <div
          role="status"
          aria-live="polite"
          className={`
            fixed
            bottom-5
            left-5
            right-5
            sm:left-auto
            sm:right-6
            sm:bottom-6
            z-[100]
            flex
            items-start
            gap-3
            rounded-xl
            border
            px-4
            py-3.5
            shadow-2xl
            backdrop-blur-xl
            animate-fade-in
            ${
              toast.type === 'success'
                ? 'border-emerald-400/20 bg-emerald-500/10'
                : 'border-red-400/20 bg-red-500/10'
            }
          `}
        >
          <span
            className="mt-0.5 text-base"
            aria-hidden="true"
          >
            {toast.type === 'success' ? '✓' : '×'}
          </span>

          <span
            className={`
              text-sm
              font-medium
              ${
                toast.type === 'success'
                  ? 'text-emerald-200'
                  : 'text-red-200'
              }
            `}
          >
            {toast.message}
          </span>
        </div>
      )}

      {/* =========================================================
          Main Container
      ========================================================== */}

      <div className="relative mx-auto max-w-[1100px]">
        {/* =======================================================
            Section Header
        ======================================================== */}

        <div className="mb-8 md:mb-10">
          <p
            className="
              mb-3
              text-[11px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#684BFF]
            "
          >
            Get In Touch
          </p>

          <h2
            id="contact-heading"
            className="
              mb-4
              text-3xl
              font-bold
              tracking-tight
              text-[#EEEEF2]
              sm:text-4xl
            "
            style={{
              fontFamily:
                'Space Grotesk, sans-serif',
            }}
          >
            Contact Me
          </h2>

          <div
            className="
              h-[3px]
              w-12
              rounded-full
              bg-[#684BFF]
            "
          />
        </div>

        {/* =======================================================
            Content Grid
        ======================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-14
          "
        >
          {/* =====================================================
              LEFT COLUMN
          ====================================================== */}

          <div className="flex flex-col text-left">
            <div className="mb-8">
              <h3
                className="
                  mb-4
                  text-2xl
                  font-bold
                  tracking-tight
                  text-[#EEEEF2]
                "
                style={{
                  fontFamily:
                    'Space Grotesk, sans-serif',
                }}
              >
                Let&apos;s Work Together
              </h3>

              <p
                className="
                  max-w-lg
                  text-[15px]
                  leading-7
                  text-[#9CA3AF]
                "
              >
                I&apos;m currently open to freelance
                projects, full-time roles, and
                internship opportunities. Have a
                project in mind or simply want to
                connect? Send me a message and I&apos;ll
                get back to you as soon as possible.
              </p>
            </div>

            {/* =================================================
                Contact Links
            ================================================== */}

            <div
              className="flex flex-col gap-3"
              aria-label="Contact links"
            >
              {contactLinks.map((link) => {
                const Icon = link.icon

                const isExternal =
                  link.href.startsWith('http')

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      isExternal
                        ? '_blank'
                        : undefined
                    }
                    rel={
                      isExternal
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      border
                      border-[#6C63FF]/10
                      bg-[#13151F]
                      p-4
                      transition-all
                      duration-200
                      ease-out
                      hover:-translate-y-0.5
                      hover:border-[#684BFF]/35
                      hover:bg-[#161823]
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#684BFF]
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-[#0C0D14]
                    "
                  >
                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/5
                        transition-transform
                        duration-200
                        group-hover:scale-[1.03]
                      "
                      style={{
                        backgroundColor:
                          `${link.color}12`,
                        color: link.color,
                      }}
                    >
                      <Icon size={19} />
                    </div>

                    {/* Text */}

                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          mb-1
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#6B7280]
                        "
                        style={{
                          fontFamily:
                            'Space Grotesk, sans-serif',
                        }}
                      >
                        {link.label}
                      </p>

                      <p
                        className="
                          truncate
                          text-sm
                          font-semibold
                          text-[#C4B5FD]
                        "
                      >
                        {link.value}
                      </p>
                    </div>

                    {/* Arrow */}

                    <HiArrowRight
                      size={17}
                      aria-hidden="true"
                      className="
                        flex-shrink-0
                        text-[#684BFF]
                        opacity-0
                        -translate-x-1
                        transition-all
                        duration-200
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    />
                  </a>
                )
              })}
            </div>

            {/* Small supporting text */}

            <p
              className="
                mt-6
                text-xs
                leading-5
                text-[#6B7280]
              "
            >
              I usually respond within 24–48 hours.
            </p>
          </div>

          {/* =====================================================
              RIGHT COLUMN — FORM
          ====================================================== */}

          <div
            className="
              rounded-2xl
              border
              border-[#6C63FF]/10
              bg-[#13151F]
              p-5
              shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              sm:p-8
            "
          >
            <div className="mb-7">
              <h3
                className="
                  text-lg
                  font-bold
                  text-[#EEEEF2]
                "
                style={{
                  fontFamily:
                    'Space Grotesk, sans-serif',
                }}
              >
                Send a Message
              </h3>

              <p
                className="
                  mt-1.5
                  text-sm
                  text-[#6B7280]
                "
              >
                Tell me a little about your project,
                idea, or opportunity.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              noValidate
            >
              {/* =================================================
                  NAME
              ================================================== */}

              <div className="relative pt-2">
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() =>
                    handleFocus('name')
                  }
                  onBlur={handleBlur}
                  disabled={
                    status === 'sending'
                  }
                  autoComplete="name"
                  placeholder="Name"
                  aria-label="Name"
                  aria-invalid={
                    Boolean(errors.name)
                  }
                  aria-describedby={
                    errors.name
                      ? 'name-error'
                      : undefined
                  }
                  className={getFieldClass('name')}
                />

                <label
                  htmlFor="contact-name"
                  className={getLabelClass('name')}
                >
                  Name
                </label>

                {errors.name && (
                  <p
                    id="name-error"
                    role="alert"
                    className="
                      mt-1.5
                      px-1
                      text-xs
                      font-medium
                      text-[#EF4444]
                    "
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* =================================================
                  EMAIL
              ================================================== */}

              <div className="relative pt-2">
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() =>
                    handleFocus('email')
                  }
                  onBlur={handleBlur}
                  disabled={
                    status === 'sending'
                  }
                  autoComplete="email"
                  placeholder="Email"
                  aria-label="Email"
                  aria-invalid={
                    Boolean(errors.email)
                  }
                  aria-describedby={
                    errors.email
                      ? 'email-error'
                      : undefined
                  }
                  className={getFieldClass('email')}
                />

                <label
                  htmlFor="contact-email"
                  className={getLabelClass('email')}
                >
                  Email
                </label>

                {errors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className="
                      mt-1.5
                      px-1
                      text-xs
                      font-medium
                      text-[#EF4444]
                    "
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* =================================================
                  MESSAGE
              ================================================== */}

              <div className="relative pt-2">
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() =>
                    handleFocus('message')
                  }
                  onBlur={handleBlur}
                  disabled={
                    status === 'sending'
                  }
                  placeholder="Message"
                  aria-label="Message"
                  aria-invalid={
                    Boolean(errors.message)
                  }
                  aria-describedby={
                    errors.message
                      ? 'message-error'
                      : undefined
                  }
                  rows={5}
                  className={`
                    ${getFieldClass('message')}
                    min-h-[140px]
                    resize-y
                  `}
                />

                <label
                  htmlFor="contact-message"
                  className={getLabelClass('message')}
                >
                  Message
                </label>

                {errors.message && (
                  <p
                    id="message-error"
                    role="alert"
                    className="
                      mt-1.5
                      px-1
                      text-xs
                      font-medium
                      text-[#EF4444]
                    "
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* =================================================
                  SUBMIT BUTTON
              ================================================== */}

              <button
                type="submit"
                disabled={
                  status === 'sending'
                }
                aria-busy={
                  status === 'sending'
                }
                className="
                  mt-1
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-[#684BFF]
                  to-[#8B5CF6]
                  px-5
                  py-4
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-200
                  ease-out
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_30px_rgba(104,75,255,0.22)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#A78BFA]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#13151F]
                  active:translate-y-0
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  disabled:hover:translate-y-0
                  disabled:hover:shadow-none
                "
                style={{
                  fontFamily:
                    'Space Grotesk, sans-serif',
                }}
              >
                {status === 'sending' ? (
                  <>
                    <svg
                      className="
                        h-5
                        w-5
                        animate-spin
                      "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-90"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>

                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span aria-hidden="true">
                      →
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact