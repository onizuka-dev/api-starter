const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController');
const DatesController = require('../controllers/DatesController');

router.get('/', HomeController.index);
router.get('/date', DatesController.index);

module.exports = router;
