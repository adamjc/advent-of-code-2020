import { readFileSync } from 'fs'
import { join } from 'path'
const inputFile = join(__dirname, './input')

interface Entry {
  password: string,
  letter: string,
  positionOne: number,
  positionTwo: number
}

const entries = readFileSync(inputFile).toString().trim().split('\n').map(line => {
  let [policy, letter, password] = line.split(' ')
  const [positionOne, positionTwo] = policy.split('-').map(x => parseInt(x) - 1)

  return {
    positionOne,
    positionTwo,
    letter: letter.split(':')[0],
    password
  }
})

const validPasswords = entries.map(isValid).filter(Boolean)

function isValid ({ password, letter, positionOne, positionTwo }:Entry) {
  if (password[positionOne] === letter && password[positionTwo] === letter) {
    return false
  }

  if (password[positionOne] === letter || password[positionTwo] === letter) {
    return true
  }

  return false
}

console.log(validPasswords.length)