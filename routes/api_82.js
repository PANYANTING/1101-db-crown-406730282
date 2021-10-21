var express = require('express');
var router = express.Router();
const apiCrown2Controller_82 = require('../controllers/apiCrown2Controller_82');

/* GET home page. */
router.get('/category_82', apiCrown2Controller_82.getCategories);

module.exports = router;
