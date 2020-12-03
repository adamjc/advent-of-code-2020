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
var trajectories = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 }
];
var treeCounts = trajectories.map(function (trajectory) {
    var treeCount = 0;
    do {
        if (field[toboggan.y][toboggan.x] === '#') {
            treeCount += 1;
        }
        toboggan = move(toboggan, field[0].length, trajectory);
    } while (field[toboggan.y] !== undefined);
    toboggan = resetToboggan();
    return treeCount;
});
function resetToboggan() {
    return {
        x: 0,
        y: 0
    };
}
function move(toboggan, fieldWidth, movement) {
    return {
        x: (toboggan.x + movement.x) % fieldWidth,
        y: toboggan.y + movement.y
    };
}
console.log(treeCounts.reduce(function (acc, next) { return acc * next; }));
