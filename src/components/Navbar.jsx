import { useState, useEffect } from 'react'

const navLinks = ['Home', 'About', 'Skills', 'Certificates', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')
  
  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    if (menuOpen) window.addEventListener('click', closeMenu)
    return () => window.removeEventListener('click', closeMenu)
  }, [menuOpen])

  
  const handleNav = (link) => {
    setActive(link)
    setMenuOpen(false)
    
    // ໃຊ້ link ທີ່ສົ່ງມາຈາກການ Click ເພື່ອ Scroll
    const el = document.getElementById(link.toLowerCase())
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo" onClick={() => handleNav('Home')}>
        <span className="logo-bracket">&lt;</span>
        <span className="logo-name">Daoya</span>
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
        aria-label="Open navigation menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}