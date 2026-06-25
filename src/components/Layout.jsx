import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import PageTransition from './PageTransition'
import { MockupExpandProvider } from '../context/MockupExpandContext'
import './Layout.css'

function Layout() {
  return (
    <MockupExpandProvider>
      <Navbar />
      <main className="page">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </MockupExpandProvider>
  )
}

export default Layout
