import { useEffect, useRef, useState } from 'react'
import styles from './Navbar.module.css'

const navLinks = ['Services', 'Work', 'Process', 'Pricing', 'Results', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <img src="/logo.png" alt="MH Web Designs" className={styles.logoImg} />
          <span className={styles.logoText}>Web Designs</span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {navLinks.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className={styles.link}>{link}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className={styles.cta}>
          Start Project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Hamburger */}
        <button className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span/><span/><span/>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
          <a href="#contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>Start Project →</a>
        </div>
      )}
    </nav>
  )
}
