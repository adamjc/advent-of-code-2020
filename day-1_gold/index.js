"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var inputFile = path_1.join(__dirname, './input');
var input = fs_1.readFileSync(inputFile).toString().trim().split('\n').map(Number);
for (var i = 0; i < input.length; i += 1) {
    for (var j = i + 1; j < input.length; j += 1) {
        for (var k = j + 1; k < input.length; k += 1) {
            if (input[i] + input[j] + input[k] === 2020) {
                console.log(input[i] * input[j] * input[k]);
                break;
            }
        }
    }
}
