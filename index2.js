// pm2 start index2.js -i 0

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
