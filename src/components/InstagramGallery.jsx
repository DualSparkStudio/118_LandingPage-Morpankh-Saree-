import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './InstagramGallery.css'

// Placeholder gallery items - replace with actual Instagram API integration
const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  image: `/images/instagram-${i + 1}.jpg`,
  gradient: [
    'linear-gradient(135deg, #d4af37, #f5e6d3)',
    'linear-gradient(135deg, #0a4d68, #05bfdb)',
    'linear-gradient(135deg, #088395, #0a4d68)',
    'linear-gradient(135deg, #05bfdb, #d4af37)',
  ][i % 4],
}))

const InstagramGallery = () => {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.instagram-title',
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

      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              scale: 0.8,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
              delay: index * 0.05,
            }
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleFollowClick = () => {
    window.open('https://instagram.com/morpankhsaree', '_blank')
  }

  return (
    <section ref={sectionRef} className="instagram-gallery section">
      <div className="container">
        <h2 className="instagram-title section-title text-center">
          Follow Our Journey
        </h2>
        <p className="section-subtitle text-center">
          See our latest collections and customer stories on Instagram
        </p>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="gallery-item"
            >
              <div
                className="gallery-image"
                style={{ background: item.gradient }}
              >
                <div className="gallery-overlay">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="instagram-cta">
          <button className="btn btn-primary" onClick={handleFollowClick}>
            Follow @MorpankhSaree
          </button>
        </div>
      </div>
    </section>
  )
}

export default InstagramGallery

