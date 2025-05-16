'use client'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaFileAlt } from "react-icons/fa"
import LogoDotsShader from "../components/logoshader"
import { buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {SkillGrid} from "@/components/skillgrid"
import Link from "next/link"
import React from "react"

const projects = [
    {
        name: "Screen Slayer",
        description: "Challenge your friends to lower your screentime",
        link: "https://jealous-mass-574.notion.site/Screen-Slayer-11b3dbb661f8808c9c83fe91fdde1c01?pvs=74",
        tech: ["KotlinMP", "Android", "iOS"]
    },
    {
        name: "Siphon",
        description: "No-code Extract Transform Load tool",
        link: "https://jealous-mass-574.notion.site/Siphon-74b93b942fc54534909c5446c861f3db",
        tech: ["React"]
    },
    {
        name: "Old portfolio",
        description: "Built from scratch",
        link: "https://azrielalvarado.com",
        tech: ["React"]
    },
    {
        name: "Lyrical",
        description: "CLI tool for semantic song search",
        link: "https://jealous-mass-574.notion.site/Lyrical-1393dbb661f880639838c3045d2659bd?pvs=74",
        tech: ["NodeJS"]
    },
    {
        name: "This website",
        description: "I actually did it myself",
        link: "https://azrl.dev",
        tech: ["NextJS", "React"]
    },
    {
        name: "Composite Build Helper",
        description: "An IntelliJ plugin for composite Gradle builds",
        link: "https://jealous-mass-574.notion.site/Composite-Build-Helper-7cdf3ec8ccdf49238875a40d15172438?pvs=74",
        tech: ["Android"]
    },
    {
        name: "MuthR",
        description: "Interface 2037 ready for inquiry",
        link: "https://jealous-mass-574.notion.site/MU-TH-UR-9000-2638ac7fbc4f46cca1f033234790f967?pvs=4",
        tech: []
    },
    {
        name: "Pixel Canvas",
        description: "LED matrix controlled over the internet",
        link: "https://jealous-mass-574.notion.site/Pixel-Canvas-82246a59f35248f28a590898ba5d0510?pvs=4",
        tech: []
    },
    {
        name: "Timeline",
        description: "React component for timelines",
        link: "https://jealous-mass-574.notion.site/Timeline-UI-1e94b1580a3c44d487e985c9e6b19e5e?pvs=74",
        tech: []
    },
    {
        name: "Dojo Haim",
        description: "Martial arts academy website",
        link: "https://jealous-mass-574.notion.site/DojoHaim-44234b3a71934b1a8890893a7aae7fd1?pvs=4",
        tech: []
    },
]

const svgMask = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 270 30" fill="none">
    <style>
    .text {
      font: 30px monospace;
    }
  </style>
<text x="0" y="20" class="text" fill="#F97316">Azriel Alvarado</text>
</svg>
`

const svgMaskSmallScreen = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 270 30" fill="none">
    <style>
    .text {
      font: 30px monospace;
    }
  </style>
<text x="0" y="20" class="text" fill="#F97316">Azriel</text>
<text x="0" y="40" class="text" fill="#F97316">Alvarado</text>
</svg>
`


export default function Portfolio() {
    return (
        <div className="container text-center mx-auto p-6 font-sans">
            <section className="pt-10 pb-20">
                <div className="flex flex-col items-center">
                    <LogoDotsShader
                        opacities={[0.4, 0.4, 0.6, 0.6, 0.6, 0.8, 0.8, 0.8, 0.9, 1]}
                        colors={[
                            [255, 255, 255],
                        ]}
                        svgMask={svgMask}
                        totalSize={2}
                        dotSize={1}
                        maxFps={30}
                    />
                    <p className="text-xl mb-4">Senior Software Engineer | Full-Stack & Native Mobile
                        Developer</p>
                    <img src={"me.jpeg"} alt={"idk"} width={175} height={175} className={"rounded-full mt-4"}/>

                    <h2 className="text-5xl font-bold mb-4 mt-8">About</h2>
                    <p className="text-gray-400 mb-4 max-w-[600]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <Link href={"resume.pdf"} target="_blank" rel="noopener noreferrer"
                          className={buttonVariants({variant: "secondary"})}>
                        <FaFileAlt/> Resume
                    </Link>
                </div>
            </section>
            <section className="flex flex-col items-center w-full">
                <h2 className="text-5xl font-bold mb-10">Mastery</h2>
                <SkillGrid/>
            </section>
            <section className="mt-12 text-center py-12">
                <h2 className="text-5xl font-bold mb-8 mt-2" >Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-3xl m-auto">
                    {
                        projects.map((project) =>
                            <a href={project.link} key={project.name} target="_blank" rel="noopener noreferrer">
                                <Card
                                    className="hover:bg-accent transition duration-200 ease-in-out cursor-pointer h-full">
                                    <CardHeader>
                                        <CardTitle>{project.name}</CardTitle>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </a>
                        )
                    }
                </div>
            </section>
            {/* Contact Section */}
            <section className="mt-12 text-center py-12">
                <h2 className="text-3xl font-semibold mb-4">Let&apos;s Connect</h2>
                <p className="text-gray-500 mb-4">I&apos;m looking for a challenge</p>
                <div className="flex justify-center gap-4">
                    <Link href="https://github.com/L33thaxor118" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline" })}>
                        <FaGithub size={18}/> GitHub
                    </Link>
                    <Link href="https://linkedin.com/in/azriel-alvarado-105894182" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline" })}>
                        <FaLinkedin size={18}/> LinkedIn
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 text-gray-500">
              © 2025 Azriel Alvarado. All rights reserved.
            </footer>
        </div>
    )
}
