const { connect } = require("./client");
const { setupInput } = require("./input");


// establishing connection
console.log("Connecting ...");
let newConnection = connect();
setupInput(newConnection);
