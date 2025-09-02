import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaDownload } from "react-icons/fa"
import profilePic from "../assets/IMG_3174.jpg"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

// 🔹 Looping typing effect component
const LoopingTypingText = ({
                               texts,
                               typingSpeed = 100,
                               deletingSpeed = 50,
                               pause = 1500,
                           }: {
    texts: string[]
    typingSpeed?: number
    deletingSpeed?: number
    pause?: number
}) => {
    const [displayedText, setDisplayedText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [textIndex, setTextIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        const typingInterval = setInterval(() => {
            const currentText = texts[textIndex]
            if (!isDeleting) {
                // Typing
                setDisplayedText(currentText.slice(0, charIndex + 1))
                setCharIndex((prev) => prev + 1)
                if (charIndex + 1 === currentText.length) {
                    setTimeout(() => setIsDeleting(true), pause)
                }
            } else {
                // Deleting
                setDisplayedText(currentText.slice(0, charIndex - 1))
                setCharIndex((prev) => prev - 1)
                if (charIndex - 1 === 0) {
                    setIsDeleting(false)
                    setTextIndex((prev) => (prev + 1) % texts.length)
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed)

        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev)
        }, 500)

        return () => {
            clearInterval(typingInterval)
            clearInterval(cursorInterval)
        }
    }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pause])

    return (
        <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
            {displayedText}
            <span
                className="inline-block w-1 bg-white ml-1"
                style={{ visibility: showCursor ? "visible" : "hidden" }}
            ></span>
        </p>
    )
}

const Home = () => {
    const roles = ["Fullstack Developer", "Graphic Designer", "Web Developer"]

    return (
        <section
            id="home"
            className="flex min-h-screen items-center flex-col justify-center bg-gray-900 px-6 py-20 relative"
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between gap-12">
                {/* 🔹 Left: Profile Image with Gradient Border */}
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="relative p-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl"
                        />
                    </div>
                </motion.div>

                {/* 🔹 Right: Name, Title, Social Links */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left space-y-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                        Hi, I'm{" "}
                        <span className="text-gradient bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Vinil Vidushanka
            </span>
                    </h1>

                    {/* 🔹 Looping typing effect */}
                    <LoopingTypingText texts={roles} typingSpeed={100} deletingSpeed={50} pause={1500} />

                    {/* 🔹 Social Links */}
                    <div className="flex justify-center md:justify-start space-x-6 mt-4 text-2xl">
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
                                className="p-3 rounded-full shadow-lg bg-gray-800 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 hover:text-white transition transform hover:-translate-y-1"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* 🔹 Buttons */}
                    <div className="flex justify-center md:justify-start gap-4 mt-6">
                        <motion.a
                            href="#projects"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-500 transition transform hover:-translate-y-1"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.a>

                        <motion.a
                            href="/Vinil_Vidushanka_CV.pdf"
                            download
                            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-semibold rounded-lg shadow-lg hover:from-gray-700 hover:to-gray-600 transition transform hover:-translate-y-1"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaDownload className="mr-2" /> Download CV
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Home
