import { useState, useEffect } from 'react'

const navLinks = ['Home', 'About', 'Skills', 'Certificates', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (link) => {
    setActive(link)
    setMenuOpen(false)
    const el = document.getElementById(link.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo" onClick={() => handleNav('Home')}>
        <span className="logo-bracket">&lt;</span>
        <span className="logo-name">Alex</span>
        <span className="logo-bracket">/&gt;</span>
      </div>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link}>
            <button
              className={`nav-link ${active === link ? 'nav-link--active' : ''}`}
              onClick={() => handleNav(link)}
            >
              {link}
              <span className="nav-link__underline" />
            </button>
          </li>
        ))}
      </ul>

      <button
        className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}