import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const target = document.querySelector(hash)
    if (!target) return

    const scroll = () => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    if (document.startViewTransition) {
      requestAnimationFrame(scroll)
    } else {
      scroll()
    }
  }, [hash])

  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </>
  )
}

export default HomePage
