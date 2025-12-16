import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WhyMorpankh.css'

const features = [
  {
    icon: '✨',
    title: 'Premium Fabric Quality',
    description: 'Handpicked finest materials for lasting elegance',
  },
  {
    icon: '🎨',
    title: 'Authentic Indian Designs',
    description: 'Traditional patterns with modern sophistication',
  },
  {
    icon: '👥',
    title: 'Trusted by 1000+ Customers',
    description: 'Join our family of satisfied customers',
  },
  {
    icon: '💬',
    title: 'Easy WhatsApp Ordering',
    description: 'Simple, quick, and personalized service',
  },
  {
    icon: '🚚',
    title: 'Fast & Safe Delivery',
    description: 'Secure packaging and timely delivery',
  },
]

const WhyMorpankh = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.why-morpankh-title',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 40,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.1,
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="why-morpankh section">
      <div className="container">
        <h2 className="why-morpankh-title section-title text-center">
          Why Morpankh Saree?
        </h2>
        <p className="section-subtitle text-center">
          Experience the difference of premium quality and authentic craftsmanship
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="feature-card"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyMorpankh

