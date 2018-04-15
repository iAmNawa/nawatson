const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const express = require('express');
const app = express();

var yes = '';

nightmare
  .goto('https://google.com')
  .type('input#lst-ib.gsfi', 'cryptocurrency')
  .click('center input')
  .wait('div.lr_dct_ent_ph')
  .evaluate(() => document.querySelector('ol.lr_dct_sf_sens span').innerHTML)
  .end()
  .then((text) => {
   yes = text;
   fuckYeah(yes);
  })
  .catch(error => {
    console.error('Search failed:', error)
})

function fuckYeah(input) {
  app.get('/', function(req,res) {
    res.send(input)
  })
  console.log('ready');
}

app.listen(6544)
