import { useState, useEffect, useRef } from 'react'

const certs = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'March 2024',
    icon: '☁️',
    color: '#FF9900',
    id: 'AWS-SAA-C03-2024',
    desc: 'Validated expertise in designing distributed systems on AWS.',
    badge: 'Professional',
  },
  {
    title: 'Meta React Developer Certificate',
    issuer: 'Meta (Coursera)',
    date: 'November 2023',
    icon: '⚛️',
    color: '#0866FF',
    id: 'META-REACT-2023',
    desc: 'Advanced proficiency in React and modern frontend architecture.',
    badge: 'Certified',
  },
  {
    title: 'Google UX Design Professional',
    issuer: 'Google (Coursera)',
    date: 'July 2023',
    icon: '🎨',
    color: '#4285F4',
    id: 'GOOG-UX-2023',
    desc: 'End-to-end UX process from research to high-fidelity prototypes.',
    badge: 'Professional',
  },
  {
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: 'February 2023',
    icon: '🐳',
    color: '#2496ED',
    id: 'DCA-2023',
    desc: 'Containerization, orchestration, and production deployment.',
    badge: 'Associate',
  },
  {
    title: 'MongoDB Developer Certificate',
    issuer: 'MongoDB University',
    date: 'September 2022',
    icon: '🍃',
    color: '#00ED64',
    id: 'MDB-DEV-2022',
    desc: 'NoSQL data modeling, aggregations, and performance tuning.',
    badge: 'Developer',
  },
  {
    title: 'Best Innovation Award',
    issuer: 'HackSF 2023 Hackathon',
    date: 'October 2023',
    icon: '🏆',
    color: '#8B5CF6',
    id: 'HACKSF-2023',
    desc: 'First place for building an AI-powered accessibility tool in 48 hours.',
    badge: '1st Place',
  },
]

export default function Certficates() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const intervalRef = useRef(null)

  const goTo = (index) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 300)
  }

  const prev = () => goTo((current - 1 + certs.length) % certs.length)
  const next = () => goTo((current + 1) % certs.length)

  useEffect(() => {
    intervalRef.current = setInterval(next, 4500)
    return () => clearInterval(intervalRef.current)
  }, [current])

  const cert = certs[current]

  return (
    <section className="certificates" id="certificates">
      <div className="section-header">
        <span className="section-label">Recognition</span>
        <h2 className="section-title">Certificates & Awards</h2>
      </div>

      <div className="slideshow">
        <button className="slideshow__arrow slideshow__arrow--left" onClick={prev} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={`slideshow__card ${animating ? 'slideshow__card--exit' : 'slideshow__card--enter'}`}>
          <div className="cert-card">
            <div className="cert-card__header" style={{ '--cert-color': cert.color }}>
              <div className="cert-card__icon">{cert.icon}</div>
              <span className="cert-card__badge">{cert.badge}</span>
            </div>
            <div className="cert-card__body">
              <h3>{cert.title}</h3>
              <div className="cert-card__meta">
                <span className="cert-card__issuer">{cert.issuer}</span>
                <span className="cert-card__date">{cert.date}</span>
              </div>
              <p>{cert.desc}</p>
              <div className="cert-card__id">
                <span>ID:</span> <code>{cert.id}</code>
              </div>
            </div>
          </div>
        </div>

        <button className="slideshow__arrow slideshow__arrow--right" onClick={next} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="slideshow__dots">
        {certs.map((_, i) => (
          <button
            key={i}
            className={`slideshow__dot ${i === current ? 'slideshow__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="certs-grid">
        {certs.map((c, i) => (
          <button
            key={c.id}
            className={`cert-thumb ${i === current ? 'cert-thumb--active' : ''}`}
            onClick={() => goTo(i)}
          >
            <span>{c.icon}</span>
            <span>{c.title.split(' ').slice(0, 3).join(' ')}</span>
          </button>
        ))}
      </div>
    </section>
  )
}