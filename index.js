const dotenv = require('dotenv').config({ path: 'variables.env' });
const colors = require('colors');
const setup = require('./setup');
// run setup
try{
    setup.init()
}catch(err){
    console.error(`Critical Error - Server Stoppping ${err}`);
    process.exit();
}

  console.log('Server Started');