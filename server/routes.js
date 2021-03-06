const express = require('express');
const controller = require('./controller.js');

const router = express.Router();
router.get('/home/:homeId/reviews', controller.reviews.get);

module.exports = router;
