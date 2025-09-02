import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

const Footer = () => {
    const sections = ["home", "about", "services", "skills", "projects", "contact"]

    return (
        <footer className="relative px-6 py-12 bg-gradient-to-r from-blue-500 to-teal-400 text-gray-100">
            {/* Decorative background circle */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full opacity-10 blur-3xl"></div>

            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Left: Logo & copyright */}
                <div className="text-center md:text-left space-y-2">
                    <motion.h1
                        className="text-2xl font-bold text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Vinil Vidushanka
                    </motion.h1>
                    <p className="text-white/80 text-sm">
                        &copy; {new Date().getFullYear()} Vinil Vidushanka. All rights reserved.
                    </p>
                </div>

                {/* Center: Navigation Links */}
                <ul className="flex flex-wrap justify-center md:justify-start space-x-6 font-medium text-white">
                    {sections.map((section) => (
                        <motion.li
                            key={section}
                            whileHover={{ scale: 1.1, color: "#f0f0f0" }}
                            className="capitalize cursor-pointer transition-colors duration-200"
                        >
                            <a href={`#${section}`}>{section}</a>
                        </motion.li>
                    ))}
                </ul>

                {/* Right: Social Links */}
                <div className="flex justify-center md:justify-end space-x-4 text-xl mt-4 md:mt-0">
                    {[
                        { icon: <FaGithub />, link: "https://github.com/vinilvidushanka" },
                        { icon: <FaLinkedin />, link: "https://linkedin.com/in/vinil-vidushanka-b64555319" },
                        { icon: <FaFacebook />, link: "https://www.facebook.com/vinil.vidushanka?mibextid=ZbWKwL" },
                        { icon: <FaInstagram />, link: "https://instagram.com/yourusername" },
                    ].map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition transform hover:-translate-y-1 shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
