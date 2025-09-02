import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const navItems = ["home", "about", "services", "skills", "projects", "contact"]

    // Smooth scroll handler
    const handleScroll = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        setIsOpen(false) // close mobile menu after click
    }

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 shadow-lg">
            {/* Wrapper */}
            <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <motion.h1
                    className="text-2xl font-extrabold text-white tracking-wide cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleScroll("home")}
                >
                    Vinil Vidushanka
                </motion.h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-10 font-medium text-white">
                    {navItems.map((section) => (
                        <motion.li
                            key={section}
                            whileHover={{ scale: 1.1 }}
                            className="capitalize cursor-pointer relative group"
                            onClick={() => handleScroll(section)}
                        >
                            <span className="transition-colors">{section}</span>
                            {/* underline animation */}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-md text-white hover:bg-white/20 transition"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen ? (
                    <motion.ul
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden flex flex-col space-y-4 bg-white rounded-b-xl shadow-lg px-6 pb-6"
                    >
                        {navItems.map((section) => (
                            <li
                                key={section}
                                className="capitalize text-gray-800 font-medium hover:text-indigo-600 transition-colors cursor-pointer"
                                onClick={() => handleScroll(section)}
                            >
                                {section}
                            </li>
                        ))}
                    </motion.ul>
                ) : null}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
