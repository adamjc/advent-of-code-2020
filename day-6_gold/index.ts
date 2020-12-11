import { readFileSync } from 'fs'
import { join } from 'path'
const inputFile = join(__dirname, './input')

const answer = readFileSync(inputFile)
  .toString()
  .trim()
  .split('\n\n')
  .map(answer => answer.split('\n'))
  .map(countDupes)
  .reduce((a, b) => a + b)

function countDupes (answers:string[]):number {
  const people = answers.length
  const counts = answers.join('').split('').reduce<Record<string,number>>((counts, current:string) => {
    counts[current] ? counts[current] += 1 : counts[current] = 1

    return counts
  }, {})

  const duplicateAnswers = Object.values(counts).filter(count => count === people).length

  return duplicateAnswers
}

console.log(answer)
