import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaJava, FaPython } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiRedux, SiMongodb, SiExpress, SiNextdotjs, SiVite, SiMysql, SiFigma, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si"
import { DiReact } from "react-icons/di"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const palette = [
    "bg-red-400",
    "bg-blue-400",
    "bg-yellow-400",
    "bg-teal-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-orange-400",
    "bg-green-400",
]

const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-5xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
    { name: "React Native", icon: <DiReact className="text-blue-500 text-5xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600 text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-5xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700 text-5xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-5xl" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500 text-5xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700 text-5xl" /> },
    { name: "Java", icon: <FaJava className="text-red-600 text-5xl" /> },
    { name: "JavaFX", icon: <FaJava className="text-blue-700 text-5xl" /> }, // Added JavaFX
    { name: "Scene Builder", icon: <FaJava className="text-purple-500 text-5xl" /> }, // Added Scene Builder
    { name: "Python", icon: <FaPython className="text-yellow-500 text-5xl" /> },
    { name: "Databases", icon: <FaDatabase className="text-yellow-700 text-5xl" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500 text-5xl" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-700 text-5xl" /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-600 text-5xl" /> },
]

// The rest of the component remains the same
const Skills = () => {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (offset: number) => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: offset, behavior: "smooth" })
    }

    const row1 = skills.filter((_, idx) => idx % 2 === 0)
    const row2 = skills.filter((_, idx) => idx % 2 !== 0)

    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center bg-gray-900 px-6 py-20">
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-teal-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">My Skills</h2>

                <div className="relative">
                    <button
                        onClick={() => scroll(-300)}
                        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 text-white p-3 rounded-full shadow hover:bg-opacity-30 z-10"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        onClick={() => scroll(300)}
                        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 text-white p-3 rounded-full shadow hover:bg-opacity-30 z-10"
                    >
                        <ChevronRight size={28} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex flex-col gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 cursor-grab hide-scrollbar"
                    >
                        {[row1, row2].map((row, i) => (
                            <div key={i} className="flex gap-6 snap-x snap-mandatory">
                                {row.map((skill, idx) => (
                                    <motion.div
                                        key={skill.name}
                                        className={`flex-shrink-0 w-40 h-40 rounded-2xl bg-white shadow-xl flex flex-col items-center justify-center`}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        <p className={`text-white font-semibold mb-2 px-2 py-1 rounded ${palette[idx % palette.length]}`}>
                                            {skill.name}
                                        </p>
                                        {skill.icon}
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
