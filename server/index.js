const express = require('express');
const bodyParser = require('body-parser');
const db = require('./../database/index.js')

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

const PORT = 3001;
app.listen(PORT, function() {
  console.log(`listening on PORT ${PORT}!`);
});