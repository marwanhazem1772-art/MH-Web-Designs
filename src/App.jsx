import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Results from './components/Results'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

export default function App() {
  const cursorRef = useRef()
  const cursorRingRef = useRef()
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = cursorRingRef.current
    if (!cursor || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
    }

    // Smooth ring follow
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      requestAnimationFrame(animateRing)
    }
    animateRing()

    // Hover detection on interactive elements
    const addHover = () => setIsHover(true)
    const removeHover = () => setIsHover(false)

    const interactives = document.querySelectorAll('a, button, input, textarea, select, [data-hover]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  // Intersection observer for scroll reveals
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 100px 0px' }
    )

    // Observe cards and sections
    const targets = document.querySelectorAll(
      '[class*="card"], [class*="step"], [class*="stat"], [class*="testi"], [class*="item"]'
    )
    targets.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(16px)'
      el.style.transition = `opacity 0.4s ease ${i * 0.03}s, transform 0.4s ease ${i * 0.03}s`
      obs.observe(el)
    })

    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* Custom cursor */}
      <div ref={cursorRef} className={`cursor ${isHover ? 'hover' : ''}`} />
      <div ref={cursorRingRef} className={`cursor-ring ${isHover ? 'hover' : ''}`} />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Pricing />
        <Results />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
