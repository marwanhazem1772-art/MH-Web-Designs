import styles from './Work.module.css'
import agImg from '../assets/projects/ag-industrial.png'
import elsaadImg from '../assets/projects/elsaad.jpg'
import beautyImg from '../assets/projects/beauty-clinic.png'

const projects = [
  {
    title: 'AG Industrial Systems',
    category: 'Industrial Automation · Corporate Web',
    desc: 'Bespoke industrial solutions platform for Egypt\'s leading automation distributor.',
    tags: ['Next.js', 'B2B', 'Egypt'],
    color: '#00d68f',
    image: agImg,
    num: '01',
    metric: 'B2B Authority',
  },
  {
    title: 'ELSAAD ENG',
    category: 'Engineering · Retail Solutions',
    desc: 'Integrated retail engineering portal for smart solutions across UAE and Egypt.',
    tags: ['Corporate', 'UAE', 'Engineering'],
    color: '#1a6fff',
    image: elsaadImg,
    num: '02',
    metric: 'Market Leader',
  },
  {
    title: 'Luxury Beauty Clinic',
    category: 'Wellness · Premium Branding',
    desc: 'High-end beauty and aesthetics clinic experience with local branches across Egypt.',
    tags: ['Luxury', 'Egypt', 'Booking'],
    color: '#ff85a2',
    image: beautyImg,
    num: '03',
    metric: '50k+ Happy Clients',
  },
]

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.bgBlob} />
      <div className="container">
        <div className={styles.header}>
          <span className="tag"><span className="dot"/>Selected Work</span>
          <h2 className={styles.title}>
            Projects That<br/>
            <span className="text-gradient">Set the Standard</span>
          </h2>
        </div>

        <div className={styles.list}>
          {projects.map((p, i) => (
            <div key={p.title} className={styles.item} style={{'--c': p.color}}>
              <div className={styles.itemLeft}>
                <span className={styles.num}>{p.num}</span>
                <div>
                  <div className={styles.cat}>{p.category}</div>
                  <h3 className={styles.name}>{p.title}</h3>
                  <p className={styles.desc}>{p.desc}</p>
                  <div className={styles.itemTags}>
                    {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                  </div>
                </div>
              </div>
              <div className={styles.itemRight}>
                <div className={styles.imageContainer}>
                  <img src={p.image} alt={p.title} className={styles.projectImage} />
                  <div className={styles.imageGlow} style={{ backgroundColor: p.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAll}>
          <a href="#contact" className={styles.viewBtn}>
            View All Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
