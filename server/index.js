const express = require('express');
const bodyParser = require('body-parser');
const db = require('./../database/index.js')
const RandomGenerator = require('./controller.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/', RandomGenerator.add100Users);

const PORT = 3001;
app.listen(PORT, function() {
  console.log(`listening on PORT ${PORT}!`);
});