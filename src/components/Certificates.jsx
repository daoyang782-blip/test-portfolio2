import { useState, useEffect, useRef } from 'react'
const certs = [
  {
    title: 'Web Development Fundamentals (HTML, CSS, JavaScript, React)',
    issuer: 'KADA Program',
    date: '2026',
    icon: '💻',
    color: '#4F46E5',
    id: 'KADA-WEB-2026',
    desc: 'Completed foundational training in web development including HTML, CSS, JavaScript, and React. Gained practical knowledge in building responsive and interactive web applications as part of the KADA training program.',
    badge: 'Completed',
  },
  {
    title: 'UX/UI Design (Mobile Application)',
    issuer: 'Self Learning / Course',
    date: '2026',
    icon: '📱',
    color: '#F59E0B',
    id: 'UXUI-MOBILE-2026',
    desc: 'Completed training in UX/UI design for mobile applications, focusing on user-friendly interfaces, visual hierarchy, and modern design principles. Practiced designing clean and intuitive mobile app layouts.',
    badge: 'Completed',
  },

  {
    title: "Basic C# Programming",
    issuer: "Self Study / Coursework",
    date: "2026",
    id: "CS-BASIC-2026",
    icon: "💻",
    color: "#4F46E5",
    description:
      "Learned fundamentals of C# programming including variables, loops, functions, object-oriented programming (OOP), and basic problem solving."
  },
  {
    title: "Basic Java Programming",
    issuer: "Self Study / Coursework",
    date: "2026",
    id: "JAVA-BASIC-2026",
    icon: "☕",
    color: "#F59E0B",
    description:
      "Learned Java fundamentals including syntax, OOP concepts, classes, objects, inheritance, and basic application development."
  },
  {
    title: "Database Fundamentals (SQL)",
    issuer: "Self Study / Coursework",
    date: "2026",
    id: "DB-BASIC-2026",
    icon: "🗄️",
    color: "#10B981",
    description:
      "Learned database basics including SQL queries, SELECT, INSERT, UPDATE, DELETE, table design, and relational database concepts."
  }
];


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

const currentCert = certs[current]; 

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
            {/* ກວດເບິ່ງວ່າ currentCert ມີຂໍ້ມູນແທ້ຫຼືບໍ່ກ່ອນຈະ Render */}
            {currentCert && (
              <>
                <div className="cert-card__header" style={{ '--certs-color': currentCert.color }}>
                  <div className="cert-card__icon">{currentCert.icon}</div>
                  <span className="cert-card__badge">{currentCert.badge}</span>
                </div>
                <div className="cert-card__body">
                  {/* ປ່ຽນຈາກ cert.title ເປັນ currentCert.title */}
                  <h3>{currentCert.title}</h3>
                  <div className="cert-card__meta">
                    <span className="cert-card__issuer">{currentCert.issuer}</span>
                    <span className="cert-card__date">{currentCert.date}</span>
                  </div>
                  {/* ປ່ຽນຈາກ cert.desc ເປັນ currentCert.desc */}
                  <p>{currentCert.desc}</p>
                  <div className="cert-card__id">
                    <span>ID:</span> <code>{currentCert.id}</code>
                  </div>
                </div>
              </>
            )}
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