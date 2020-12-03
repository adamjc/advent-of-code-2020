import { readFileSync } from 'fs'
import { join } from 'path'
const inputFile = join(__dirname, './input')

const field = readFileSync(inputFile).toString().trim().split('\n').map(line => line.split(''))

interface toboggan {
  x: number,
  y: number
}

let toboggan = {
  x: 0,
  y: 0
}

let treeCount = 0
do {
  if (field[toboggan.y][toboggan.x] === '#') {
    treeCount += 1
  }
  toboggan = move(toboggan, field[0].length)
} while (field[toboggan.y] !== undefined)

function move (toboggan:toboggan, fieldWidth:number):toboggan {
  return {
    x: (toboggan.x + 3) % fieldWidth,
    y: toboggan.y + 1
  }
}

console.log(treeCount)
