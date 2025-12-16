import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './FeaturedCollections.css'

const collections = [
  {
    id: 1,
    name: 'Kathpadar Saree',
    price: '₹3,999',
    image: '/images/printed-saree.png',
    gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(245, 230, 211, 0.15))',
  },
  {
    id: 2,
    name: 'Printed Saree',
    price: '₹8,999',
    image: '/images/designer-saree.png',
    gradient: 'linear-gradient(135deg, rgba(10, 77, 104, 0.15), rgba(5, 191, 219, 0.15))',
  },
  {
    id: 3,
    name: 'Cotton Saree',
    price: '₹4,999',
    image: '/images/dress.png',
    gradient: 'linear-gradient(135deg, rgba(8, 131, 149, 0.15), rgba(10, 77, 104, 0.15))',
  },
  {
    id: 4,
    name: 'Dress',
    price: '₹5,999',
    image: '/images/kathpathar-saree.png',
    gradient: 'linear-gradient(135deg, rgba(5, 191, 219, 0.15), rgba(212, 175, 55, 0.15))',
  },
  {
    id: 5,
    name: 'Designer Saree',
    price: '₹2,999',
    image: '/images/cotton-saree.png',
    gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(10, 77, 104, 0.15))',
  },
  {
    id: 6,
    name: 'Kathpadar Saree',
    price: '₹4,499',
    image: '/images/printed-saree.png',
    gradient: 'linear-gradient(135deg, rgba(8, 131, 149, 0.15), rgba(212, 175, 55, 0.15))',
  },
]

const FeaturedCollections = () => {
  const sectionRef = useRef(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.featured-collections-title',
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

      // Horizontal scroll animation
      const cards = sliderRef.current?.children
      if (cards) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            x: 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
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

  return (
    <section ref={sectionRef} className="featured-collections section">
      <div className="container">
        <h2 className="featured-collections-title section-title text-center">
          Featured Collections
        </h2>
        <p className="section-subtitle text-center">
          Discover our handpicked selection of premium sarees
        </p>

        <div ref={sliderRef} className="sellers-slider">
          {collections.map((item) => (
            <div key={item.id} className="seller-card">
              <div
                className="seller-image"
                style={{ 
                  backgroundImage: `url("${item.image}"), ${item.gradient}`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}
              >
                <div className="seller-badge">Bestseller</div>
              </div>
              <div className="seller-content">
                <h3>{item.name}</h3>
                <p className="seller-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollections

