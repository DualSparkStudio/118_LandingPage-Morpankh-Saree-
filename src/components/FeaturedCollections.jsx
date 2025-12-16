import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './FeaturedCollections.css'

const collections = [
  {
    id: 1,
    title: 'Bridal Sarees',
    description: 'Exquisite designs for your special day',
    // Bridal/Wedding saree image
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83d49e5a?w=600&h=800&fit=crop&q=80&auto=format',
    gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(245, 230, 211, 0.2))',
  },
  {
    id: 2,
    title: 'Silk Sarees',
    description: 'Luxurious silk in traditional patterns',
    // Silk saree image - traditional Indian silk
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop&q=80&auto=format',
    gradient: 'linear-gradient(135deg, rgba(10, 77, 104, 0.2), rgba(5, 191, 219, 0.2))',
  },
  {
    id: 3,
    title: 'Party Wear',
    description: 'Elegant styles for celebrations',
    // Party wear saree image
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&q=80&auto=format',
    gradient: 'linear-gradient(135deg, rgba(8, 131, 149, 0.2), rgba(10, 77, 104, 0.2))',
  },
  {
    id: 4,
    title: 'Daily Elegance',
    description: 'Comfortable yet sophisticated',
    // Daily wear saree image
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&q=80&auto=format',
    gradient: 'linear-gradient(135deg, rgba(5, 191, 219, 0.2), rgba(212, 175, 55, 0.2))',
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

