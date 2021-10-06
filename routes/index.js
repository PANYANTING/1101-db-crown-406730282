var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',name:'PANYANTING',id:'406730282' });
});

module.exports = router;
