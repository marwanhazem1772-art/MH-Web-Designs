import { useEffect, useRef } from 'react'
import ThreeScene from './ThreeScene'
import styles from './Hero.module.css'

const clients = ['Shopify', 'Stripe', 'Figma', 'Vercel', 'Linear', 'Notion']

export default function Hero() {
  const heroRef = useRef()

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll('[data-reveal]')
    if (!elements) return
    elements.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.06}s`
      el.classList.add('animate-fade-up')
    })
  }, [])

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Three.js background */}
      <div className={styles.canvas}>
        <ThreeScene />
      </div>

      {/* Ambient blobs */}
      <div className={styles.blobBlue} />
      <div className={styles.blobGreen} />

      {/* Grid overlay */}
      <div className={styles.grid} />

      <div className={`container ${styles.content}`}>
        {/* Badge */}
        <div data-reveal className={styles.badge}>
          <span className="tag">
            <span className="dot" />
            Trusted by 50+ growing businesses
          </span>
        </div>

        {/* Headline */}
        <h1 data-reveal className={styles.headline}>
          <span className={styles.lineTop}>We Build</span>
          <span className={`text-gradient ${styles.lineGrad}`}>Professional Websites</span>
          <span className={styles.lineBottom}>That Convert</span>
        </h1>

        {/* Sub */}
        <p data-reveal className={styles.sub}>
          Premium digital experiences for ambitious businesses in Egypt, UAE, and across the Middle East.
          <br />High-performance websites delivered in as little as 14 days.
        </p>

        {/* CTA row */}
        <div data-reveal className={styles.ctaRow}>
          <a href="https://wa.me/201029101204" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            WhatsApp Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="https://instagram.com/mh_web_designs" target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>
            DM on Instagram
          </a>
        </div>

        {/* Stats row */}
        <div data-reveal className={styles.statsRow}>
          {[
            { val: '10+', label: 'Projects Delivered' },
            { val: '3×', label: 'Avg. Revenue Increase' },
            { val: '14 days', label: 'Avg. Delivery' },
            { val: '100%', label: 'Satisfaction' },
          ].map(({ val, label }) => (
            <div key={label} className={styles.stat}>
              <span className={`text-gradient ${styles.statVal}`}>{val}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
