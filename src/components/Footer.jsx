import styles from './Footer.module.css'

const links = {
  Services: ['Web Design', 'Corporate Web', 'UI/UX Design', 'Bespoke Solutions'],
  Regions: ['Egypt', 'UAE', 'Saudi Arabia', 'Middle East'],
  Connect: ['WhatsApp', 'Instagram', 'Facebook'],
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,9 26,21 14,28 2,21 2,9" fill="none" stroke="url(#fl)" strokeWidth="1.5"/>
                <polygon points="14,7 21,11 21,19 14,23 7,19 7,11" fill="url(#fl)" opacity="0.15"/>
                <circle cx="14" cy="15" r="3" fill="url(#fl)"/>
                <defs>
                  <linearGradient id="fl" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1a6fff"/>
                    <stop offset="1" stopColor="#00d68f"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className={styles.logoText}>MH Web Designs</span>
            </div>
            <p className={styles.tagline}>
              We build digital experiences that convert visitors into customers — and businesses into brands.
            </p>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Available for new projects
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section} className={styles.col}>
              <h4 className={styles.colTitle}>{section}</h4>
              <ul className={styles.colList}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className={styles.colLink}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <span className={styles.copy}>© 2025 MH Web Designs Agency. All rights reserved.</span>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Privacy Policy</a>
            <a href="#" className={styles.bottomLink}>Terms of Service</a>
            <a href="#" className={styles.bottomLink}>Cookie Policy</a>
          </div>
          <span className={styles.madeWith}>
            Built with <span style={{color: '#1a6fff'}}>◈</span> Three.js + React
          </span>
        </div>
      </div>
    </footer>
  )
}
