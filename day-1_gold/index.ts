import { readFileSync } from 'fs'

const input:Array<number> = readFileSync('./input').toString().trim().split('\n').map(Number)

for (let i = 0; i < input.length; i += 1) {
  for (let j = i + 1; j < input.length; j += 1) {
    for (let k = j + 1; k < input.length; k += 1) {
      if (input[i] + input[j] + input[k] === 2020) {
        console.log(input[i] * input[j] * input[k])
        break;
      }
    }
  }
}