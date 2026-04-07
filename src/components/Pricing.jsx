import styles from './Pricing.module.css'

export default function Pricing() {
  const features = [
    'Custom React / Next.js Development',
    'Premium UI/UX Design (No Templates)',
    '14-Day Rapid Delivery',
    'Technical SEO & Speed Optimization',
    'Mobile & Tablet Responsive',
    'Direct WhatsApp Support',
  ]

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.blob} />
      <div className="container">
        <div className={styles.card}>
          <div className={styles.content}>
            <span className="tag"><span className="dot"/>Limited Time Offer</span>
            <h2 className={styles.title}>All-In-One<br/><span className="text-gradient">Premium Package</span></h2>
            <p className={styles.desc}>
              Everything you need to dominate your market in Egypt and the UAE. One fixed price, zero hidden fees.
            </p>
            
            <ul className={styles.features}>
              {features.map(f => (
                <li key={f}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="#1a6fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.priceColumn}>
            <div className={styles.priceContainer}>
              <div className={styles.oldPrice}>
                8,000 EGP
                <div className={styles.strike} />
              </div>
              <div className={styles.newPrice}>
                4,500 <span className={styles.currency}>EGP</span>
              </div>
              <p className={styles.note}>Valid for new projects this month</p>
            </div>

            <a href="https://wa.me/201029101204" target="_blank" rel="noopener noreferrer" className={styles.cta}>
              Claim This Offer
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <p className={styles.guarantee}>100% Satisfaction Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  )
}
