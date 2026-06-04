import Navbar from "./Layout/Navbar"
import Hero from "./Sections/Hero"
import About from "./Sections/About"
import Projects from "./Sections/Projects"
import Competencies from "./Sections/Competencies"
import Reviews from "./Sections/Reviews"
import Contact from "./Sections/Contact"
import { Routes, Route } from "react-router"

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />
      <Routes>
       <Route path="/" element={<Hero/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/projects" element={<Projects/>} />
       <Route path="/competencies" element={<Competencies/>} />
       <Route path="/reviews" element={<Reviews/>} />
       <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
