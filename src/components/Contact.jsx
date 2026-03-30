import { useState } from 'react'

const socials = [
  { label: 'GitHub', icon: '⌨️', href: 'https://github.com', handle: '@Daoya Yongma' },
  { label: 'LinkedIn', icon: '💼', href: 'https://linkedin.com', handle: 'in/daoya yongma' },
  { label: 'Twitter', icon: '🐦', href: 'https://twitter.com', handle: '@Daoya_codes' },
  { label: 'Dribbble', icon: '🏀', href: 'https://dribbble.com', handle: '@Daoya Yongma' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    if (status === 'loading') return
    setTimeout(() => setStatus(null), 3000)
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <span className="section-label">Let's Talk</span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-desc">
          Have a project in mind or want to say hi? My inbox is always open.
          I'll get back to you within 24 hours.
        </p>
      </div>

      <div className="contact__content">
        <div className="contact__info">
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <div className="contact-detail">
              <div className="contact-detail__icon">📧</div>
              <div>
                <small>Email</small>
                <a href="mailto:daoyang782@gmail.com">daoyang782@gmail.com</a>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail__icon">📱</div>
              <div>
                <small>Phone</small>
                <a href="tel:+14155551234"> (+856) 2091534161</a>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail__icon">📍</div>
              <div>
                <small>Location</small>
                <span>Vientiane, Laos</span>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail__icon">🕐</div>
              <div>
                <small>studying Hours</small>
                <span>Mon–Fri, 8AM–4PM PST</span>
              </div>
            </div>

            <div className="contact-socials">
              <h4>Find me on</h4>
              <div className="socials-grid">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-link">
                    <span className="social-link__icon">{s.icon}</span>
                    <div>
                      <strong>{s.label}</strong>
                      <small>{s.handle}</small>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="availability-badge">
              <span className="availability-dot" />
              <span>Currently available for freelance work</span>
            </div>
          </div>
        </div>

        <div className="contact__form-col">
          {status === 'success' ? (
            <div className="form-success">
              <div className="form-success__icon">✅</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out, {form.name || 'friend'}! I'll be in touch soon.</p>
              <button className="btn btn--primary" onClick={() => setStatus(null)}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn--primary btn--full" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <><span className="spinner" /> Sending...</>
                ) : (
                  <>Send Message <span>→</span></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 Alex Morgan. Designed & built with ❤️ and lots of ☕</p>
        <p className="footer__back">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top ↑
          </button>
        </p>
      </footer>
    </section>
  )
}