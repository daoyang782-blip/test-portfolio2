import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certficates from './components/Certificates'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certficates />
      <Projects />
      <Contact />
    </div>
  )
}

export default App