import styles from './Process.module.css'

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We deep-dive into your business goals, target audience, and market position. No templates — everything custom.',
    icon: '◈',
    color: '#1a6fff',
  },
  {
    num: '02',
    title: 'Strategy & Design',
    desc: 'We build your sitemap, wireframes, and full visual design in Figma. You review, approve, iterate.',
    icon: '⬡',
    color: '#00d68f',
  },
  {
    num: '03',
    title: 'Development',
    desc: 'Our engineers build your site pixel-perfect with a focus on performance, SEO, and accessibility.',
    icon: '◎',
    color: '#a259ff',
  },
  {
    num: '04',
    title: 'Launch & Grow',
    desc: 'We deploy, monitor, and provide post-launch support. Then we help you scale what\'s working.',
    icon: '◉',
    color: '#ff6b2b',
  },
]

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.blob} />
      <div className="container">
        <div className={styles.header}>
          <span className="tag"><span className="dot"/>Our Process</span>
          <h2 className={styles.title}>
            From Idea to Live<br/>
            <span className="text-gradient">in 14 Days</span>
          </h2>
          <p className={styles.subtitle}>
            A battle-tested 4-step workflow that delivers stunning results — fast.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.num} className={styles.step} style={{'--c': step.color}}>
              {/* Connector line */}
              {i < steps.length - 1 && <div className={styles.connector} />}
              <div className={styles.stepIcon} style={{ background: `${step.color}12`, borderColor: `${step.color}30` }}>
                <span style={{ color: step.color, fontSize: '1.3rem' }}>{step.icon}</span>
              </div>
              <div className={styles.stepContent}>
                <span className={styles.stepNum}>{step.num}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className={styles.banner}>
          <div className={styles.bannerGlow} />
          <div className={styles.bannerContent}>
            <h3 className={styles.bannerTitle}>Ready to start your project?</h3>
            <p className={styles.bannerSub}>Book a free 30-minute strategy call. No commitment required.</p>
          </div>
          <a href="#contact" className={styles.bannerBtn}>
            Book a Free Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
