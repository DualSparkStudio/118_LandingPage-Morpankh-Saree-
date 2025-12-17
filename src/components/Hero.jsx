import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const logoRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate logo
      gsap.fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.3,
        }
      )

      // Animate text
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.6,
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="hero coming-soon">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div ref={logoRef} className="hero-logo">
            <img 
              src="/images/Moprpankh-Sarees-Logo.png" 
              alt="Morpankh Sarees Logo" 
            />
          </div>
          
          <div ref={textRef} className="coming-soon-text">
            <h2>Stay Tuned</h2>
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

