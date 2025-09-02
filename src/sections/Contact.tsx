import { motion } from "framer-motion"
import { useState, useEffect } from "react"

// 🔹 Looping typing effect component
const TypingText = ({ text, speed = 80, pause = 1000 }: { text: string, speed?: number, pause?: number }) => {
    const [displayedText, setDisplayedText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedText(text.slice(0, index + 1))
                setIndex(index + 1)
                if (index + 1 === text.length) setIsDeleting(true)
            } else {
                setDisplayedText(text.slice(0, index - 1))
                setIndex(index - 1)
                if (index - 1 === 0) setIsDeleting(false)
            }
        }, isDeleting ? speed / 2 : speed)

        return () => clearTimeout(timer)
    }, [displayedText, isDeleting, index, text, speed])

    // Pause at the end of the text
    useEffect(() => {
        if (!isDeleting && index === text.length) {
            const pauseTimer = setTimeout(() => setIsDeleting(true), pause)
            return () => clearTimeout(pauseTimer)
        }
    }, [index, isDeleting, text.length, pause])

    return (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400">
            {displayedText}
        </span>
    )
}

const Contact = () => {
    const [focused, setFocused] = useState({ name: false, email: false, message: false })

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center bg-gray-900 px-6 py-16 relative">
            {/* Decorative background circles */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>

            <div className="container mx-auto text-center relative z-10">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-white mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Get In Touch
                </motion.h2>

                {/* Looping Typing Gradient Text */}
                <motion.p
                    className="text-lg md:text-xl mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <TypingText text="Have any project idea? Let's connect!" speed={80} pause={1000} />
                </motion.p>

                {/* Compact Contact Form */}
                <motion.form
                    className="max-w-lg mx-auto space-y-4 bg-gradient-to-br from-white/90 to-white/70 rounded-2xl p-6 shadow-2xl relative z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Name Field */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder=" "
                            onFocus={() => setFocused({ ...focused, name: true })}
                            onBlur={() => setFocused({ ...focused, name: false })}
                            className="w-full p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900 bg-white/90 backdrop-blur-sm"
                        />
                        <label
                            className={`absolute left-4 top-3 text-gray-500 text-sm transition-all pointer-events-none
                                ${focused.name ? "-top-2 text-xs text-gray-700" : "text-gray-400"}
                            `}
                        >
                            Your Name
                        </label>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                        <input
                            type="email"
                            placeholder=" "
                            onFocus={() => setFocused({ ...focused, email: true })}
                            onBlur={() => setFocused({ ...focused, email: false })}
                            className="w-full p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900 bg-white/90 backdrop-blur-sm"
                        />
                        <label
                            className={`absolute left-4 top-3 text-gray-500 text-sm transition-all pointer-events-none
                                ${focused.email ? "-top-2 text-xs text-gray-700" : "text-gray-400"}
                            `}
                        >
                            Your Email
                        </label>
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                        <textarea
                            rows={3}
                            placeholder=" "
                            onFocus={() => setFocused({ ...focused, message: true })}
                            onBlur={() => setFocused({ ...focused, message: false })}
                            className="w-full p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900 bg-white/90 backdrop-blur-sm"
                        ></textarea>
                        <label
                            className={`absolute left-4 top-3 text-gray-500 text-sm transition-all pointer-events-none
                                ${focused.message ? "-top-2 text-xs text-gray-700" : "text-gray-400"}
                            `}
                        >
                            Your Message
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-5 py-2.5 bg-gradient-to-r from-white/90 to-white/70 text-gray-900 rounded-xl font-semibold hover:from-white hover:to-gray-100 transition"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    )
}

export default Contact
