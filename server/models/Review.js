const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  home_id: Number,
  username: String,
  created_at: String,
  review_text: String,
  profile_picture: String,
  accuracy_rating: Number,
  communication_rating: Number,
  cleanliness_rating: Number,
  location_rating: Number,
  check_in_rating: Number,
  value_rating: Number,
  is_reported: Boolean,
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
