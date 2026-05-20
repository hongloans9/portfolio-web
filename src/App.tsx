import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </Layout>
  )
}

export default App
