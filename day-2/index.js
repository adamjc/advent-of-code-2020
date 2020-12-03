"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var inputFile = path_1.join(__dirname, './input');
var entries = fs_1.readFileSync(inputFile).toString().trim().split('\n').map(function (line) {
    var _a = line.split(' '), policy = _a[0], letter = _a[1], password = _a[2];
    var _b = policy.split('-').map(function (x) { return parseInt(x) - 1; }), positionOne = _b[0], positionTwo = _b[1];
    return {
        positionOne: positionOne,
        positionTwo: positionTwo,
        letter: letter.split(':')[0],
        password: password
    };
});
var validPasswords = entries.map(isValid).filter(Boolean);
function isValid(_a) {
    var password = _a.password, letter = _a.letter, positionOne = _a.positionOne, positionTwo = _a.positionTwo;
    if (password[positionOne] === letter && password[positionTwo] === letter) {
        return false;
    }
    if (password[positionOne] === letter || password[positionTwo] === letter) {
        return true;
    }
    return false;
}
console.log(validPasswords.length);
