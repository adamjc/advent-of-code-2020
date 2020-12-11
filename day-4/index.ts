import { readFileSync } from 'fs'
import { join } from 'path'
const inputFile = join(__dirname, './input')

const validProps = ['byr', 'iyr', 'eyr', 'ecl', 'pid', 'hcl', 'hgt']
const passports = readFileSync(inputFile).toString().trim().split('\n\n').map(passport => passport.replace(/\n/g, ' '))
  .map(objectFromString)
  .filter(isValidPassport)

console.log(passports.length)

type passport = {
  [x:string]: any
}

function isValidPassport (passport:passport):null|boolean {
  const keys = Object.keys(passport)

  const isValid = validProps.reduce((valid:boolean, validProp) => {
    if (!keys.includes(validProp)) {
      valid = false
    }

    return valid
  }, true)

  console.log(`passport: ${JSON.stringify(passport, null, 2)} is ${isValid ? 'valid' : 'invalid'}`)

  return isValid
}

function objectFromString (str:string) {
  const arr = str.split(' ')
  return arr.reduce((obj:passport, prop) => {
    const [ key, val ] = prop.split(':')
    obj[key] = val
    return obj
  }, {})
}