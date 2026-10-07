import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Experience from './pages/Experience.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import Privacy from './pages/SkeyFort/Privacy.jsx'
import SkeyFort from './pages/SkeyFort/SkeyFort.jsx'
import Support from './pages/SkeyFort/Support.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skeyfort" element={<SkeyFort />} />
        <Route path="/skeyfort/privacy" element={<Privacy />} />
        <Route path="/skeyfort/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
