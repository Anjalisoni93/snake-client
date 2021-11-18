// const { connect } = require("./client");


let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //added an eventlistener
  stdin.on("data", handleUserInput);

  return stdin;
};

// stuff happens here when particular key is pressed
const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'q') {
    connection.write('Say: Oops!');
  }
  if (key === 'e') {
    connection.write('Say: HahaNo!');
  }
};

module.exports = {setupInput};