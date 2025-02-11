// @ts-nocheck
'use client'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HeroUIProvider } from "@heroui/react";
import {useEffect} from "react";
import {Card} from "@heroui/card";


const projects = [
    {
        emoji: "⚔️",
        title: "Screen Slayer",
        description: "A mobile app that lets users compete with friends for the lowest screen time.",
        link: "https://www.notion.so/example-project"
    },
    {
        emoji: "⛩️",
        title: "Kubernetes Personal Cloud",
        description: "A self-hosted cloud setup using Kubernetes for managing personal infrastructure.",
        link: "https://www.notion.so/example-project"
    },
    {
        emoji: "🎨",
        title: "Kubernetes Personal Cloud",
        description: "A self-hosted cloud setup using Kubernetes for managing personal infrastructure.",
        link: "https://www.notion.so/example-project"
    },
    {
        emoji: "🎸",
        title: "Kubernetes Personal Cloud",
        description: "A self-hosted cloud setup using Kubernetes for managing personal infrastructure.",
        link: "https://www.notion.so/example-project"
    },
    {
        emoji: "👾",
        title: "Kubernetes Personal Cloud",
        description: "A self-hosted cloud setup using Kubernetes for managing personal infrastructure.",
        link: "https://www.notion.so/example-project"
    },
    {
        emoji: "🚰",
        title: "Kubernetes Personal Cloud",
        description: "A self-hosted cloud setup using Kubernetes for managing personal infrastructure.",
        link: "https://www.notion.so/example-project"
    }
];
function preprocessImage(imagePath, size = [128, 128]) {
    return new Promise((resolve) => {
        let img = new Image();
        img.src = imagePath;
        img.onload = function() {
            let canvas = document.createElement('canvas');
            canvas.width = size[0];
            canvas.height = size[1];
            let ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, size[0], size[1]);
            let imageData = ctx.getImageData(0, 0, size[0], size[1]);
            let binaryImage = new Array(size[0]).fill().map(() => new Array(size[1]).fill(0));
            for (let i = 0; i < imageData.data.length; i += 4) {
                let brightness = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
                let x = (i / 4) % size[0];
                let y = Math.floor((i / 4) / size[1]);
                binaryImage[y][x] = brightness > 128 ? 1 : 0;
            }
            resolve(binaryImage);
        };
    });
}

function modifiedGameOfLife(grid, original, retainProb = 0.2) {
    let newGrid = grid.map(row => [...row]);
    let kernel = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
    let rows = grid.length, cols = grid[0].length;

    function getNeighbors(x, y) {
        return kernel.reduce((sum, row, i) => sum + row.reduce((acc, val, j) => {
            let newX = x + i - 1, newY = y + j - 1;
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
                return acc + (grid[newX][newY] || 0);
            }
            return acc;
        }, 0), 0);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let neighbors = getNeighbors(i, j);
            if (grid[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {
                newGrid[i][j] = 0;
            } else if (grid[i][j] === 0 && neighbors === 3) {
                newGrid[i][j] = 1;
            }
            if (Math.random() < retainProb && original[i][j] === 1) {
                newGrid[i][j] = 1;
            }
        }
    }
    return newGrid;
}

async function runCellularAutomaton(imagePath, steps = 50, retainProb = 0.2) {
    let grid = await preprocessImage(imagePath);
    let original = grid.map(row => [...row]);
    let history = [grid];
    for (let i = 0; i < steps; i++) {
        grid = modifiedGameOfLife(grid, original, retainProb);
        history.push(grid);
    }
    return history;
}

async function animateCellularAutomaton(imagePath, steps = 50, retainProb = 0.2) {
    let history = await runCellularAutomaton(imagePath, steps, retainProb);
    let canvas = document.getElementById('automaton-canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = history[0][0].length;
    canvas.height = history[0].length;

    let step = 0;
    function drawFrame() {
        let grid = history[step];
        let imageData = ctx.createImageData(canvas.width, canvas.height);
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                let index = (i * canvas.width + j) * 4;
                let color = grid[i][j] ? 255 : 0;
                imageData.data[index] = color;
                imageData.data[index + 1] = color;
                imageData.data[index + 2] = color;
                imageData.data[index + 3] = 255;
            }
        }
        ctx.putImageData(imageData, 0, 0);
        step = (step + 1) % history.length;
        setTimeout(()=>{
            requestAnimationFrame(drawFrame);
        }, 100)
    }
    drawFrame();
}

export default function Portfolio() {
    useEffect(() => {
        animateCellularAutomaton("./profile.jpg", 1000, 0.9)
    }, []);
    return (
        <HeroUIProvider>
            <div className="container text-center mx-auto p-6 font-sans">
                <section className="py-20">
                    <div className="flex flex-col items-center">
                        <canvas className="rounded-full size-64" id={"automaton-canvas"}></canvas>
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
    );
}
