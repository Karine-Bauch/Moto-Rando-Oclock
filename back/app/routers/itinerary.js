const express = require('express');
const itineraryController = require('../controllers/itineraryController');

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.route('/')
  .get(controllerHandler(itineraryController.findAll))
  .post(controllerHandler(itineraryController.new));

router.route('/:id')
  .get(controllerHandler(itineraryController.findOne))
  .patch(controllerHandler(itineraryController.update))
  .delete(controllerHandler(itineraryController.delete));

module.exports = router;

/**
 *  * GET /
     * @summary Get a itinerary
     * @tags Generate - Routes to get all itinerary
     * @param {string} request.query - the first part of a sentence
     * @returns {itineraryController} 200 - itinerary object
     * @returns {Error} 404 - Input data invalid
 */

/**
 * * POST
     * @summary Send new word and get a itinerary
     * @tags Store - Routes to save end get a itinerary
     * @param {string} body.required - the first part of a sentencesentence
     * @returns {itineraryController} 200 - itinerary object
     * @returns {Error} 404 - Input data invalid

 */
/**
 * * GET(/:id)
     * @summary Get a one itinerary
     * @tags Generate - Routes to get one itinerary
     * @param {string} request.query - the first part of a sentence
     * @returns {itineraryController} 200 - itinerary object
     * @returns {Error} 404 - Input data invalid
 */
/**
 * * PATCH(/:id)
     * @summary Get a one itinerary
     * @tags Generate - Routes to get one itinerary
     * @param {string} request.query - the first part of a sentence
     * @returns {itineraryController} 200 - itinerary object
     * @returns {Error} 404 - Input data invalid
 */
/**
 * * DELETE(/:id)
     * @summary delete a one itinary
     * @tags Generate - deleting a route
     * @param {string} request.query - the first part of a sentence
     * @returns {itineraryController} 204 - itinerary object
     * @returns {Error} 404 - Input data invalid
 */
