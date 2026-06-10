import Navbar from "./Layout/Navbar"
import Hero from "./Sections/Hero"
import About from "./Sections/About"
import Projects from "./Sections/Projects"
import Competencies from "./Sections/Competencies"
import Reviews from "./Sections/Reviews"
import Contact from "./Sections/Contact"
import Footer from "./Layout/Footer"


function App() {

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Competencies/>
        <Reviews/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
