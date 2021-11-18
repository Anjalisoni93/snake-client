const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });
  

  // Added connect function to make sure its connected to server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: AJS');

    /* setTimeout(() => {
      conn.write('Move: up')
    }, 50);
    conn.write('Move: down');
    conn.write('Move: left');
    conn.write('Move: right');
    
    setInterval(() => {
      conn.write('Move: up')
    }, 50);

    setTimeout(() => {
      conn.write("Move: up")
    }, 50); */

  });

  // Added an event data which gets complete data and displays a message
  conn.on("data", (data) => {
    console.log('Server says..', data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};


module.exports = {connect};