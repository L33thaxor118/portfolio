'use client'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HeroUIProvider } from "@heroui/react"
import { Avatar } from "@/components/avatar"

export default function Portfolio() {
    return (
        <HeroUIProvider>
            <div className="container text-center mx-auto p-6 font-sans">
                <section className="py-20">
                    <div className="flex flex-col items-center">
                        <Avatar/>
                        <h1 className="text-5xl font-bold mb-4 mt-3">Azriel Alvarado</h1>
                        <p className="text-xl">Senior Software Engineer | Full-Stack & Native Mobile
                            Developer</p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="mt-12 text-center py-12">
                    <h2 className="text-3xl font-semibold mb-4">Let&apos;s Connect</h2>
                    <p className="text-gray-500 mb-4">Whether you have a question or just want to say hi, feel free to
                        reach out!</p>
                    <div className="flex justify-center gap-4">
                        <a href="https://github.com/azriel" target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
                                <FaGithub size={18}/> GitHub
                            </button>
                        </a>
                        <a href="https://linkedin.com/in/azriel" target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
                                <FaLinkedin size={18}/> LinkedIn
                            </button>
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center py-6 text-gray-500">
                  © 2025 Azriel. All rights reserved.
                </footer>
            </div>
        </HeroUIProvider>
    )
}
