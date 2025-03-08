const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const words = content.split(' ');

// const reactWordCount = words.filter(
//     (word) => word.toLowerCase().includes('react')).length;


const reactWordCount = content.match(/React/gi ?? []).length;

console.log("conteo de palabras", words.length);
console.log("conteo de palabras React", reactWordCount);