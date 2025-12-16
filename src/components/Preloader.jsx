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

  // Animate feather on mount
  useEffect(() => {
    gsap.fromTo(
      '.preloader-feather',
      {
        scale: 0,
        rotation: -180,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
      }
    )

    gsap.to('.preloader-feather', {
      rotation: 360,
      duration: 3,
      repeat: -1,
      ease: 'none',
    })
  }, [])

  return (
    <div className={`preloader ${isComplete ? 'complete' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-feather">
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 10 L60 30 L80 35 L65 50 L70 70 L50 60 L30 70 L35 50 L20 35 L40 30 Z"
              fill="var(--accent-gold)"
              stroke="var(--primary-teal)"
              strokeWidth="2"
            />
            <circle cx="50" cy="50" r="3" fill="var(--primary-teal)" />
          </svg>
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

