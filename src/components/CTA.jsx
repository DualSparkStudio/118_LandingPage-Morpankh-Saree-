import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useMagnetic from '../hooks/useMagnetic'
import './CTA.css'

const CTA = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const whatsappBtnRef = useMagnetic(0.2)
  const callBtnRef = useMagnetic(0.2)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )

      // Animate buttons
      const buttons = contentRef.current?.querySelectorAll('.btn')
      if (buttons) {
        gsap.fromTo(
          buttons,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            stagger: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890?text=Hello%20Morpankh%20Saree!%20I%20would%20like%20to%20find%20my%20perfect%20saree.', '_blank')
  }

  const handleCallClick = () => {
    window.location.href = 'tel:+1234567890'
  }

  return (
    <section ref={sectionRef} className="cta-section section">
      <div className="cta-background"></div>
      <div className="cta-overlay"></div>
      
      <div className="container">
        <div ref={contentRef} className="cta-content">
          <h2 className="cta-title">Find Your Perfect Saree Today</h2>
          <p className="cta-subtitle">
            Experience the elegance of premium designer sarees. Connect with us
            and let us help you find the perfect piece for your special occasion.
          </p>
          
          <div className="cta-buttons">
            <button ref={whatsappBtnRef} className="btn btn-primary btn-large magnetic" onClick={handleWhatsAppClick}>
              WhatsApp Order
            </button>
            <button ref={callBtnRef} className="btn btn-secondary btn-large magnetic" onClick={handleCallClick}>
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

