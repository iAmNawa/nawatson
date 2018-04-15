// pm2 start index2.js -i 0

// pm2 list
// will show all clusters and their status

// pm2 show index2
// Will display a ton more information about a specific file

// pm2 monit
// WIll bring you to a screen where you can check individual processes

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
