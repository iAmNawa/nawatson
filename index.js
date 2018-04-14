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

app.listen(port)

console.log('app is running on port:', port);
