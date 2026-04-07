import styles from './Services.module.css'

const services = [
  {
    icon: '◈',
    title: 'Custom Web Development',
    desc: 'Blazing-fast, custom-coded websites built with React and Next.js for maximum performance.',
    tags: ['Egypt', 'UAE', 'Modern'],
    color: '#1a6fff',
  },
  {
    icon: '⬡',
    title: 'Corporate Branding',
    desc: 'Complete brand identities for industries in the Middle East, from automation to retail.',
    tags: ['Identity', 'Logo', 'Style'],
    color: '#00d68f',
  },
  {
    icon: '◎',
    title: 'High-Converting Landing Pages',
    desc: 'Focused strategies to scale your business in the Egypt and Middle East market.',
    tags: ['Middle East', 'Bespoke', 'ROI'],
    color: '#a259ff',
  },
  {
    icon: '⬢',
    title: '3D & Motion UI',
    desc: 'Immersive interactions that position you as a technological leader in your field.',
    tags: ['Three.js', 'GSAP', 'WebGL'],
    color: '#ff6b2b',
  },
  {
    icon: '◇',
    title: 'Technical Performance',
    desc: 'Blazing fast load times and core web vitals optimization for high search rankings.',
    tags: ['Speed', 'SEO', 'Security'],
    color: '#1a6fff',
  },
  {
    icon: '◉',
    title: 'Local Market Strategy',
    desc: 'Bespoke engineering solutions and retail integration strategies.',
    tags: ['Retail', 'Industrial', 'Local'],
    color: '#00d68f',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="tag"><span className="dot"/>Our Services</span>
          <h2 className={styles.title}>
            Everything You Need to<br/>
            <span className="text-gradient">Dominate Online</span>
          </h2>
          <p className={styles.subtitle}>
            From concept to launch, we handle every pixel of your digital presence.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={s.title} className={styles.card} style={{'--accent': s.color}}>
              <div className={styles.cardTop}>
                <span className={styles.icon} style={{ color: s.color }}>{s.icon}</span>
                <div className={styles.cardGlow} style={{ background: `radial-gradient(circle at 50% 0%, ${s.color}18 0%, transparent 70%)` }}/>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.tags}>
                {s.tags.map(t => (
                  <span key={t} className={styles.tag} style={{ borderColor: `${s.color}30`, color: s.color }}>
                    {t}
                  </span>
                ))}
              </div>
              <div className={styles.cardArrow}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
