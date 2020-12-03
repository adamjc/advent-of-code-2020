"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var inputFile = path_1.join(__dirname, './input');
var field = fs_1.readFileSync(inputFile).toString().trim().split('\n').map(function (line) { return line.split(''); });
var toboggan = {
    x: 0,
    y: 0
};
var treeCount = 0;
do {
    if (field[toboggan.y][toboggan.x] === '#') {
        treeCount += 1;
    }
    toboggan = move(toboggan, field[0].length);
} while (field[toboggan.y] !== undefined);
function move(toboggan, fieldWidth) {
    return {
        x: (toboggan.x + 3) % fieldWidth,
        y: toboggan.y + 1
    };
}
console.log(treeCount);
