process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');

// Is the file being executed in master mode?
if (cluster.isMaster) {
  console.log(cluster.isMaster);
  // Cause index.js to be executed *again*
  // but in child mode.
  cluster.fork();
} else {
  console.log(cluster.isMaster);
  // I'm a child and I'm going to act like a server
  // and do nothing else
  const express = require('express');
  const crypto = require('crypto');
  const app = express();
  const port = 4999;

  app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      res.send('Hi there');
    });
  });

  app.get('/fast', (req, res) => {
    res.send('this was fast');
  })

  app.listen(port)

  console.log('app is running on port:', port);
}
// 500 connections total
// ab -c 50 -n 500 localhost:4999/fast
// one connection
// ab -c 1 -n 1 localhost:4999/
