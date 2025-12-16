import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './FeaturedCollections.css'

const collections = [
  {
    id: 1,
    title: 'Bridal Sarees',
    description: 'Exquisite designs for your special day',
    image: '/images/bridal-saree.jpg',
    gradient: 'linear-gradient(135deg, #d4af37, #f5e6d3)',
  },
  {
    id: 2,
    title: 'Silk Sarees',
    description: 'Luxurious silk in traditional patterns',
    image: '/images/silk-saree.jpg',
    gradient: 'linear-gradient(135deg, #0a4d68, #05bfdb)',
  },
  {
    id: 3,
    title: 'Party Wear',
    description: 'Elegant styles for celebrations',
    image: '/images/party-saree.jpg',
    gradient: 'linear-gradient(135deg, #088395, #0a4d68)',
  },
  {
    id: 4,
    title: 'Daily Elegance',
    description: 'Comfortable yet sophisticated',
    image: '/images/daily-saree.jpg',
    gradient: 'linear-gradient(135deg, #05bfdb, #d4af37)',
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

  const handleCollectionClick = (title) => {
    const message = encodeURIComponent(`Hello! I'm interested in ${title}. Can you show me your collection?`)
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank')
  }

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
              onClick={() => handleCollectionClick(collection.title)}
            >
              <div
                className="collection-image"
                style={{ 
                  background: `${collection.gradient}, url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='saree${collection.id}' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 50 Q25 25 50 50 T100 50' stroke='rgba(255,255,255,0.1)' stroke-width='2' fill='none'/%3E%3Ccircle cx='25' cy='25' r='4' fill='rgba(255,255,255,0.15)'/%3E%3Ccircle cx='75' cy='75' r='4' fill='rgba(255,255,255,0.15)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23saree${collection.id})'/%3E%3C/svg%3E")`,
                  backgroundSize: 'cover, 200px 200px',
                  backgroundPosition: 'center, center',
                  backgroundRepeat: 'no-repeat, repeat'
                }}
              >
                <div className="collection-overlay">
                  <button className="collection-cta">View Collection</button>
                </div>
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

