import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './FeaturedCollections.css'

const collections = [
  {
    id: 1,
    title: 'Kathpadar Saree',
    description: 'Beautiful printed designs for every occasion',
    image: '/images/printed-saree.png',
    gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(245, 230, 211, 0.2))',
  },
  {
    id: 2,
    title: 'Printed Saree',
    description: 'Exclusive designer collections',
    image: '/images/designer-saree.png',
    gradient: 'linear-gradient(135deg, rgba(10, 77, 104, 0.2), rgba(5, 191, 219, 0.2))',
  },
  {
    id: 3,
    title: 'Cotton Saree',
    description: 'Elegant traditional dresses for modern occasions',
    image: '/images/dress.png',
    gradient: 'linear-gradient(135deg, rgba(8, 131, 149, 0.2), rgba(10, 77, 104, 0.2))',
  },
  {
    id: 4,
    title: 'Dress',
    description: 'Traditional elegance with modern touch',
    image: '/images/kathpathar-saree.png',
    gradient: 'linear-gradient(135deg, rgba(5, 191, 219, 0.2), rgba(212, 175, 55, 0.2))',
  },
  {
    id: 5,
    title: 'Designer Saree',
    description: 'Comfortable and elegant daily wear',
    image: '/images/cotton-saree.png',
    gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(10, 77, 104, 0.2))',
  },
]

const FeaturedCollections = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
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
    <section ref={sectionRef} className="featured-collections section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Collections</h2>
          <p className="section-subtitle">
            Discover our handpicked selection of premium sarees
          </p>
        </div>

        <div className="collections-grid">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="collection-card"
            >
              <div
                className="collection-image"
                style={{ 
                  backgroundImage: `url("${collection.image}"), ${collection.gradient}`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}
              >
              </div>
              <div className="collection-content">
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollections

