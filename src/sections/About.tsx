import { motion } from "framer-motion"
import profilePic from "../assets/IMG_3185.jpg"
import { Typewriter } from "react-simple-typewriter"

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col justify-center bg-gray-900 px-6 py-20 relative"
        >
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>

            {/* Section Title */}
            <motion.h2
                className="text-5xl md:text-6xl font-extrabold text-center text-white mb-16"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                About Me
            </motion.h2>

            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left: Profile Image */}
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover shadow-2xl border-4 border-blue-500"
                    />
                </motion.div>

                {/* Right: Description */}
                <motion.div
                    className="md:w-1/2 space-y-6 text-center md:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    {/* Typing effect line */}
                    <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6">
                        <Typewriter
                            words={["I'm Vinil Vidushanka"]}
                            loop={0} // 0 = infinite, or 1 = run once
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h3>

                    <p className="text-lg md:text-xl text-gray-300 max-w-lg">
                        I am a highly motivated and enthusiastic Software Engineering student currently completing diploma at the Institute of Software Engineering (IJSE). I am passionate about learning new technologies, exploring innovative solutions, and improving existing systems. Welcome to my portfolio, where I showcase projects and skills that reflect my journey.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default About
