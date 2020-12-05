import { readFileSync } from 'fs'
import { join } from 'path'
const inputFile = join(__dirname, './input')

const passes = readFileSync(inputFile).toString().trim().split('\n')

const ROWS = new Array(128).fill(0).map((_, i) => i)
const COLUMNS = new Array(8).fill(0).map((_, i) => i)

const seatIds = passes.map(pass => {
  const [rowInstructions, columnInstructions] = [pass.slice(0, 6), pass.slice(7, 10)]

  const row = findRow(rowInstructions)
  const column = findColumn(columnInstructions)
  
  return (row * 8) + column
})

function findRow (rowInstructions:string) {
  return rowInstructions.split('').reduce((rows, nextInst):Array<number> => {
    if (nextInst === 'F') {
      return rows.slice(0, rows.length / 2)
    } else {
      return rows.slice(rows.length / 2, rows.length)
    }
  }, ROWS)[0]
}

function findColumn (columnInstructions:string) {
  return columnInstructions.split('').reduce((cols, nextInst):Array<number> => {
    if (nextInst === 'L') {
      return cols.slice(0, cols.length / 2)
    } else {
      return cols.slice(cols.length / 2, cols.length)
    }
  }, COLUMNS)[0]
}

const x = seatIds.sort((a, b) => b - a)
console.log(x[0])