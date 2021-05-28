#!/usr/bin/env node
'use strict';
/**
 * Set config vars
 */

const config = require('./config.json');
// console.log(config);
const my_env = process.env.NODE_ENV || "development";
const env_config = config[my_env];
if (env_config) {
  for (const objKey of Object.keys(env_config)) {
    process.env[objKey] = env_config[objKey];
    // console.log(env_config[objKey]);
  }
}

/**
 * Initiate mongoose - mongoDB
 */

require('./db');

/**
 * Module dependencies.
 */

const app = require('./app');
const debug = require('debug')('my-ecom:server');
const http = require('http');

/**
 * Get port from environment and store in Express.
 */

const hostname = process.env.HOST_NAME;
const port = normalizePort(process.env.PORT || '8000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, ()=>{
  console.log(`Server listening @ http://${hostname}:${port}/`);
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

/**
 * Terminate command
 */

const chunk = [];
process.stdin.on('data', (data) => {
  chunk.push(data.toString());
  console.log(chunk.toString());
  if (chunk.length>5) {
    chunk.splice(0, 3);
  }
  if (chunk.toString().toLowerCase().indexOf("zz")!==(-1)) {
    console.log("Server shutdown initiated. Please wait for complete shutdown.");
    // server.removeAllListeners("connection");
    // console.log("Removed all connection listeners.");
    server.close((err) => {
      if (err) console.error(err);
      else console.log("Server shutdown complete.");
    })
  }
});