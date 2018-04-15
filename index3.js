// ab -c 1 -n 1 localhost:5001/
// ab -c 2 -n 2 localhost:5001/

const express = require('express');
const crypto = require('crypto');
const app = express();
const port = 5001;
const Worker = require('webworker-threads').Worker;

app.get('/', (req, res) => {
  const worker = new Worker(function() {
    this.onmessage = function() {
      let counter = 0;
      while (counter < 1e9) {
        counter++;
      }

      postMessage(counter);
    };
  });

  worker.onmessage = function(message) {
    console.log(message.data);
    res.send('' + message.data);
  }

  worker.postMessage();
});

app.get('/fast', (req, res) => {
  res.send('this was fast');
})

app.listen(port);
console.log('server on', port);
