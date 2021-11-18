const { connect } = require("./client");
const { setupInput } = require("./input");
//const net = require("net");


// establishing connection
console.log("Connecting ...");
connect();
setupInput();