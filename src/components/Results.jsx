import styles from './Results.module.css'

const stats = [
  { val: '10+', label: 'Projects Delivered', color: '#1a6fff' },
  { val: '4,500', label: 'Pricing (Limited)', color: '#00d68f' },
  { val: '14', label: 'Day Delivery', color: '#a259ff' },
  { val: '100%', label: 'Satisfaction', color: '#ff6b2b' },
]

const testimonials = [
  {
    text: "MH Web Designs transformed our online presence overnight. Our conversion rate tripled in the first month after launch. They're not just developers — they're growth partners.",
    name: 'M. Ali',
    role: 'CEO · Egypt',
    avatar: 'M',
    color: '#1a6fff',
  },
  {
    text: "The team delivered a stunning corporate portal in 12 days. Every detail was perfect — from the micro-animations to the blazing page speed.",
    name: 'K. Hassan',
    role: 'Director · UAE',
    avatar: 'K',
    color: '#00d68f',
  },
  {
    text: "I've worked with many agencies before. MH Web Designs is on another level. They actually understood our brand DNA and turned it into something breathtaking.",
    name: 'A. Zaid',
    role: 'Founder · Saudi Arabia',
    avatar: 'A',
    color: '#a259ff',
  },
]

export default function Results() {
  return (
    <section id="results" className={styles.section}>
      <div className={styles.blob} />
      <div className="container">
        {/* Stats */}
        <div className={styles.statsGrid}>
          {stats.map(({ val, label, color }) => (
            <div key={label} className={styles.statCard} style={{'--c': color}}>
              <div className={styles.statGlow} style={{ background: `radial-gradient(circle at 50% 100%, ${color}18, transparent 70%)` }} />
              <span className={styles.statVal} style={{ color }}>{val}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials header */}
        <div className={styles.testiHeader}>
          <span className="tag"><span className="dot"/>Client Results</span>
          <h2 className={styles.title}>
            What Our Clients<br/>
            <span className="text-gradient">Say About Us</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className={styles.testiGrid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.testiCard}>
              {/* Stars */}
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FFB401">
                    <path d="M7 1l1.8 3.6L13 5.4l-3 2.9.7 4.1L7 10.4l-3.7 2 .7-4.1-3-2.9 4.2-.8L7 1z"/>
                  </svg>
                ))}
              </div>
              <p className={styles.testiText}>"{t.text}"</p>
              <div className={styles.testiAuthor}>
                <div className={styles.avatar} style={{ background: `${t.color}20`, color: t.color, borderColor: `${t.color}30` }}>
                  {t.avatar}
                </div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
