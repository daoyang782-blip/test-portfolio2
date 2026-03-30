import { useEffect, useRef } from 'react'
import herodaoImg from '../assets/herodao.jpeg';
export default function Hero() {
  const blobRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blobRef.current) return
      const { clientX, clientY } = e
      blobRef.current.style.transform = `translate(${clientX * 0.04}px, ${clientY * 0.04}px)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero__bg-blobs">
        <div className="blob blob--1" ref={blobRef} />
        <div className="blob blob--2" />
        <div className="blob blob--3" />
      </div>

      <div className="hero__grid-lines" />

      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="dot" />
          <span>Available for opportunities</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line hero__title-line--1">Crafting</span>
          <span className="hero__title-line hero__title-line--2">Digital</span>
          <span className="hero__title-line hero__title-line--3">
            Experiences<span className="accent-dot">.</span>
          </span>
        </h1>

       <p className="hero__subtitle">
          Frontend Developer & UI/UX Designer — creating modern, responsive, 
          and user-friendly web experiences with clean design and smooth interactions.
       </p>

        <div className="hero__cta">
          <button
            className="btn btn--primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="btn btn--ghost"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </button>
        </div>

        <div className="hero__stats">
          {[
            { value: '100%', label: 'Continuous Learning' }, 
            { value: '7+', label: 'Academic Projects' },    
            { value: '6+', label: 'Tech Stack' }
          ].map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__card-container">
          <div className="profile-card">
            <div className="profile-card__avatar">
              <img src={herodaoImg}
              alt="Daoya Yongma" 
              style={{ objectPosition: 'center top' }} 
            />
            </div>
            <div className="profile-card__info">
              <h3>Daoya Yongma </h3>
              <p>Frontend Developer</p>
            </div>
            
            <div className="profile-card__tags">
              <span>React</span><span>Node.js</span><span>TypeScript</span>
            </div>
          </div>

          <div className="floating-badge floating-badge--1">
            <span className="floating-badge__icon">⚡</span>
            <div>
              <strong>Fast Delivery</strong>
              <small>On-time, every time</small>
            </div>
          </div>

          <div className="floating-badge floating-badge--2">
            <span className="floating-badge__icon">🏆</span>
            <div>
              <strong>Top Rated</strong>
              <small>5.0 ★ reviews</small>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-mouse__wheel" />
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  )
}