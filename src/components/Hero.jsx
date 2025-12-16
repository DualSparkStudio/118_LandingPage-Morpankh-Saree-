import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useMagnetic from '../hooks/useMagnetic'
import { PeacockFeather } from './DecorativeElements'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const headlineRef = useRef(null)
  const subheadlineRef = useRef(null)
  const ctaRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const primaryBtnRef = useMagnetic(0.2)
  const secondaryBtnRef = useMagnetic(0.2)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headline
      gsap.fromTo(
        headlineRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.3,
        }
      )

      // Animate subheadline
      gsap.fromTo(
        subheadlineRef.current,
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

      // Animate CTAs
      gsap.fromTo(
        ctaRef.current.children,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 0.9,
          stagger: 0.2,
        }
      )

      // Animate scroll indicator
      gsap.fromTo(
        scrollIndicatorRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 1.5,
        }
      )

      // Parallax effect on scroll
      gsap.to('.hero-background', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleWhatsAppClick = () => {
    // Keep WhatsApp button functional for CTA
    window.open('https://wa.me/1234567890?text=Hello%20Morpankh%20Saree!%20I%20would%20like%20to%20explore%20your%20collection.', '_blank')
  }

  const handleExploreClick = () => {
    // Smooth scroll to collections section
    document.querySelector('.featured-collections')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        {/* Placeholder for video or image - replace with actual asset */}
        <div className="hero-image-placeholder"></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <h1 ref={headlineRef} className="hero-headline">
            Where Tradition Meets<br />
            <span className="hero-headline-accent">Timeless Elegance</span>
          </h1>
          
          <p ref={subheadlineRef} className="hero-subheadline">
            Handpicked Designer Sarees for Every Occasion
          </p>
          
          <div ref={ctaRef} className="hero-ctas">
            <button 
              ref={primaryBtnRef}
              className="btn btn-primary magnetic"
              onClick={handleWhatsAppClick}
            >
              Shop on WhatsApp
            </button>
            <button 
              ref={secondaryBtnRef}
              className="btn btn-secondary magnetic"
              onClick={handleExploreClick}
            >
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      <div ref={scrollIndicatorRef} className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>

      {/* Floating decorative elements */}
      <div className="hero-floating-elements">
        <div className="floating-element floating-element-1">
          <PeacockFeather size={120} />
        </div>
        <div className="floating-element floating-element-2">
          <PeacockFeather size={80} />
        </div>
        <div className="floating-element floating-element-3">
          <PeacockFeather size={100} />
        </div>
      </div>
    </section>
  )
}

export default Hero

