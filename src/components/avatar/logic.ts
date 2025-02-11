function preprocessImage(imagePath: string, size: [number, number] = [128, 128]): Promise<number[][]> {
    return new Promise((resolve) => {
        const img = new Image()
        img.src = imagePath
        img.onload = function() {
            const canvas = document.createElement('canvas')
            canvas.width = size[0]
            canvas.height = size[1]
            const ctx = canvas.getContext('2d')
            if (!ctx) return
            ctx.drawImage(img, 0, 0, size[0], size[1])
            const imageData = ctx.getImageData(0, 0, size[0], size[1])
            const binaryImage: number[][] = Array.from({ length: size[1] }, () => new Array(size[0]).fill(0))
            for (let i = 0; i < imageData.data.length; i += 4) {
                const brightness = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3
                const x = (i / 4) % size[0]
                const y = Math.floor((i / 4) / size[0])
                binaryImage[y][x] = brightness > 128 ? 1 : 0
            }
            resolve(binaryImage)
        }
    })
}

function modifiedGameOfLife(grid: number[][], original: number[][], retainProb: number = 0.2): number[][] {
    const newGrid = grid.map(row => [...row])
    const kernel = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
    const rows = grid.length, cols = grid[0].length

    function getNeighbors(x: number, y: number): number {
        return kernel.reduce((sum, row, i) => sum + row.reduce((acc, val, j) => {
            const newX = x + i - 1, newY = y + j - 1
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
                return acc + (grid[newX][newY] || 0)
            }
            return acc
        }, 0), 0)
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const neighbors = getNeighbors(i, j)
            if (grid[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {
                newGrid[i][j] = 0
            } else if (grid[i][j] === 0 && neighbors === 3) {
                newGrid[i][j] = 1
            }
            if (Math.random() < retainProb && original[i][j] === 1) {
                newGrid[i][j] = 1
            }
        }
    }
    return newGrid
}

async function runCellularAutomaton(imagePath: string, steps: number = 50, retainProb: number = 0.2): Promise<number[][][]> {
    let grid = await preprocessImage(imagePath)
    const original = grid.map(row => [...row])
    const history: number[][][] = [grid]
    for (let i = 0; i < steps; i++) {
        grid = modifiedGameOfLife(grid, original, retainProb)
        history.push(grid)
    }
    return history
}

export default async function animateCellularAutomaton(imagePath: string, steps: number = 50, retainProb: number = 0.2): Promise<void> {
    const history = await runCellularAutomaton(imagePath, steps, retainProb)
    const canvas = document.getElementById('automaton-canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = history[0][0].length
    canvas.height = history[0].length

    let step = 0
    function drawFrame(): void {
        const grid = history[step]
        const imageData = ctx!.createImageData(canvas.width, canvas.height)
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                const index = (i * canvas.width + j) * 4
                const color = grid[i][j] ? 255 : 0
                imageData.data[index] = color
                imageData.data[index + 1] = color
                imageData.data[index + 2] = color
                imageData.data[index + 3] = 255
            }
        }
        ctx!.putImageData(imageData, 0, 0)
        step = (step + 1) % history.length
        setTimeout(()=>{
            requestAnimationFrame(drawFrame)
        }, 75)
    }
    drawFrame()
}