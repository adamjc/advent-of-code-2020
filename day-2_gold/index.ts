import { readFileSync } from 'fs'
import { join } from 'path'
const inputFile = join(__dirname, './input')

const isValid = (count:number, policyMin:number, policyMax:number) => count >= policyMin && count <= policyMax
const entries = readFileSync(inputFile).toString().trim().split('\n').map(line => {
  let [policy, letter, password] = line.split(' ')

  letter = letter.split(':')[0]

  return {
    policyMin: parseInt(policy.split('-')[0]),
    policyMax: parseInt(policy.split('-')[1]),
    letter,
    password
  }
})

const validPasswords = entries.map(({ policyMin, policyMax, letter, password }) => {
  const count = password.split('').filter(x => x === letter).length

  console.log(password, letter, count, policyMin, policyMax, isValid(count, policyMin, policyMax))
  if (isValid(count, policyMin, policyMax)) {
    return password
  }
}).filter(x => x)

console.log(validPasswords.length)
