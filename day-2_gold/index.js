"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var inputFile = path_1.join(__dirname, './input');
var isValid = function (count, policyMin, policyMax) { return count >= policyMin && count <= policyMax; };
var entries = fs_1.readFileSync(inputFile).toString().trim().split('\n').map(function (line) {
    var _a = line.split(' '), policy = _a[0], letter = _a[1], password = _a[2];
    letter = letter.split(':')[0];
    return {
        policyMin: parseInt(policy.split('-')[0]),
        policyMax: parseInt(policy.split('-')[1]),
        letter: letter,
        password: password
    };
});
var validPasswords = entries.map(function (_a) {
    var policyMin = _a.policyMin, policyMax = _a.policyMax, letter = _a.letter, password = _a.password;
    var count = password.split('').filter(function (x) { return x === letter; }).length;
    console.log(password, letter, count, policyMin, policyMax, isValid(count, policyMin, policyMax));
    if (isValid(count, policyMin, policyMax)) {
        return password;
    }
}).filter(function (x) { return x; });
console.log(validPasswords.length);
