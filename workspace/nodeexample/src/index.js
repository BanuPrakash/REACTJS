const {random} = require('lodash'); // installed - node_modules
const crypto = require('crypto'); // built-in
const {add, subtract} = require('./lib'); // project specific

console.log(random(100));

console.log(subtract(4,5));


const password = 'mysecretpassword';
const salt = crypto.randomBytes(16).toString('hex'); // Generate a random salt

const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');

console.log('Salt:', salt);
console.log('Hashed Password:', hash);