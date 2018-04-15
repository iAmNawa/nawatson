const cluster = require('cluster');

// Is the file being executed in master mode?
if (cluster.isMaster) {
  // Cause index.js to be executed *again*
  // but in child mode.
  cluster.fork();
  cluster.fork();
} else {
  // I'm a child and I'm going to act like a server
  // and do nothing else
  const express = require('express');
  const app = express();
  const port = 4999;

  function doWork(duration) {
    const start = Date.now();
    while(Date.now() - start < duration) {}
    console.log('done')
  }

  app.get('/', (req, res) => {
    doWork(5000);
    res.send('Hi there');
  })

  app.get('/fast', (req, res) => {
    res.send('this was fast');
  })

  app.listen(port)

  console.log('app is running on port:', port);
}

// ab -c 50 -n 500 localhost:4999/fast
