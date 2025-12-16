import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Absolutely stunning saree! The quality exceeded my expectations. The WhatsApp ordering was so convenient, and delivery was prompt. Highly recommend!',
    image: '/images/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Anjali Patel',
    location: 'Delhi',
    rating: 5,
    text: 'My bridal saree from Morpankh was perfect. The craftsmanship is exceptional, and the team helped me choose the perfect design. Thank you!',
    image: '/images/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'Riya Mehta',
    location: 'Bangalore',
    rating: 5,
    text: 'I\'ve ordered multiple sarees from them. Each one is unique and beautiful. The customer service is excellent, and they truly care about their customers.',
    image: '/images/testimonial-3.jpg',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    location: 'Hyderabad',
    rating: 5,
    text: 'The silk saree I bought is of premium quality. The packaging was secure, and the saree arrived in perfect condition. Will definitely order again!',
    image: '/images/testimonial-4.jpg',
  },
]

const Testimonials = () => {
  const sectionRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonials-title',
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

      const cards = document.querySelectorAll('.testimonial-card')
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
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

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'star filled' : 'star'}>
        ★
      </span>
    ))
  }

  return (
    <section ref={sectionRef} className="testimonials section">
      <div className="container">
        <h2 className="testimonials-title section-title text-center">
          What Our Customers Say
        </h2>
        <p className="section-subtitle text-center">
          Trusted by thousands of satisfied customers across India
        </p>

        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${
                index === currentIndex ? 'active' : ''
              }`}
            >
              <div className="testimonial-stars">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <div className="avatar-placeholder">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

