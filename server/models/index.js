const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/bestbnb-reviews';
mongoose.connect(dbURI);

let db = mongoose.connection;

db.on('connected', () => {
  console.log(`Mongoose default connection open to ${dbURI}`);
});

// If the connection throws an error
db.on('error', (err) => {
  console.log(`Mongoose default connection error: ${err}`);
});

// When the connection is disconnected
db.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

/*************************************************************************
Schema
*************************************************************************/

const ReviewSchema = new mongoose.Schema({
  home_id: Number,
  username: String,
  created_at: String,
  review_text: String,
  profile_pciture: String,
  accuracy_rating: Number,
  communication_rating: Number,
  cleanliness_rating: Number,
  location_rating: Number,
  check_in_rating: Number,
  value_rating: Number,
  is_reported: Boolean,
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = { Review };
