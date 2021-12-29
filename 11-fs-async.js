const { readFile, writeFile } = require("fs");
console.log('start')
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with the task')
      }
    );
  });
});
console.log('starting the next task')

// https://www.youtube.com/watch?v=TNV0_7QRDwY&list=PLnHJACx3NwAdT_8forzXYvx0o4A2VnoHX&index=8
// 01:27:32


// https://www.youtube.com/watch?v=TNV0_7QRDwY&list=PLnHJACx3NwAdT_8forzXYvx0o4A2VnoHX&index=8
// 01:27:32
