const { readFileSync, writeFileSync } = require("fs");
console.log('start')

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first}, ${second}`,
  { flag: "a" }
);

console.log('done with the task')
console.log('starting ther next one')


// Since there van be tasks which t6akles loinger time, that time the remianing codes are not working. So, it is lamost considered as down