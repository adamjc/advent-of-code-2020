import { readFileSync } from 'fs'
import { join } from 'path'
const inputFile = join(__dirname, './input')

const removeDupes = (s:string):number => (new Set(s.split(''))).size

const answer = readFileSync(inputFile)
  .toString()
  .trim()
  .split('\n\n')
  .map(answer => answer.split('\n').join(''))
  .map(removeDupes)
  .reduce((a, b) => a + b)

console.log(answer)
