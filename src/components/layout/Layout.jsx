import { Outlet, useLocation } from 'react-router-dom'
import Breadcrumbs from '../ui/Breadcrumbs.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="site-shell flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-6 py-12 text-slate-900 dark:text-slate-100 sm:px-8 sm:py-16">
        <Breadcrumbs />
        <div className="page-enter min-w-0" key={pathname}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
