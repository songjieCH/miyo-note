#!/usr/bin/env node

function exit() {
    console.log("Caught interrupt/termination signal. Exiting.");
    process.exit(0);
}

process.on('SIGINT', exit);
process.on('SIGTERM', exit);

const app = require('./app');


startMY();

function startMY() {


}
