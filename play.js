const { connect } = require("./client");
//const net = require("net");

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //added an eventlistener
  stdin.on("data", handleUserInput);

  return stdin;
};

// stuff happens here when particular key is pressed
const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
};s

// establishing connection
console.log("Connecting ...");
connect();
setupInput();