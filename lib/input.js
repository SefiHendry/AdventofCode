const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync('input.txt', 'utf8')
    .toString()
    .trim()
    .split('\n');
    
module.exports = {
    input,
};