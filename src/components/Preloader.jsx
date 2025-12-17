import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import './Preloader.css'

const Preloader = () => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsComplete(true)
        gsap.to('.preloader', {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => {
            gsap.set('.preloader', { display: 'none' })
          },
        })
      }, 500)
    }
  }, [progress])

  // Animate logo on mount
  useEffect(() => {
    gsap.fromTo(
      '.preloader-logo',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
      }
    )

    gsap.to('.preloader-logo', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })
  }, [])

  return (
    <div className={`preloader ${isComplete ? 'complete' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-logo">
          <img 
            src="/images/Moprpankh-Sarees-Logo.png" 
            alt="Morpankh Sarees Logo" 
          />
        </div>
        <div className="preloader-text">
          <h2>Morpankh Saree</h2>
          <p>Loading elegance...</p>
        </div>
        <div className="preloader-progress">
          <div
            className="preloader-progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="preloader-percentage">{Math.round(progress)}%</div>
      </div>
    </div>
  )
}

export default Preloader

