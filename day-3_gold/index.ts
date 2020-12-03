import { readFileSync } from 'fs'
import { join } from 'path'
const inputFile = join(__dirname, './input')

const field = readFileSync(inputFile).toString().trim().split('\n').map(line => line.split(''))

interface vector {
  x: number,
  y: number
}

let toboggan = {
  x: 0,
  y: 0
}

const trajectories = [
  { x: 1, y: 1 },
  { x: 3, y: 1 },
  { x: 5, y: 1 },
  { x: 7, y: 1 },
  { x: 1, y: 2 }
]

const treeCounts = trajectories.map(trajectory => {
  let treeCount = 0
  do {
    if (field[toboggan.y][toboggan.x] === '#') {
      treeCount += 1
    }
    toboggan = move(toboggan, field[0].length, trajectory)
  } while (field[toboggan.y] !== undefined)

  toboggan = resetToboggan()

  return treeCount
})

function resetToboggan ():vector {
  return {
    x: 0,
    y: 0
  }
}

function move (toboggan:vector, fieldWidth:number, movement:vector):vector {
  return {
    x: (toboggan.x + movement.x) % fieldWidth,
    y: toboggan.y + movement.y
  }
}

console.log(treeCounts.reduce((acc, next) => acc * next))
