const express = require('express');
const router = express.Router();
const areasNearbyController = require('../controllers/areasNearbyController');

/**
 * @swagger
 * /areas-nearby:
 *   get:
 *     summary: Get nearby areas
 *     parameters:
 *       - in: query
 *         name: lat
 *         required: true
 *         schema:
 *           type: number
 *         description: Latitude coordinate
 *       - in: query
 *         name: lon
 *         required: true
 *         schema:
 *           type: number
 *         description: Longitude coordinate
 *     responses:
 *       200:
 *         description: A list of nearby areas
 *       400:
 *         description: Bad request, missing latitude or longitude
 *       500:
 *         description: Internal server error
 */
router.get('/areas-nearby', areasNearbyController.getAreasNearby);

module.exports = router;
