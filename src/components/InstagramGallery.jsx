import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './InstagramGallery.css'

// Gallery items with actual images
const galleryImages = [
  '/images/printed-saree.png',
  '/images/designer-saree.png',
  '/images/dress.png',
  '/images/kathpathar-saree.png',
  '/images/cotton-saree.png',
  '/images/printed-saree.png',
  '/images/designer-saree.png',
  '/images/dress.png',
  '/images/kathpathar-saree.png',
  '/images/cotton-saree.png',
  '/images/printed-saree.png',
  '/images/designer-saree.png',
]

const galleryItems = galleryImages.map((image, i) => ({
  id: i + 1,
  image: image,
  gradient: [
    'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(245, 230, 211, 0.1))',
    'linear-gradient(135deg, rgba(10, 77, 104, 0.1), rgba(5, 191, 219, 0.1))',
    'linear-gradient(135deg, rgba(8, 131, 149, 0.1), rgba(10, 77, 104, 0.1))',
    'linear-gradient(135deg, rgba(5, 191, 219, 0.1), rgba(212, 175, 55, 0.1))',
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
                style={{ 
                  background: item.gradient,
                }}
              >
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramGallery

