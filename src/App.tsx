import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="bg-gray-950 text-white min-h-screen">
            <Navbar></Navbar>
            <Hero></Hero>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

export default App