const { input } = require("../../lib/input");

let amount = 0;
let current = parseInt(input[0], 10);
let next;

for (let i = 0; i < input.length - 1; i++) {
    next = parseInt(input[i + 1], 10);
    if (next > current) {
        amount++;
    }
    current = next;
}
console.log(amount);