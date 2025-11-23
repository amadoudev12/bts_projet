const bcrypt = require('bcrypt')
const testHash =  bcrypt.hash("bonjour", 10);
console.log("HASH TEST =", testHash);

const testCompare =  bcrypt.compare("bonjour", testHash);
console.log("COMPARE TEST =", testCompare);
