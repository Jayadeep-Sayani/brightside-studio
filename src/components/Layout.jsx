import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import PageTransition from './PageTransition'
import './Layout.css'

function Layout() {
  return (
    <>
      <Navbar />
      <main className="page">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </>
  )
}

export default Layout
