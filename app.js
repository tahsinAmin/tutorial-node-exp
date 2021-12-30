// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// globa;  dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root , create properties, etc.)
// npm init (step by step, [press eneter to skip)
// npm init -y (everythoing default)

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hello world");

// https://www.youtube.com/watch?v=TNV0_7QRDwY&list=PLnHJACx3NwAdT_8forzXYvx0o4A2VnoHX&index=8
// 02:37:46
