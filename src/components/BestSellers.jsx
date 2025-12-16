import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './BestSellers.css'

const bestSellers = [
  {
    id: 1,
    name: 'Royal Silk Banarasi',
    price: '₹12,999',
    image: '/images/seller-1.jpg',
    gradient: 'linear-gradient(135deg, #d4af37, #f5e6d3)',
  },
  {
    id: 2,
    name: 'Elegant Kanjivaram',
    price: '₹15,999',
    image: '/images/seller-2.jpg',
    gradient: 'linear-gradient(135deg, #0a4d68, #05bfdb)',
  },
  {
    id: 3,
    name: 'Designer Party Wear',
    price: '₹8,999',
    image: '/images/seller-3.jpg',
    gradient: 'linear-gradient(135deg, #088395, #0a4d68)',
  },
  {
    id: 4,
    name: 'Traditional Chiffon',
    price: '₹6,999',
    image: '/images/seller-4.jpg',
    gradient: 'linear-gradient(135deg, #05bfdb, #d4af37)',
  },
  {
    id: 5,
    name: 'Bridal Lehenga Saree',
    price: '₹18,999',
    image: '/images/seller-5.jpg',
    gradient: 'linear-gradient(135deg, #d4af37, #0a4d68)',
  },
  {
    id: 6,
    name: 'Modern Georgette',
    price: '₹7,999',
    image: '/images/seller-6.jpg',
    gradient: 'linear-gradient(135deg, #088395, #d4af37)',
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

  const handleBuyClick = (productName, price) => {
    const message = encodeURIComponent(`Hi! I'm interested in ${productName} (${price}). Can you provide more details?`)
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank')
  }

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
                  background: `${item.gradient}, url("data:image/svg+xml,%3Csvg width='150' height='150' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='product${item.id}' x='0' y='0' width='75' height='75' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 37.5 Q18.75 18.75 37.5 37.5 T75 37.5' stroke='rgba(255,255,255,0.12)' stroke-width='1.5' fill='none'/%3E%3Cpath d='M37.5 0 Q37.5 18.75 37.5 37.5 Q37.5 56.25 37.5 75' stroke='rgba(255,255,255,0.08)' stroke-width='1' fill='none'/%3E%3Ccircle cx='18.75' cy='18.75' r='3' fill='rgba(255,255,255,0.2)'/%3E%3Ccircle cx='56.25' cy='56.25' r='3' fill='rgba(255,255,255,0.2)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='150' height='150' fill='url(%23product${item.id})'/%3E%3C/svg%3E")`,
                  backgroundSize: 'cover, 150px 150px',
                  backgroundPosition: 'center, center',
                  backgroundRepeat: 'no-repeat, repeat'
                }}
              >
                <div className="seller-badge">Bestseller</div>
                <div className="seller-overlay">
                  <button
                    className="seller-cta"
                    onClick={() => handleBuyClick(item.name, item.price)}
                  >
                    Buy on WhatsApp
                  </button>
                </div>
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

