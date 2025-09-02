import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./sections/Home"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Service from "./sections/Service";

function App() {
    return (
        <div className="font-sans">
            <Navbar />
            <main>
                <Home />
                <About />
                <Service />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
