import { readFileSync } from 'fs'
import { join } from 'path'
const inputFile = join(__dirname, './input')

const validation = new Map([
  ['byr', (byr:string) => byr.match(/^(19[2-9][0-9]|200[0-2])$/)],
  ['iyr', (iyr:string) => iyr.match(/^(201[0-9]|2020)$/)],
  ['eyr', (eyr:string) => eyr.match(/^(202[0-9]|2030)$/)],
  ['hgt', (hgt:string) => hgt.match(/^(((?:1[5-8][0-9]|19[0-3])cm)|((?:59|6[0-9]|7[0-6])in))$/)],
  ['hcl', (hcl:string) => hcl.match(/^#[0-9a-f]{6}$/)],
  ['ecl', (ecl:string) => ecl.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/)],
  ['pid', (pid:string) => pid.match(/^[0-9]{9}$/)]
])
type passport = Record<string, string>

const passports = readFileSync(inputFile).toString().trim().split('\n\n').map(passport => passport.replace(/\n/g, ' '))
  .map(objectFromString)
  .filter(isValidPassport)

console.log(passports.length)

function isValidPassport (passport:passport):boolean {
  const isValid = [...validation].reduce((valid, [prop, validator]) => {
    const passProp = passport[prop]
    return valid ? Boolean(passProp && validator(passProp)) : valid
  }, true)

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
