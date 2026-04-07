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
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <polygon points="14,2 26,9 26,21 14,28 2,21 2,9" fill="none" stroke="url(#lg)" strokeWidth="1.5"/>
            <polygon points="14,7 21,11 21,19 14,23 7,19 7,11" fill="url(#lg)" opacity="0.15"/>
            <circle cx="14" cy="15" r="3" fill="url(#lg)"/>
            <defs>
              <linearGradient id="lg" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1a6fff"/>
                <stop offset="1" stopColor="#00d68f"/>
              </linearGradient>
            </defs>
          </svg>
          <span className={styles.logoText}>MH Web Designs</span>
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
