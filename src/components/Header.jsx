import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Header.css'

const Header = () => {
  const headerRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.5,
        }
      )
    }, headerRef)

    return () => ctx.revert()
  }, [])

  return (
    <header ref={headerRef} className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <img 
              src="/images/Moprpankh-Sarees-Logo.png" 
              alt="Morpankh Sarees Logo" 
              className="logo"
            />
          </div>
          <nav className="header-nav">
            <button className="nav-icon" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button className="search-icon" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16z" stroke="currentColor" strokeWidth="2"/>
                <path d="M19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="cart-icon" aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 3h2l.4 2M7 13h10l-2-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
