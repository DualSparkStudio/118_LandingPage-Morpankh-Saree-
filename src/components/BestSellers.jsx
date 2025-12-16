import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './BestSellers.css'

const bestSellers = [
  {
    id: 1,
    name: 'Royal Silk Banarasi',
    price: '₹12,999',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=500&fit=crop&q=80&auto=format',
    gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(245, 230, 211, 0.15))',
  },
  {
    id: 2,
    name: 'Elegant Kanjivaram',
    price: '₹15,999',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=500&fit=crop&q=80&auto=format',
    gradient: 'linear-gradient(135deg, rgba(10, 77, 104, 0.15), rgba(5, 191, 219, 0.15))',
  },
  {
    id: 3,
    name: 'Designer Party Wear',
    price: '₹8,999',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&q=80&auto=format',
    gradient: 'linear-gradient(135deg, rgba(8, 131, 149, 0.15), rgba(10, 77, 104, 0.15))',
  },
  {
    id: 4,
    name: 'Traditional Chiffon',
    price: '₹6,999',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80&auto=format',
    gradient: 'linear-gradient(135deg, rgba(5, 191, 219, 0.15), rgba(212, 175, 55, 0.15))',
  },
  {
    id: 5,
    name: 'Bridal Lehenga Saree',
    price: '₹18,999',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83d49e5a?w=400&h=500&fit=crop&q=80&auto=format',
    gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(10, 77, 104, 0.15))',
  },
  {
    id: 6,
    name: 'Modern Georgette',
    price: '₹7,999',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80&auto=format',
    gradient: 'linear-gradient(135deg, rgba(8, 131, 149, 0.15), rgba(212, 175, 55, 0.15))',
  },
]

const BestSellers = () => {
  const sectionRef = useRef(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.best-sellers-title',
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
    <section ref={sectionRef} className="best-sellers section">
      <div className="container">
        <h2 className="best-sellers-title section-title text-center">
          Best Sellers
        </h2>
        <p className="section-subtitle text-center">
          Our most loved designs, handpicked by our customers
        </p>

        <div ref={sliderRef} className="sellers-slider">
          {bestSellers.map((item) => (
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

export default BestSellers

