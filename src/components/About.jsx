import daoyaImg from '../assets/daoya.jpeg';
export default function About() {
  const timeline = [{ 
      year: '2026', 
      title: 'Web App & Frontend Development', 
      place: 'Institute Of Information Technology (IIT)', 
      desc: 'Focused on modern web development and user interface design (UI/UX).' 
    },
    { 
      year: '2024 – 2026', 
      title: 'Programming Student', 
      place: 'National University of Laos (NUOL)', 
      desc: 'Studying Computer Programming with a cumulative GPA of 3.25.' 
    },
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
             <img src={daoyaImg} alt="Daoya Yongma" className="about__image" />
            </div>
            <div className="about__image-accent" />
            <div className="about__badge">
              <span>💡</span>
          <div>
            <strong>Student Developer</strong>
            <small>Learning Web Development & UI/UX Design</small>
          </div>
            </div>
          </div>

       <div className="about__bio">
  <h3>Hi, I'm Daoya Yongma</h3>
  <p>
    I am a student currently studying <strong>Frontend Development</strong> and <strong>UI/UX Design</strong>. 
    I am passionate about building web applications and creating user-friendly designs. 
    Although I do not have professional experience yet, I am continuously learning and improving my skills 
    to build better projects in the future.
  </p>
            <p>
              My approach blends technical rigor with design thinking — every pixel and every
              endpoint matters. When I'm not coding, I'm sketching interfaces, exploring new
              frameworks, or hiking somewhere scenic.
            </p>
          <div className="about__quick-facts">
  {[
    { icon: '📍', label: 'Location', value: 'Vientiane, Laos' },
    { icon: '🌐', label: 'Languages', value: 'Lao, English' },
    { icon: '🎓', label: 'Education', value: 'Computer Science Student' },
    { icon: '💻', label: 'Focus', value: 'Frontend Development' },
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