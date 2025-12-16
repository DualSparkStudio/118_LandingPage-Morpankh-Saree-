import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import FeaturedCollections from './components/FeaturedCollections'
import WhyMorpankh from './components/WhyMorpankh'
import BestSellers from './components/BestSellers'
import CraftsmanshipStory from './components/CraftsmanshipStory'
import Testimonials from './components/Testimonials'
import InstagramGallery from './components/InstagramGallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import './styles/App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Update ScrollTrigger on scroll
    lenis.on('scroll', ScrollTrigger.update)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app">
      <div className="grain-overlay"></div>
      <Preloader />
      <Hero />
      <FeaturedCollections />
      <WhyMorpankh />
      <BestSellers />
      <CraftsmanshipStory />
      <Testimonials />
      <InstagramGallery />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App

