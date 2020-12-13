import { readFileSync } from 'fs'
import { join } from 'path'
const inputFile = join(__dirname, './input')

const removeDupes = (s:string):number => (new Set(s.split(''))).size

const answer = readFileSync(inputFile)
  .toString()
  .trim()
  .split('\n')

type bag = Record<string,number>

function analyseBag (bag:string):bag {
  const bagRegex = /([\w]+ [\w]+) bags contain (([0-9]) (\w+ \w+) bags?[, ]?\.?)/gm

  return {
    'hello': 1
  }
}

console.log(answer)