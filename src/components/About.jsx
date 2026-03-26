export default function About() {
  const timeline = [
    { year: '2019', title: 'Bachelor\'s in Computer Science', place: 'MIT — Cambridge, MA', desc: 'Graduated with honors. Focused on distributed systems and HCI.' },
    { year: '2020', title: 'Junior Developer', place: 'TechNova Inc.', desc: 'Built REST APIs and React dashboards for fintech clients.' },
    { year: '2022', title: 'Mid-Level Full-Stack Engineer', place: 'PixelForge Studio', desc: 'Led frontend architecture for 3 SaaS products, mentored 2 juniors.' },
    { year: '2024', title: 'Senior Developer & Freelancer', place: 'Independent', desc: 'Delivering end-to-end solutions for startups and enterprises worldwide.' },
  ]

  return (
    <section className="about" id="about">
      <div className="section-header">
        <span className="section-label">Who I Am</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about__content">
        <div className="about__text-col">
          <div className="about__image-wrapper">
            <div className="about__image-frame">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=AlexMorgan&backgroundColor=c0ebf5" alt="Alex Morgan" className="about__image" />
            </div>
            <div className="about__image-accent" />
            <div className="about__badge">
              <span>💡</span>
              <div>
                <strong>Open to Work</strong>
                <small>Full-time & Freelance</small>
              </div>
            </div>
          </div>

          <div className="about__bio">
            <h3>Hi, I'm Alex Morgan</h3>
            <p>
              I'm a <strong>Full-Stack Developer</strong> and <strong>UI/UX Designer</strong> with
              5+ years of experience building scalable web applications. I love turning ambitious
              ideas into clean, functional, beautiful products.
            </p>
            <p>
              My approach blends technical rigor with design thinking — every pixel and every
              endpoint matters. When I'm not coding, I'm sketching interfaces, exploring new
              frameworks, or hiking somewhere scenic.
            </p>
            <div className="about__quick-facts">
              {[
                { icon: '📍', label: 'Location', value: 'San Francisco, CA' },
                { icon: '🌐', label: 'Languages', value: 'English, French' },
                { icon: '🎓', label: 'Degree', value: 'B.Sc. Computer Science' },
                { icon: '☕', label: 'Fuel', value: 'Specialty Coffee' },
              ].map(f => (
                <div className="quick-fact" key={f.label}>
                  <span>{f.icon}</span>
                  <div>
                    <small>{f.label}</small>
                    <strong>{f.value}</strong>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="btn btn--primary" download>
              Download CV
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v8M4 8l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="about__timeline-col">
          <h3 className="timeline-heading">My Journey</h3>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div className="timeline__item" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="timeline__year">{item.year}</div>
                <div className="timeline__dot" />
                <div className="timeline__body">
                  <h4>{item.title}</h4>
                  <span className="timeline__place">{item.place}</span>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}