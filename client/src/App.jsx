import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/about"
import Skills from "./components/skills"
import Resume from "./components/Resume"
import Nav from "./components/Navbar/Nav"

function App() {

  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
