const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || 'mongodb://database:27017/bestbnb-reviews';
// replace "localhost" with "database:27017" (for docker-compose)
// localhost 

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to ${dbURI}`);
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose default connection error: ${err}`);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = {
  Review: require('./Review.js'),
};
