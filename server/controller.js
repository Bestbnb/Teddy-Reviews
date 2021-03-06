const models = require('./models');

const reviews = {
  get: (req, res) => {
    models.Review.find({ home_id: Number(req.params.homeId) }, (err, reviews) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(reviews);
      }
    });
  },
};

module.exports = { reviews }
