/*************************************************************************
Attempt 1
*************************************************************************/

// const express = require('express');
// const bodyParser = require('body-parser');
// const db = require('./db/dbModel');
// var cors = require('cors');
// const routes = require('./routes.js');

// const app = express();

// app.use(cors());
// app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Routes
// app.use('/bestbnb', routes)

// const PORT = 3001;
// app.listen(PORT, function() {
//   console.log(`listening on PORT ${PORT}!`);
// });

/*************************************************************************
Attempt 2
*************************************************************************/

// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const routes = require('./../routes');

// const app = express();

// // app.set('PORT', process.env.PORT || 3001);

// app.get('/', (req, res) => {
//   res.redirect('/home/1');
// });

// app.use(express.static('public/'));
// app.use(express.static('client/dist'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/home/:homeId', (req, res) => {
//   const reactPath = path.join(__dirname, '../public/index.html');
//   res.sendFile(reactPath);
// });

// app.use('/api', routes);

// const PORT = 3001;
// app.listen(PORT, function() {
//   console.log(`listening on PORT ${PORT}!`);

// module.exports = app;

/*************************************************************************
Attempt 3
*************************************************************************/

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
