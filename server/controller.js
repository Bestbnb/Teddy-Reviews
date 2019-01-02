/*************************************************************************
Attempt 1
*************************************************************************/

// const db = require('./db/dbModel');

// const createUsers = (req, res) => {
//   db.Users.create({
//     name: req.query.name, 
//     profile_picture: req.query.profile_picture,
//     profile_page: req.query.profile_page
//   })
//   .then(() => {
//     console.log('SUCCESS: Created users!');
//     res.status(201);
//     res.send('Created users!');
//   })
//   .catch(err => {
//     console.log('FAILED: Couldnt NOT create users!');
//     res.status(500);
//     res.send(err);
//   });
// };

// const createStars = (req, res) => {
//   db.Stars.create({
//     accuracy: req.body.accuracy,
//     communication: req.body.communication,
//     cleanliness: req.body.cleanliness,
//     location: req.body.location,
//     check_in: req.body.check_in,
//     value: req.body.value
//   })
//   .then(() => {
//     console.log('SUCCESS: Created stars!');
//     res.status(201);
//     res.send('Created stars!');
//   })
//   .catch(err => {
//     console.log('FAILED: Could NOT create stars!');
//     res.status(500);
//     res.send(err);
//   });
// };

// const createReviews = (req, res) => {
//   db.Reviews.create({
//     date_published: req.body.date_published,
//     reviews: req.body.reviews
//   })
//   .then(() => {
//     console.log('SUCCESS: Created reviews!');
//     res.status(201);
//     res.send('Created reviews!');
//   })
//   .catch(err => {
//     console.log('FAILED: Could NOT create reviews!');
//     res.status(500);
//     res.send(err);
//   });
// };

// const findAllUsers = (req, res) => {
//   db.Users.findAll()
//     .then(bookings => {
//       console.log('SUCCESS: Retrieved all users!');
//       res.status(200);
//       res.send(bookings);
//     })
//     .catch(err => {
//       console.log('FAILED: Could not retrieve users!');
//       res.status(500);
//       res.send(err);
//     });
// };

// const findAllStars = (req, res) => {
//   db.Stars.findAll()
//     .then(data => {
//       console.log('SUCCESS: Retreved all stars!');
//       res.status(200);
//       res.send(data);
//     })
//     .catch(err => {
//       console.log('FAILED: Could not retrieve stars!');
//       res.status(500);
//       res.send(err);
//     });
// };

// const findAllReviews = (req, res) => {
//   db.Reviews.findAll()
//     .then(data => {
//       console.log('SUCCESS: Retreved all reviews!');
//       res.status(200);
//       res.send(data);
//     })
//     .catch(err => {
//       console.log('FAILED: Could not retrieve reviews!');
//       res.status(500);
//       res.send(err);
//     });
// };

// module.exports = {
//   createUsers,
//   createStars,
//   createReviews,
//   findAllUsers,
//   findAllStars,
//   findAllReviews
// };

/*************************************************************************
Attempt 2
*************************************************************************/

// var { Reviews } = require("../database/models.js");

// const controller = {
//   get: (req, res) => {
//     Reviews.find({ House: req.params.House }, (err, docs) => {
//       if (err) {
//         res.status(404).send(err);
//       } else {
//         res.status(200).send(docs);
//       }
//     });
//   },

//   post: (req, res) => {
//     Reviews.find(
//       { Text: { $regex: req.body.Text, $options: "i" }, House: req.body.House },
//       (err, docs) => {
//         if (err) {
//           res.status(404).send(err);
//         } else {
//           res.status(200).send(docs);
//         }
//       }
//     );
//   }
// };

// module.exports.controller = controller;

/*************************************************************************
Attempt 3
*************************************************************************/

const models = require('./models');

module.exports = {
  get: (req, res) => {
    models.Review.find({ room_id: Number(req.params.roomId) }, (err, reviews) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(reviews);
      }
    });
  },
};
