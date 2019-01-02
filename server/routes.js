/*************************************************************************
Attempt 1
*************************************************************************/

// const router = require('express').Router();
// const controller = require('./controller.js');

// // CREATE
// router.post('/users', controller.createUsers);
// router.post('/stars', controller.createStars);
// router.post('/reviews', controller.createReviews);

// // READ ALL
// router.get('/users', controller.findAllUsers);
// router.get('/stars', controller.findAllStars);
// router.get('/reviews', controller.findAllReviews);

// // READ ONE

// // UPDATE

// // DELETE

// // SEARCH

// module.exports = router;

/*************************************************************************
Attempt 2
*************************************************************************/

// const router = require('express').Router();
// const { controller } = require('./controller.js');

// router
//   .route('/comments/:House')
//   .get(controller.get)
//   .post(controller.post)

// module.exports = router;

/*************************************************************************
Attempt 3
*************************************************************************/

const express = require('express');
const controller = require('./controller.js');

const router = express.Router();
router.get('/home/:homeId/reviews', controller.get);

module.exports = router;
