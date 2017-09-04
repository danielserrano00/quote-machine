var express = require('express');
var router = express.Router();
const quotesController = require('../controllers/quotes')


//catch all
router.get('/', quotesController.getQuote)
router.get('/phil', quotesController.getPhilsQuote)
router.get('/danny', quotesController.getDannysQuote)

module.exports = router;
