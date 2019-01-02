const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  res.redirect('/home/1');
});

app.use(express.static('public/'));
app.use(express.static('client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/home/:homeId', (req, res) => {
  const reactPath = path.join(__dirname, '../public/index.html');
  res.sendFile(reactPath);
});

app.use('/api', routes);

const PORT = 3002;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));

module.exports = app;