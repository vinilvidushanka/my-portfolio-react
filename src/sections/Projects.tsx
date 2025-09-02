import { useState, useRef } from "react"
import { motion } from "framer-motion"
import backgroundRemover from "../assets/Screenshot (93).png"
import clearStock from "../assets/Screenshot (92).png"
import eventBookingImg from "../assets/Screenshot (69).png"
import dogCareClinic from "../assets/Screenshot 2024-02-18 083421.png"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
    {
        title: "Image Background Remover",
        description: "A web app built with JavaScript to remove image backgrounds efficiently.",
        link: "https://github.com/vinilvidushanka/Spring-boot---ClearStock.git",
        image: backgroundRemover,
    },
    {
        title: "ClearStock",
        description: "Full-stack e-commerce app with Spring Boot, payment integration, and inventory management.",
        link: "https://github.com/vinilvidushanka/Spring-boot---ClearStock.git",
        image: clearStock,
    },
    {
        title: "Event Booking System",
        description: "MERN stack event booking portal with payments and tickets.",
        link: "https://github.com/vinilvidushanka/eventify-smart_online_event_booking_portal-front-end.git",
        image: eventBookingImg,
    },
    {
        title: "Dog Care Clinic UI Design",
        description: "Modern UI design for a Dog Care Clinic built in Figma.",
        link: "#",
        image: dogCareClinic,
    },
]

const Projects = () => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [modalImage, setModalImage] = useState<string | null>(null)

    const scroll = (offset: number) => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: offset, behavior: "smooth" })
    }

    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center bg-gray-900 px-6 py-20">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">Projects</h2>

                <div className="relative">
                    {/* Scroll Buttons */}
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

                    {/* Scrollable container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 cursor-grab hide-scrollbar"
                    >
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                className="flex-shrink-0 w-80 h-96 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-400 shadow-xl flex flex-col items-center justify-between p-4 snap-start cursor-pointer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-xl shadow-lg mb-4"
                                    onClick={() => setModalImage(project.image)}
                                />
                                <div className="text-center">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-white mb-4 text-sm md:text-base">{project.description}</p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                                    >
                                        View Project →
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setModalImage(null)}
                >
                    <img src={modalImage} alt="Project Screenshot" className="max-h-[80%] max-w-[90%] rounded-lg shadow-xl" />
                </div>
            )}
        </section>
    )
}

export default Projects
