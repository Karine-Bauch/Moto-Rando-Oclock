const express = require('express');
const userController = require('../controllers/userController');
const connectController = require('../controllers/connectController');

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.post('/connexion', connectController.connexion);

router.route('/:id')
  .get(controllerHandler(userController.findOne))
  .patch(controllerHandler(userController.update))
  .delete(controllerHandler(userController.delete));

router.route('/inscription')
  .post(userController.inscription);
module.exports = router;
