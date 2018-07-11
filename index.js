const dotenv = require('dotenv').config({ path: 'variables.env' });
const colors = require('colors');
const setup = require('./setup');
const logger = require('./logger');
// run setup
try{
    setup.init()
}catch(err){
    logger.error(`Critical Error - Server Stoppping ${err}`);
    process.exit();
}

logger.log('Server Started');