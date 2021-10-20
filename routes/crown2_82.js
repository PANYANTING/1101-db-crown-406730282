var express = require('express');
var router = express.Router();
const crown2Controller_82 = require('../controllers/serviceCrown2Controller_82');

/* GET home page. */
router.get('/', crown2Controller_82.getCategories);

module.exports = router;
