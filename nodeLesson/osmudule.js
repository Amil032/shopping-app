const os = require('os');
console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem (),
    freeMEM:os.freemem()
    
}
console.log(currentOS);