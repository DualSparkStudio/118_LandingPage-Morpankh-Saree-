import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CraftsmanshipStory.css'

const CraftsmanshipStory = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to('.craftsmanship-background', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Text animation
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          },
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="craftsmanship-story section">
      <div className="craftsmanship-background"></div>
      <div className="craftsmanship-overlay"></div>
      
      <div className="container">
        <div className="craftsmanship-content">
          <div ref={textRef} className="craftsmanship-text">
            <h2 className="section-title">Craftsmanship Story</h2>
            <div className="craftsmanship-description">
              <p>
                At Morpankh Saree, we celebrate the rich heritage of Indian
                craftsmanship. Each saree is a testament to the skill and
                dedication of our master weavers, who have preserved traditional
                techniques passed down through generations.
              </p>
              <p>
                Our collection showcases the finest artistry from across India,
                blending timeless patterns with contemporary elegance. Every
                thread tells a story of passion, precision, and pride.
              </p>
              <p>
                We work directly with skilled artisans, ensuring fair trade
                practices and supporting the communities that keep these
                beautiful traditions alive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CraftsmanshipStory

