import { useState, useEffect, useRef } from 'react'
import styles from './Chatbot.module.css'

const BOT_NAME = "MH Assistant"
const WHATSAPP_LINK = "https://wa.me/201029101204"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I’m here to help you build a professional website in Egypt, UAE, or the Middle East. Any questions?' }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef()

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return
    
    setMessages(prev => [...prev, { type: 'user', text }])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response logic
    setTimeout(() => {
      setIsTyping(false)
      let response = "That's a great question! For a faster response and custom quote, feel free to text us directly on WhatsApp."
      
      const lower = text.toLowerCase()
      if (lower.includes('price') || lower.includes('cost') || lower.includes('budget')) {
        response = "Our professional websites start at 4,500 (Limited Time Offer). Want a specific quote for your project? DM us or WhatsApp +201029101204."
      } else if (lower.includes('time') || lower.includes('days') || lower.includes('long')) {
        response = "We typically deliver high-performance websites within 14 days. Shall we discuss your timeline on WhatsApp?"
      } else if (lower.includes('work') || lower.includes('portfolio') || lower.includes('egypt')) {
        response = "We've built platforms for companies like AG Industrial (EG) and ELSAAD ENG (UAE/EGY). Check our 'Work' section or I can send you more via WhatsApp!"
      }

      setMessages(prev => [...prev, { type: 'bot', text: response }])
    }, 1500)
  }

  return (
    <div className={styles.container}>
      {/* FAB */}
      <button 
        className={`${styles.fab} ${isOpen ? styles.fabActive : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chat"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.window}>
          <div className={styles.header}>
            <div className={styles.headerInfo}>
              <div className={styles.avatar}>MH</div>
              <div>
                <div className={styles.name}>{BOT_NAME}</div>
                <div className={styles.status}>Online · Egypt & UAE</div>
              </div>
            </div>
          </div>

          <div className={styles.messages} ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`${styles.msg} ${m.type === 'bot' ? styles.msgBot : styles.msgUser}`}>
                {m.text}
              </div>
            ))}
            {isTyping && (
              <div className={`${styles.msg} styles.msgBot`}>
                <div className={styles.typing}><span></span><span></span><span></span></div>
              </div>
            )}
          </div>

          <div className={styles.quick}>
            <button onClick={() => handleSend("Pricing info")}>Pricing?</button>
            <button onClick={() => handleSend("How long does it take?")}>Delivery time?</button>
          </div>

          <form className={styles.inputArea} onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
            <input 
              placeholder="Ask a question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 2L2 8l6 2 2 6 6-14z" />
              </svg>
            </button>
          </form>

          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.waDirect}>
            Text us on WhatsApp
          </a>
        </div>
      )}
    </div>
  )
}
