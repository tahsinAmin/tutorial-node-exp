const os = require('os')

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)

// https://www.youtube.com/watch?v=TNV0_7QRDwY&list=PLnHJACx3NwAdT_8forzXYvx0o4A2VnoHX&index=8
// 01:04:16