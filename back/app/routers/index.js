const express = require('express');

const userRouter = require('./user');
const itinaryRouter = require('./itinerary');

const { errorHandler } = require('../helpers/errorHandler');

const motorbikeRouter = require('./motorbike');
const pictureRouter = require('./picture');

const router = express.Router();

// On préfixe les routers
router.use('/profil', userRouter);
router.use('/itineraires', itinaryRouter);
router.use('/motos', motorbikeRouter);
router.use('/images', pictureRouter);

router.use((err, _, response, next) => {
  errorHandler(err, response, next);
  console.log(err);
});

module.exports = router;
