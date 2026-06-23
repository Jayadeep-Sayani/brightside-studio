import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import { scrollToHash } from '../utils/scrollToHash'

function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    scrollToHash(hash)
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
