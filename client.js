const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {

  // created constants file so that only use objects here
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  

  // Added connect function to make sure its connected to server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: AJS');

  });

  // Event that gets the message from server and displays it
  conn.on("data", (data) => {
    console.log('Server says..', data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};


module.exports = {connect};