import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Pre-fill WhatsApp message
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email || 'N/A'}%0AMessage: ${form.message}`
    window.open(`https://wa.me/201029101204?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.blobLeft} />
      <div className={styles.blobRight} />
      <div className="container">
        <div className={styles.inner}>
          {/* Left */}
          <div className={styles.left}>
            <span className="tag"><span className="dot"/>Get In Touch</span>
            <h2 className={styles.title}>
              Let's Build Something<br/>
              <span className="text-gradient">Extraordinary</span>
            </h2>
            <p className={styles.subtitle}>
              Ready to scale your business in Egypt, UAE, or the Middle East? Text us on WhatsApp or fill out the form.
            </p>

            <div className={styles.infoList}>
              {[
                { icon: '◈', label: 'Response Time', val: 'Fast (Within 2-4 hours)' },
                { icon: '⬡', label: 'Availability', val: 'New projects open' },
                { icon: '◎', label: 'Limited Offer', val: '4,500 (Save 3,500)' },
              ].map(({ icon, label, val }) => (
                <div key={label} className={styles.infoItem}>
                  <span className={styles.infoIcon}>{icon}</span>
                  <div>
                    <div className={styles.infoLabel}>{label}</div>
                    <div className={styles.infoVal}>{val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className={styles.socials}>
              {['WhatsApp', 'Instagram', 'Facebook'].map(s => (
                <a key={s} href="#" className={styles.socialLink}>{s}</a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className={styles.right}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Full Name</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="John Smith"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    className={styles.input}
                    placeholder="+20..."
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email Address (Optional)</label>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Project Details</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Tell us about the website you need..."
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className={styles.submit}>
                Send via WhatsApp
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
